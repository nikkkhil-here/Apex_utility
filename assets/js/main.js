/* Apex Utility - main.js */
(function(){
  /* AOS handled inline */
  const hdr=document.getElementById('site-hdr'),tot=document.getElementById('toTop');
  function onSc(){const s=window.scrollY;if(hdr){hdr.classList.toggle('shadow-lg',s>12);hdr.classList.toggle('border-b',s>12);hdr.classList.toggle('border-brand-line',s>12);}if(tot)tot.classList.toggle('show',s>450);}
  window.addEventListener('scroll',onSc,{passive:true});onSc();
  const mb=document.getElementById('mob-btn'),mm=document.getElementById('mob-menu'),mi=document.getElementById('mob-ico');
  if(mb)mb.addEventListener('click',()=>{const o=mm.classList.toggle('open');mb.setAttribute('aria-expanded',o);mi.className=o?'fa-solid fa-xmark text-xl':'fa-solid fa-bars text-xl';});
  document.querySelectorAll('.mob-lnk').forEach(l=>l.addEventListener('click',()=>{mm&&mm.classList.remove('open');if(mi)mi.className='fa-solid fa-bars text-xl';}));
  if(tot)tot.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  document.querySelectorAll('.faq-btn').forEach(b=>b.addEventListener('click',()=>{
    const it=b.closest('.faq-it'),wasOpen=it.classList.contains('open');
    document.querySelectorAll('.faq-it.open').forEach(i=>i.classList.remove('open'));if(!wasOpen)it.classList.add('open');
  }));
  const ctrs=document.querySelectorAll('.ctr');
  if(ctrs.length){
    const run=()=>ctrs.forEach(c=>{const t=parseInt(c.dataset.to,10),sf=c.dataset.suf||'',pr=c.dataset.pre||'';let cur=0;const st=t/110;const tm=setInterval(()=>{cur=Math.min(cur+st,t);c.textContent=pr+Math.round(cur).toLocaleString()+sf;if(cur>=t)clearInterval(tm);},16);});
    const w=document.querySelector('.ctr-wrap');if(w){new IntersectionObserver(e=>{if(e[0].isIntersecting){w.classList.add('vis');run();}},{threshold:.3}).observe(w);}else run();
  }
  const frm=document.getElementById('cf');
  if(frm)frm.addEventListener('submit',e=>{
    e.preventDefault();
    const n=document.getElementById('cf-n')?.value.trim()||'',co=document.getElementById('cf-co')?.value.trim()||'',em=document.getElementById('cf-e')?.value.trim()||'',ph=document.getElementById('cf-p')?.value.trim()||'',ms=document.getElementById('cf-m')?.value.trim()||'';
    let t='Hello Apex Utility,\n\nName: '+n+'\n'+(co?'Company: '+co+'\n':'')+(em?'Email: '+em+'\n':'')+'Phone: '+ph+'\n\nMessage:\n'+ms;
    window.location.href='https://wa.me/917600176756?text='+encodeURIComponent(t);
  });
})();
