function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const body=document.querySelector('body');
const strtBtn=document.querySelector('button[data-start]');
const stpBtn=document.querySelector('button[data-stop]');

let colorChangeInt=null;
stpBtn.disabled=true;

function startColorChange(){
    
    colorChangeInt=setInterval(()=>{
        body.style.backgroundColor=getRandomHexColor();
        stpBtn.disabled=false;
        strtBtn.disabled=true;
    },1000);
}

function stopColorChange(){

    clearInterval(colorChangeInt);
    stpBtn.disabled=true;
    strtBtn.disabled=false;
}
stpBtn.addEventListener('click', stopColorChange);
strtBtn.addEventListener('click', startColorChange);