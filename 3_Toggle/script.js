//Encontramos las clases de los elementos HTML y las guardamos en variables
let toggleBtn=document.querySelector('.toggleBtn')
let container=document.querySelector('.container')

//Cuando se clicka el toggleBtn, aplica la funciión que en el container, lista las clases y reconoce quien se comporta como toggle(al click se activa, al otro click se apaga) cuando se activa la clase active.
toggleBtn.onclick=function(){
    container.classList.toggle('active')

}