// Variable con las operaciones
let arrayResultado = []

// Declaracion de array resultado
const resultadoJson = []
//  Se limpia localStorage
let historialArray = localStorage.setItem("historial", JSON.stringify(false))
// Variable con valor booleano para indicar que el historial esta vacio
let historialVacio = true
// Variables con acceso al Html y con evento de click
let uno = document.querySelector(".uno").addEventListener("click", functionUno)
let dos = document.querySelector(".dos").addEventListener("click", functionDos)
let tres = document.querySelector(".tres").addEventListener("click", functionTres)
let cuatro = document.querySelector(".cuatro").addEventListener("click", functionCuatro)
let cinco = document.querySelector(".cinco").addEventListener("click", functionCinco)
let seis = document.querySelector(".seis").addEventListener("click", functionSeis)
let siete = document.querySelector(".siete").addEventListener("click", functionSiete)
let ocho = document.querySelector(".ocho").addEventListener("click", functionOcho)
let nueve = document.querySelector(".nueve").addEventListener("click", functionNueve)
let cero = document.querySelector(".cero").addEventListener("click", functionCero)
let parentesis1 = document.querySelector(".parentesis1").addEventListener("click", functionParantesis1)
let parentesis2 = document.querySelector(".parentesis2").addEventListener("click", functionParantesis2)
let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")
n1.value = ""
n2.value = ""

// Funcion que pushea los valores a arrayResultado
pushOp = () => {
   arrayResultado.push(op)
}


// Operadores 
document.querySelector(".suma").addEventListener("click", functionSuma)
document.querySelector(".resta").addEventListener("click", functionResta)
document.querySelector(".multiplicacion").addEventListener("click", functionMultiplicacion)
document.querySelector(".division").addEventListener("click", functionDivision)
document.querySelector(".delete").addEventListener("click", functionDelete)
document.querySelector(".back").addEventListener("click", functionBack)
historialDom = document.querySelector(".botonHistorial").addEventListener("click", functionHistorial)
igual = document.querySelector(".igual").addEventListener("click", functionIgual)



















