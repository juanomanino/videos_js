//Variables para guardar body y tomar el id de toggle
const body=document.querySelector('body');
const toggle=document.getElementById('toggle');

// Cuando damos click al toggle, ejecuta la funcion.
toggle.onclick=function(){
    toggle.classList.toggle('active');//Listar todas las clases de toggle, y hacerle toggle para que este active
    body.classList.toggle('active');//Mismo proceso pero con body

    //Haciendo esto, creamos una variable con javascript que cuando clickemos pasa a on, y cuando volvamos a clickar, pasa a off
    
}
