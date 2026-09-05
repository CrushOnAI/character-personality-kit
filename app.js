'use strict';
const kit=globalThis.PersonalityKit;
const form=document.getElementById('fields');
for(const[key,label,hint]of kit.fields){const l=document.createElement('label');l.htmlFor=key;l.textContent=label;const small=document.createElement('small');small.textContent=hint;l.append(small);const input=document.createElement('textarea');input.id=key;input.name=key;input.maxLength=6000;form.append(l,input);}
const read=()=>Object.fromEntries(kit.fields.map(([k])=>[k,document.getElementById(k).value]));
function render(){document.getElementById('preview').textContent=kit.markdown(read());const list=document.getElementById('checks');list.replaceChildren();for(const note of kit.review(read())){const li=document.createElement('li');li.textContent=note;list.append(li);}}
function load(data){for(const[k]of kit.fields)document.getElementById(k).value=data[k]||'';render();}
function download(extension,contents,type){const url=URL.createObjectURL(new Blob([contents],{type}));const a=document.createElement('a');a.href=url;a.download='character-brief.'+extension;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
form.addEventListener('input',render);
document.getElementById('example').addEventListener('click',()=>{if(confirm('Replace the current fields with the Iris example? Export first to keep your work.'))load(kit.example);});
document.getElementById('blank').addEventListener('click',()=>{if(confirm('Clear the current fields? Export first to keep your work.'))load({});});
document.getElementById('markdown').addEventListener('click',()=>download('md',kit.markdown(read()),'text/markdown;charset=utf-8'));
document.getElementById('json').addEventListener('click',()=>download('json',JSON.stringify(kit.clean(read()),null,2),'application/json'));
load(kit.example);
