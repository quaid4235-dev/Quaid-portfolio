const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
// theme
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch{}
$('#theme').onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch{}};
// menu + sticky header
const menu=$('#menu'),burger=$('#burger');
burger.onclick=()=>burger.setAttribute('aria-expanded',menu.classList.toggle('open'));
$$('a',menu).forEach(a=>a.onclick=()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false')});
addEventListener('keydown',e=>{if(e.key==='Escape')menu.classList.remove('open')});
addEventListener('scroll',()=>$('#hdr').classList.toggle('scrolled',scrollY>10),{passive:true});
// reveal + counters
const count=el=>{const n=+el.dataset.n;if(reduce){el.textContent=n+'+';return}let i=0;const t=setInterval(()=>{el.textContent=++i+(i>=n?'+':'');if(i>=n)clearInterval(t)},220)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');$$('[data-n]',e.target).forEach(count);io.unobserve(e.target)}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
// typewriter
const words=['web systems','Flask apps','face-recognition tools','AI-powered products'],out=$('#type');
if(reduce){out.textContent=words[0]}else{let w=0,c=0,del=false;(function tick(){const s=words[w];out.textContent=s.slice(0,c);
if(!del&&c===s.length){del=true;return setTimeout(tick,1600)}
if(del&&c===0){del=false;w=(w+1)%words.length}
c+=del?-1:1;setTimeout(tick,del?35:70)})()}
// card spotlight
$$('.spot').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));
