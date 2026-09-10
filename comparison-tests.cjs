const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function element() { return {value:'', children:[], click(){}, append(...items){this.children.push(...items);}, addEventListener(event, fn){this[event]=fn;}}; }
const roots = Object.fromEntries(['#setup','#runs','#export','#status'].map(id=>[id,element()]));
let exported;
const context = {document:{createElement:element,querySelector:s=>roots[s]},Date,Blob,URL:{createObjectURL(blob){exported=blob;return 'blob:test';},revokeObjectURL(){}},setTimeout:fn=>fn()};
vm.runInNewContext(fs.readFileSync('comparison.js','utf8'),context);
assert.equal(roots['#runs'].children.length,6);
assert.equal(roots['#runs'].children[0].children.length,21);
roots['#export'].click();
(async()=>{
 let data=JSON.parse(await exported.text());
 assert.equal(data.replies.length,30);
 assert.ok(data.replies.every(r=>r.status==='untested' && r.response===''));
 assert.deepEqual(data.replies.filter((_,i)=>i%5===0).map(r=>r.condition),['A','B','C','C','B','A']);
 const raw='<script>not executable</script> Unicode: 雪';
 roots['#runs'].children[0].children[2].value=raw;
 roots['#setup'].value='Manual test setup';
 roots['#export'].click();
 data=JSON.parse(await exported.text());
 assert.equal(data.replies[0].response,raw);
 assert.equal(data.replies[0].status,'recorded-unverified');
 assert.equal(data.setup,'Manual test setup');
 assert.match(roots['#status'].textContent,/1 of 30/);
 assert.doesNotMatch(fs.readFileSync('comparison.js','utf8'),/innerHTML|fetch\(|localStorage|XMLHttpRequest/);
 console.log('10 comparison checks passed; these are software checks, not model tests.');
})().catch(e=>{console.error(e);process.exitCode=1;});
