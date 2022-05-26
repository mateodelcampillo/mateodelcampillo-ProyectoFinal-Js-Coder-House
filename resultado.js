arrayResultado = []
resultado = []
// Declaracion de array resultado
const resultadoJson = []
//  Se limpia localStorage
historialArray = localStorage.setItem("historial", JSON.stringify(false))
// Variable con valor booleano para indicar que el historial esta vacio
historialVacio = true
// 
uno = document.querySelector(".uno").addEventListener("click", functionUno)
dos = document.querySelector(".dos").addEventListener("click", functionDos)
tres = document.querySelector(".tres").addEventListener("click", functionTres)
cuatro = document.querySelector(".cuatro").addEventListener("click", functionCuatro)
cinco = document.querySelector(".cinco").addEventListener("click", functionCinco)
seis = document.querySelector(".seis").addEventListener("click", functionSeis)
siete = document.querySelector(".siete").addEventListener("click", functionSiete)
ocho = document.querySelector(".ocho").addEventListener("click", functionOcho)
nueve = document.querySelector(".nueve").addEventListener("click", functionNueve)
cero = document.querySelector(".cero").addEventListener("click", functionCero)
parentesis1 = document.querySelector(".parentesis1").addEventListener("click", functionParantesis1)
parentesis2 = document.querySelector(".parentesis2").addEventListener("click", functionParantesis2)
n1 = document.querySelector(".n1")
n2 = document.querySelector(".n2")
n1.value = ""
n2.value = ""


pushOp = () => {
   arrayResultado.push(op)
}



document.querySelector(".suma").addEventListener("click", functionSuma)
document.querySelector(".resta").addEventListener("click", functionResta)
document.querySelector(".multiplicacion").addEventListener("click", functionMultiplicacion)
document.querySelector(".division").addEventListener("click", functionDivision)
document.querySelector(".delete").addEventListener("click", functionDelete)
document.querySelector(".back").addEventListener("click", functionBack)
historialDom = document.querySelector(".botonHistorial").addEventListener("click", functionHistorial)
igual = document.querySelector(".igual").addEventListener("click", functionIgual)



















