uno = document.querySelector(".uno").addEventListener("click", ()=>{op = 1
pushOp()
console.log(arrayResultado)})
dos = document.querySelector(".dos").addEventListener("click", ()=>{op = 2
   pushOp()})
tres = document.querySelector(".tres").addEventListener("click", ()=>{op = 3
   pushOp()})
cuatro = document.querySelector(".cuatro").addEventListener("click", ()=>{op = 4
   pushOp()})
cinco = document.querySelector(".cinco").addEventListener("click", ()=>{op = 5
   pushOp()})
seis = document.querySelector(".seis").addEventListener("click", ()=>{op = 6
   pushOp()})
siete = document.querySelector(".siete").addEventListener("click", ()=>{op = 7
   pushOp()})
ocho = document.querySelector(".ocho").addEventListener("click", ()=>{op = 8
   pushOp()})
nueve = document.querySelector(".nueve").addEventListener("click", ()=>{op = 9
   pushOp()})
cero = document.querySelector(".cero").addEventListener("click", ()=>{op = 0
   pushOp()})
// // Array almacenador de resultados
// uno.addEventListener("click", ()=>{
//    arrayResultado.push(uno.value)
//    console.log(arrayResultado)});
// dos.addEventListener("click", ()=>{
//    arrayResultado.push(dos.value)
//    console.log(arrayResultado)});
// tres.addEventListener("click", ()=>{
//    arrayResultado.push(tres.value)
//    console.log(arrayResultado)});
// cuatro.addEventListener("click", ()=>{
//    arrayResultado.push(cuatro.value)
//    console.log(arrayResultado)});
// cinco.addEventListener("click", ()=>{
//    arrayResultado.push(cinco.value)
//    console.log(arrayResultado)});   
// seis.addEventListener("click", ()=>{
//    arrayResultado.push(seis.value)
//    console.log(arrayResultado)});
// siete.addEventListener("click", ()=>{
//    arrayResultado.push(siete.value)
//    console.log(arrayResultado)});
// ocho.addEventListener("click", ()=>{
//    arrayResultado.push(ocho.value)
//    console.log(arrayResultado)});
// nueve.addEventListener("click", ()=>{
//    arrayResultado.push(nueve.value)
//    console.log(arrayResultado)});
// cero.addEventListener("click", ()=>{
//    arrayResultado.push(cero.value)
//    console.log(arrayResultado)});

pushOp = ()=>{
   arrayResultado.push(op)
}
   arrayResultado = []
   resultado = []
// arrayResultado2 = []
// pushOp = ()=>arrayResultado.push(operacion)

// historial = JSON.parse(localStorage.getItem("arrayResult")) 
// // Variable que almacena el tipo de operacion a realizar
// let operacion = ""
// // Evento onclick para determinar que operacion se va a ejecutar
document.querySelector(".suma").addEventListener("click", ()=> {op = '+'
pushOp()})
document.querySelector(".resta").addEventListener("click", ()=> {op = '-'
pushOp()})
document.querySelector(".multiplicacion").addEventListener("click", ()=> {op = '*'
pushOp()})
document.querySelector(".division").addEventListener("click", ()=> {op = '/'
pushOp()})
// 
igual = document.querySelector(".igual").addEventListener("click", ()=>{
  opToString = arrayResultado.join("")
   resultado = eval(opToString)
   arrayResultado = []
   console.log(resultado)})
// // Evento para resetear el resultado y realizar una nueva operacion
// document.querySelector(".reset").addEventListener("click", ()=> {
//     resultado = 0
//     document.querySelector(".resultado").innerHTML = resultado
//     localStorage.removeItem("arrayResult")
//    })
//    // Evento onclick con funcion para resolver la operacion
// document.querySelector(".igual").addEventListener("click", ()=> {
// const n1 = parseInt(document.querySelector(".n1").value)
// const n2 = parseInt(document.querySelector(".n2").value)
//     resultado = ""
//     if(operacion == "+"){
//        resultado =  n1 + n2
//     }
//     else if(operacion == "-"){
//         resultado =  n1 - n2
//      }
//      else if(operacion == "*"){
//         resultado =  n1 * n2
//      }
//      else if(operacion == "/"){
//         resultado =  n1 / n2
//      }
//    //   Objeto con el resultado y el nro de operacion dentro
//      resultObjeto = {
//         operacionNum: arrayResultado.length + 1,
//         desarrollo: n1 +` `+ operacion +` `+ n2 + ` =` + resultado 
//       }
//       // Push de el objeto al arrayResultado declarado al inicio
//       arrayResultado.push(resultObjeto)
//       console.log(arrayResultado)
//       // innerHTML para mostrar el resultado en pantalla
//      document.querySelector(".resultado").innerHTML = resultado
//       // Se añade arrayResultado al localStorage en formato JSON
//       localStorage.setItem("arrayResult",JSON.stringify(arrayResultado))
//     historial = JSON.parse(localStorage.getItem("arrayResult"))  
      
// })
// // Se obtiene del localStorage el JSON con los resultados
// const  textoHistorial = document.querySelector(".textoHistorial");
// // Funcion que devuelve el historial
// // historialVacio = [Swal.fire({
// //    icon: 'error',
// //    title: 'Oops...',
// //    text: "No hay historial!, realice una operacion",
   
// //  })]

// function devolverHistorial() {
//     (localStorage.length > 0)? inner() : Swal.fire({
//    icon: 'error',
//    title: 'Oops...',
//    text: "No hay historial!, realice una operacion",
   
//  })
// }
// // Se aplica un evento al input que devuelve el historial mediante la funcion de arriba
// document.querySelector(".botonHistoriall").addEventListener("click", ()=>devolverHistorial())

// function inner(){
//    textoHistorial.innerHTML = ''
//    historial.forEach(element => {
//      const {operacionNum, desarrollo} = element
//        textoHistorial.innerHTML += `Numero de operacion: ${operacionNum} <br> ${desarrollo} <br>` 
//     }
//     )
// }
