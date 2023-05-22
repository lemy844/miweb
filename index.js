const contenidoInicial = document.getElementById("contenidoInicial");
const contenidoFinal = document.getElementById("contenidoFinal");
const closeit = document.getElementById("closeit");
const changeBackground = document.getElementById("changeBackground");

closeit.addEventListener('click', function(){
    contenidoInicial.style.display = "none";
})

changeBackground.addEventListener('click', function(){
    contenidoFinal.classList.add("cool");
})