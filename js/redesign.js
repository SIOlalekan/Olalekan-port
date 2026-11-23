(() => {
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#primary-nav');
  if(toggle && nav){
    const close=()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');};
    toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape' && nav.classList.contains('is-open')){close();toggle.focus();}});
    document.addEventListener('click',e=>{if(!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('is-open'))close();});
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
