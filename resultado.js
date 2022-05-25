arrayResultado = []
resultado = []
// Declaracion de array resultado
const resultadoJson = []
//  Se limpia localStorage
historialArray = localStorage.setItem("historial", JSON.stringify(false))
// Variable con valor booleano para indicar que el historial esta vacio
historialVacio = true
// Llama
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



document.querySelector(".suma").addEventListener("click", () => {
   op = '+'
   pushOp()
   n1.value += op
})
document.querySelector(".resta").addEventListener("click", () => {
   op = '-'
   pushOp()
   n1.value += op
})
document.querySelector(".multiplicacion").addEventListener("click", () => {
   op = '*'
   pushOp()
   n1.value += op
})
document.querySelector(".division").addEventListener("click", () => {
   op = '/'
   pushOp()
   n1.value += op
})
document.querySelector(".delete").addEventListener("click", ()=>{
   n1.value = ""
   n2.value = ""
   arrayResultado = []
})
document.querySelector(".back").addEventListener("click", ()=>{
   arrayResultado.pop()
   n1.value = n1.value.slice("", -1)
})


historialDom = document.querySelector(".botonHistorial").addEventListener("click", () => {
if(historialVacio == true){
   [Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: "El historial esta vacio",

   })]
}else{
   document.querySelector(".textoHistorial").innerHTML = ""
   document.querySelector(".textoHistorial").innerHTML = historialArray.join("")

}})



// 
igual = document.querySelector(".igual").addEventListener("click", () => {
   opToString = arrayResultado.join("")
   if (opToString == "") {
      [Swal.fire({
         icon: 'error',
         title: 'ERROR',
         text: "No se esta realizando ninguna operacion",

      })]
      n2.value = ""
   } else {

      resultado = eval(opToString)
      resultadoJson.push(`${resultadoJson.length + 1})  ${opToString} = ${resultado}<br>`)
      localStorage.setItem("historial", JSON.stringify(resultadoJson))



      historialArray = JSON.parse(localStorage.getItem("historial"))
      historialVacio = false

      
      console.log()
      n1.value = ""
      n2.value = resultado
      arrayResultado = []
   }
})



















