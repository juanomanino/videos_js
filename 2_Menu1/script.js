// Capturar las clases desde html para poder usarl los elementos
const menuToggle= document.querySelector(".menuToggle")
const navigation= document.querySelector(".navigation")

//Cuando se clicke en menuToggle, se llama a la funcion
menuToggle.onclick=function(){
    //Busca en navigation entre las clases, y con toggle, el activador, crea la clase open 
    navigation.classList.toggle('open')
}
//Constante selecciona todo lo que tenga como clase list
const list=document.querySelectorAll('.list')

function activarLink(){
    // Con la funcion de flecha, elige los item, le quita active al que lo tenga como estado, y se lo da al elemento que se le está dando click al momento
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}

//A cada item le assigna el evento click, para que ejecute la funcion al clickar
list.forEach((item)=> 
item.addEventListener('click', activarLink)
)