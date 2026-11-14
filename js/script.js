const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile navigation
const menu=$('#menu'),burger=$('#burger');
if(menu&&burger){
  const closeMenu=()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open menu')};
  burger.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    burger.setAttribute('aria-expanded',String(open));
    burger.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  $$('a',menu).forEach(link=>link.addEventListener('click',closeMenu));
  addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
}

// Sticky header
const header=$('#hdr');
const updateHeader=()=>header?.classList.toggle('scrolled',scrollY>10);
addEventListener('scroll',updateHeader,{passive:true});
updateHeader();

// Reveal sections as they enter the viewport
const revealTargets=$$('.rv');
if(reduce||!('IntersectionObserver' in window)){
  revealTargets.forEach(el=>el.classList.add('in'));
}else{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('in');
    observer.unobserve(entry.target);
  }),{threshold:.12});
  revealTargets.forEach(el=>observer.observe(el));
}
