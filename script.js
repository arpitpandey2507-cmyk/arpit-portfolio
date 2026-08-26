const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav-links a')];
window.addEventListener('scroll',()=>{
  let current='home';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-180) current=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
},{passive:true});

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const status=document.querySelector('.form-status');
  status.textContent='Thanks! Connect your form backend/email service to receive messages.';
  e.target.reset();
});
