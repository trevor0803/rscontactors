(function(){'use strict';
const toggle=document.getElementById('nav-toggle');
const menu=document.getElementById('nav-menu');
if(toggle&&menu){toggle.addEventListener('click',()=>{toggle.classList.toggle('active');menu.classList.toggle('open')});menu.querySelectorAll('.nav__link').forEach(l=>l.addEventListener('click',()=>{toggle.classList.remove('active');menu.classList.remove('open')}));document.addEventListener('click',e=>{if(!toggle.contains(e.target)&&!menu.contains(e.target)){toggle.classList.remove('active');menu.classList.remove('open')}})}
const header=document.getElementById('header');
if(header){window.addEventListener('scroll',()=>{header.style.background=window.scrollY>50?'rgba(17,17,17,0.99)':'rgba(17,17,17,0.95)';},{passive:true})}
const animatedEls=document.querySelectorAll('.service-card,.stat-card,.value-card,.gallery-item,.service-section__grid');
if('IntersectionObserver'in window&&animatedEls.length){animatedEls.forEach(el=>el.classList.add('fade-in'));const obs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);obs.unobserve(e.target)}});},{threshold:.1,rootMargin:'0px 0px -40px 0px'});animatedEls.forEach(el=>obs.observe(el))}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){const t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();const navH=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))||70;window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-navH-20,behavior:'smooth'})}})});
})();