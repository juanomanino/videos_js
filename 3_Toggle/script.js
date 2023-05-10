let toggleBtn= document.querySelector('.toggleBtn');
let container= document.querySelector('.container');

toggleBtn.onClick=function(){
    container.classList.toggle('active');
}