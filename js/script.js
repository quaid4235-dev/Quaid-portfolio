const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>[...root.querySelectorAll(selector)];
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;

// Accessible mobile navigation, used identically on every page.
const menu=$('#menu');
const burger=$('#burger');
if(menu&&burger){
  const closeMenu=()=>{
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
    burger.setAttribute('aria-label','Open menu');
  };
  burger.addEventListener('click',()=>{
    const expanded=menu.classList.toggle('open');
    burger.setAttribute('aria-expanded',String(expanded));
    burger.setAttribute('aria-label',expanded?'Close menu':'Open menu');
  });
  $$('a',menu).forEach(link=>link.addEventListener('click',closeMenu));
  addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
}

// Subtle sticky header state.
const header=$('#hdr');
const updateHeader=()=>header?.classList.toggle('scrolled',scrollY>10);
addEventListener('scroll',updateHeader,{passive:true});
updateHeader();

// Reveal animations, with a fallback for older browsers and reduced motion.
const revealItems=$$('.rv');
if(reduceMotion||!('IntersectionObserver' in window)){
  revealItems.forEach(item=>item.classList.add('in'));
}else{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('in');
    observer.unobserve(entry.target);
  }),{threshold:.12});
  revealItems.forEach(item=>observer.observe(item));
}

// Validate the contact form and prepare an email in the visitor's mail app.
// A static GitHub Pages site has no server to deliver/store form submissions.
const contactForm=$('#contact-form');
if(contactForm){
  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    const status=$('#form-status');
    status.classList.remove('error','success');
    if(!contactForm.reportValidity())return;
    const data=new FormData(contactForm);
    const name=String(data.get('name')).trim();
    const email=String(data.get('email')).trim();
    const subject=String(data.get('subject')).trim();
    const message=String(data.get('message')).trim();
    const body=`Name: ${name}\nEmail: ${email}\nService: ${subject}\n\nProject details:\n${message}`;
    status.textContent='Your email app should open with the message prepared. Please review it and press Send.';
    status.classList.add('success');
    window.location.href=`mailto:quaid4235@gmail.com?subject=${encodeURIComponent(`Website inquiry: ${subject}`)}&body=${encodeURIComponent(body)}`;
  });
}
