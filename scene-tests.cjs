'use strict';
const assert=require('node:assert/strict');const k=require('./scene-core.js');let count=0;
function test(name,fn){fn();count++;console.log('PASS '+name);}
test('all seven fields normalize',()=>assert.equal(Object.keys(k.clean({})).length,7));
test('missing and non-text fields become unknown',()=>assert.equal(k.clean({time:42}).time,''));
test('trim whitespace without a false diff',()=>assert.deepEqual(k.changes({time:' 5 pm '},{time:'5 pm'}),[]));
test('museum transition changes seven fields',()=>assert.equal(k.changes(k.before,k.after).length,7));
test('emptying a field is visible',()=>assert.equal(k.changes({time:'5 pm'},{} )[0].after,''));
test('key holder not inferred',()=>assert.match(k.markdown(k.before),/no holder established/));
test('unknowns remain explicit in blank export',()=>assert.equal((k.markdown({}).match(/Unknown — not supplied/g)||[]).length,7));
test('handoff preserves constraints and ownership',()=>{assert.match(k.prompt(k.after),/archive is locked/);assert.match(k.prompt(k.after),/adult visitor/);});
test('snapshots JSON round trips',()=>assert.deepEqual(k.parse(JSON.stringify(k.bundle(k.before,k.after))),k.bundle(k.before,k.after)));
test('unsupported format rejected',()=>assert.throws(()=>k.parse('{}')));
test('malformed JSON rejected',()=>assert.throws(()=>k.parse('{')));
test('array state rejected',()=>assert.throws(()=>k.parse(JSON.stringify({format:'crushonai-scene-state',version:1,previous:[],current:k.after}))));
test('oversized field rejected',()=>{const data=k.bundle(k.before,k.after);data.current.time='x'.repeat(6001);assert.throws(()=>k.parse(JSON.stringify(data)));});
test('extra keys stripped',()=>{const data=k.bundle(k.before,k.after);data.current.extra='ignore';assert.equal(k.parse(JSON.stringify(data)).current.extra,undefined);});
test('no mutation of supplied state',()=>{const source={time:' 5 pm '};k.clean(source);k.prompt(source);assert.equal(source.time,' 5 pm ');});
console.log(count+' scene-state checks passed. These are software checks, not model evaluations.');
