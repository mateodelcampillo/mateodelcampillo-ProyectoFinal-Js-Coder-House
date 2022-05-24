const resultadoJson = []
historialArray = localStorage.setItem("historial", JSON.stringify(false))
historialVacio = true






uno = document.querySelector(".uno").addEventListener("click", () => {
   op = 1
   pushOp()
   n1.value += op
   n2.value = ""
   console.log(arrayResultado)
})
dos = document.querySelector(".dos").addEventListener("click", () => {
   op = 2
   pushOp()
   n1.value += op
   n2.value = ""
})
tres = document.querySelector(".tres").addEventListener("click", () => {
   op = 3
   pushOp()
   n1.value += op
   n2.value = ""
})
cuatro = document.querySelector(".cuatro").addEventListener("click", () => {
   op = 4
   pushOp()
   n1.value += op
   n2.value = ""
})
cinco = document.querySelector(".cinco").addEventListener("click", () => {
   op = 5
   pushOp()
   n1.value += op
   n2.value = ""
})
seis = document.querySelector(".seis").addEventListener("click", () => {
   op = 6
   pushOp()
   n1.value += op
   n2.value = ""
})
siete = document.querySelector(".siete").addEventListener("click", () => {
   op = 7
   pushOp()
   n1.value += op
   n2.value = ""
})
ocho = document.querySelector(".ocho").addEventListener("click", () => {
   op = 8
   pushOp()
   n1.value += op
   n2.value = ""
})
nueve = document.querySelector(".nueve").addEventListener("click", () => {
   op = 9
   pushOp()
   n1.value += op
   n2.value = ""
})
cero = document.querySelector(".cero").addEventListener("click", () => {
   op = 0
   pushOp()
   n1.value += op
   n2.value = ""
})
parentesis1 = document.querySelector(".parentesis1").addEventListener("click", () => {
   op = "("
   pushOp()
   n1.value += op
   n2.value = ""
})
parentesis2 = document.querySelector(".parentesis2").addEventListener("click", () => {
   op = ")"
   pushOp()
   n1.value += op
   n2.value = ""
})
n1 = document.querySelector(".n1")
n2 = document.querySelector(".n2")
n1.value = ""
n2.value = ""


pushOp = () => {
   arrayResultado.push(op)
}
arrayResultado = []
resultado = []


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
document.querySelector(".reset").addEventListener("click", () => {
   localStorage.setItem("historial", JSON.stringify(false))
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



















