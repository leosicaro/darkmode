//declarar objetos a operar
let body = document.getElementById("body")
let tuggle =  document.getElementById("toggle")
let touch = document.getElementById("touch")
console.log(tuggle)


//declarar boton
const btn = document.getElementById("toggle")

    
//crear funcion toggle
const toggleOp = ()=>{
    body.classList.toggle("dark")
    document.querySelector(".text").classList.toggle("dark")
    tuggle.classList.toggle("dark")
    touch.classList.toggle("dark")
}
btn.addEventListener("click",(toggleOp))//activar escucha

