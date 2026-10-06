import {JSDOM} from 'jsdom';
import fs from 'fs';

const html=fs.readFileSync('index.html','utf8').replace(/<script[\s\S]*?<\/script>/g,'');
let js=fs.readFileSync('script.js','utf8')+'\nwindow.__QA={lessons,EDITOR_FOCUS,masterChecks};';
function boot(storage={}){
  const dom=new JSDOM(html,{url:'https://example.test',runScripts:'dangerously',pretendToBeVisual:true});
  dom.window.HTMLElement.prototype.scrollIntoView=function(){};
  dom.window.requestAnimationFrame=(cb)=>cb();
  for(const [k,v] of Object.entries(storage)) dom.window.localStorage.setItem(k,v);
  const errors=[];
  dom.window.addEventListener('error',e=>errors.push(String(e.error||e.message)));
  try{dom.window.eval(js)}catch(e){errors.push(String(e.stack||e))}
  return {dom,errors};
}
const first=boot();
const d=first.dom.window.document;
const q=first.dom.window.__QA;
if(first.errors.length) throw new Error(first.errors.join('\n'));
if(q.lessons.length!==19) throw new Error('lesson count');
if(q.masterChecks.length!==22) throw new Error('mastery count');
if(d.querySelectorAll('.nav-item').length!==19) throw new Error('nav count');
if(d.querySelectorAll('.road-card').length!==19) throw new Error('roadmap count');
if(d.querySelectorAll('#mobileLessonSelect option').length!==19) throw new Error('mobile options');
for(const l of q.lessons){
  const got=new Set(Object.keys(q.EDITOR_FOCUS[l.n]||{}).map(Number));
  const missing=l.steps.map((_,i)=>i+1).filter(n=>!got.has(n));
  if(missing.length) throw new Error('editor focus missing '+l.n+': '+missing.join(','));
}
d.querySelector('#nextLessonBtn').click();
d.querySelector('#teacherModeBtn').click();
d.querySelector('#doneBtn').click();
if(!first.dom.window.localStorage.getItem('s3-done')?.includes('02')) throw new Error('done persistence');

const bad=boot({'s3-done':'{bad json','s3-mastery':'{"not":"array"}','s3-tasks':'[]','s3-quiz':'null'});
if(bad.errors.length) throw new Error('corrupt storage: '+bad.errors.join('\n'));

let ob=fs.readFileSync('official-blocks.js','utf8');
ob=ob.replace(/if\(window\.__pendingOfficialLesson\)[\s\S]*?const STEP_XML/,'const STEP_XML');
ob=ob.replace(/window\.renderOfficialScratchStepBlocks[\s\S]*$/,'');
ob+='\nwindow.__OBQA={XML,STEP_XML};';
const odom=new JSDOM('<!doctype html><body></body>',{url:'https://example.test',runScripts:'dangerously'});
odom.window.eval(ob);
const {XML,STEP_XML}=odom.window.__OBQA;
const expected=q.lessons.map(l=>l.n);
if(expected.some(n=>!XML[n])) throw new Error('overall XML coverage');
if(expected.some(n=>!STEP_XML[n])) throw new Error('STEP_XML coverage');
const nested=['06','07','08','09','10','11','12','13','14','S1','S2','S3','A1','A2'];
if(Object.keys(STEP_XML['05']).some(k=>nested.includes(k))) throw new Error('nested STEP_XML remains');
console.log('v18 QA PASS');
