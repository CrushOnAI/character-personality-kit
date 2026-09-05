'use strict';
const sceneKit=globalThis.SceneStateKit;
let checkpoint=sceneKit.clean({});
const sceneForm=document.getElementById('scene-fields');
for(const[key,label,hint]of sceneKit.fields){const l=document.createElement('label');l.htmlFor='state-'+key;l.textContent=label;const help=document.createElement('small');help.textContent=hint;l.append(help);const input=document.createElement('textarea');input.id='state-'+key;input.name=key;input.maxLength=6000;sceneForm.append(l,input);}
const sceneRead=()=>Object.fromEntries(sceneKit.fields.map(([key])=>[key,document.getElementById('state-'+key).value]));
const sceneStatus=text=>{document.getElementById('scene-status').textContent=text;};
function sceneRender(){const state=sceneRead();document.getElementById('scene-preview').textContent=sceneKit.prompt(state);const diff=document.getElementById('scene-diff');diff.replaceChildren();const changes=sceneKit.changes(checkpoint,state);if(!changes.length){const p=document.createElement('p');p.textContent='No text changes from the checkpoint.';diff.append(p);}for(const change of changes){const title=document.createElement('h3');title.textContent=change.label;const p=document.createElement('pre');p.textContent='Previous: '+(change.before||'[Unknown — not supplied]')+'\nCurrent: '+(change.after||'[Unknown — not supplied]');diff.append(title,p);}const checks=document.getElementById('scene-checks');checks.replaceChildren();for(const note of sceneKit.review(state)){const li=document.createElement('li');li.textContent=note;checks.append(li);}}
function sceneLoad(previous,current){checkpoint=sceneKit.clean(previous);for(const[key]of sceneKit.fields)document.getElementById('state-'+key).value=current[key]||'';sceneRender();}
function sceneDownload(name,content,type){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);sceneStatus('Download requested: '+name+'. Check your browser downloads.');}
sceneForm.addEventListener('input',sceneRender);
document.getElementById('scene-example').onclick=()=>{if(confirm('Replace both snapshots with the museum example? Export first to keep your work.')){sceneLoad(sceneKit.before,sceneKit.after);sceneStatus('Museum transition loaded. Review it before use.');}};
document.getElementById('scene-blank').onclick=()=>{if(confirm('Clear both snapshots? Export first to keep your work.')){sceneLoad({},{});sceneStatus('Both snapshots cleared.');}};
document.getElementById('scene-checkpoint').onclick=()=>{if(confirm('Replace the checkpoint with the current state? Export first to keep the previous comparison.')){checkpoint=sceneKit.clean(sceneRead());sceneRender();sceneStatus('Checkpoint updated; make the next scene changes on the left.');}};
document.getElementById('scene-md').onclick=()=>sceneDownload('scene-handoff.md',sceneKit.prompt(sceneRead()),'text/markdown;charset=utf-8');
document.getElementById('scene-json').onclick=()=>sceneDownload('scene-state.json',JSON.stringify(sceneKit.bundle(checkpoint,sceneRead()),null,2),'application/json');
const sceneFile=document.getElementById('scene-file');
document.getElementById('scene-import').onclick=()=>sceneFile.click();
sceneFile.onchange=async()=>{const file=sceneFile.files[0];if(!file)return;try{if(file.size>1048576)throw new Error('File exceeds the 1 MB limit.');const parsed=sceneKit.parse(await file.text());if(confirm('Replace both snapshots with this file? Export first to keep your work.')){sceneLoad(parsed.previous,parsed.current);sceneStatus('Imported both snapshots. Review the facts before use.');}}catch(error){sceneStatus('Import failed; your current work is unchanged. '+error.message);}finally{sceneFile.value='';}};
sceneLoad(sceneKit.before,sceneKit.after);
