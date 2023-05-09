// Seleccionar el display mediante su id
const display = document.querySelector("#display");

// Seleccionar todos los botones
const buttons= document.querySelectorAll("button");

// Dando funciones a los botones
buttons.forEach((item)=>{
    item.onclick=()=>{
        // Si se presiona clear, que se borre el texto
        if(item.id=="clear"){
            display.innerText="";
            
        // Cuenta la cantidad de caracteres escritos, los mete en una variable string, y en el display elimina el último, por eso lenght -1.
        }else if(item.id=="backspace"){
            let string=display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
            
        // Si pedimos resultado y hemos escrito algo, en el texto del display haga las operaciones necesarias. Eval usa las string proporcionadas y las usa para operaciones aritmeticas
        }else if(display.innerText !=""&& item.id=="equal"){
            display.innerText=eval(display.innerText);

        // Si le damos a equal y no hay texto, devuelve un texto "Null" durante dos segundos usando un Timeout
        }else if(display.innerText=="" && item.id=="equal"){
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""), 2000)

        // Mostrar el número u operador seleccionado
        }else{
            display.innerText +=item.id;
        }
    }
})


// Se declarala variable que contiene el div theme-toggler
const themeTogglerBtn = document.querySelector(".theme-toggler");

// Se declarala variable que contiene el div calculator
const calculator= document.querySelector(".calculator");

//Variable para saber que Dark está activo o no
let isDark=true;

// Cuando se da click en el theme-toggler, todas las clases contenidas en calculator son afectadas por el toggle "dark". Y en el tema toggler, lo pone activo. Al final cambia de esta isDark, si es true pasa a false y viceversa.
themeTogglerBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeTogglerBtn.classList.toggle("active");
    isDark = !isDark;
}