// funciones que envian los valores al texto N1 y pushean a arrayResultado
functionUno = () => {
    op = 1
    pushOp()
    n1.value += op
    n2.value = ""
    console.log(arrayResultado)
 }
 functionDos = () => {
    op = 2
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionTres = () => {
    op = 3
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionCuatro = () => {
    op = 4
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionCinco = () => {
    op = 5
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionSeis = () => {
    op = 6
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionSiete = () => {
    op = 7
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionOcho = () => {
    op = 8
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionNueve = () => {
    op = 9
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionCero = () => {
    op = 0
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionParantesis1 = () => {
    op = "("
    pushOp()
    n1.value += op
    n2.value = ""
 }
 functionParantesis2 = () => {
    op = ")"
    pushOp()
    n1.value += op
    n2.value = ""
 }
//  Funcion con condicional, si el historial esta vacio, muestra una alerta, de lo contrariom muestra el historial
 functionHistorial = () => {
   if(historialVacio == true){
      [Swal.fire({
         icon: 'error',
         title: 'ERROR',
         text: "El historial esta vacio",
   
      })]
   }else{
      document.querySelector(".textoHistorial").innerHTML = ""
      document.querySelector(".textoHistorial").innerHTML = historialArray.join("")
   
   }}
 