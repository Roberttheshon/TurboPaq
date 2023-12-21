const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.listas');



ham.addEventListener('click', ()=>{
    enlaces.classList.toggle('activado');
    
})