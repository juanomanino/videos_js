//Capturamos el div toggle y el ul navigation
const menutoggle= document.querySelector('.toggle');
const navigation=document.querySelector('.navigation');

// Cuando se da click al div demenutoggle, llama a la funcion que toma todas las clases dentro del div y les proporciona la clase active, y tambien a las del navigation
menutoggle.onclick=function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}