document.querySelector(".uno").addEventListener("click", ()=> {operacion = 1 
pushOp()
console.log(arrayResultado)})
document.querySelector(".dos").addEventListener("click", ()=> {operacion = 2
pushOp()
console.log(arrayResultado)})
document.querySelector(".tres").addEventListener("click", ()=> {operacion = 3
pushOp()
console.log(arrayResultado)})
document.querySelector(".cuatro").addEventListener("click", ()=> {operacion = 4
pushOp()
console.log(arrayResultado)})
document.querySelector(".cinco").addEventListener("click", ()=>{ operacion = 5
pushOp()
console.log(arrayResultado)})
document.querySelector(".seis").addEventListener("click", ()=> {operacion = 6
pushOp()
console.log(arrayResultado)})
document.querySelector(".siete").addEventListener("click", ()=> {operacion = 7
pushOp()
console.log(arrayResultado)})
document.querySelector(".ocho").addEventListener("click", ()=> {operacion = 8
pushOp()
console.log(arrayResultado)})
document.querySelector(".nueve").addEventListener("click", ()=> {operacion = 9
pushOp()
console.log(arrayResultado)})
document.querySelector(".cero").addEventListener("click", ()=> {operacion = 0
pushOp()
console.log(arrayResultado)})

// Array almacenador de resultados
arrayResultado = []
pushOp = ()=>arrayResultado.push(operacion)

historial = JSON.parse(localStorage.getItem("arrayResult")) 
// Variable que almacena el tipo de operacion a realizar
let operacion = ""
// Evento onclick para determinar que operacion se va a ejecutar
document.querySelector(".suma").addEventListener("click", ()=> {operacion = '+'
pushOp()})
document.querySelector(".resta").addEventListener("click", ()=> {operacion = '-'
pushOp()})
document.querySelector(".multiplicacion").addEventListener("click", ()=> {operacion = '*'
pushOp()})
document.querySelector(".division").addEventListener("click", ()=> {operacion = '/'
pushOp()})

// Evento para resetear el resultado y realizar una nueva operacion
document.querySelector(".reset").addEventListener("click", ()=> {
    resultado = 0
    document.querySelector(".resultado").innerHTML = resultado
    localStorage.removeItem("arrayResult")
   })
   // Evento onclick con funcion para resolver la operacion
document.querySelector(".igual").addEventListener("click", ()=> {
const n1 = parseInt(document.querySelector(".n1").value)
const n2 = parseInt(document.querySelector(".n2").value)
    resultado = ""
    if(operacion == "+"){
       resultado =  n1 + n2
    }
    else if(operacion == "-"){
        resultado =  n1 - n2
     }
     else if(operacion == "*"){
        resultado =  n1 * n2
     }
     else if(operacion == "/"){
        resultado =  n1 / n2
     }
   //   Objeto con el resultado y el nro de operacion dentro
     resultObjeto = {
        operacionNum: arrayResultado.length + 1,
        desarrollo: n1 +` `+ operacion +` `+ n2 + ` =` + resultado 
      }
      // Push de el objeto al arrayResultado declarado al inicio
      arrayResultado.push(resultObjeto)
      console.log(arrayResultado)
      // innerHTML para mostrar el resultado en pantalla
     document.querySelector(".resultado").innerHTML = resultado
      // Se añade arrayResultado al localStorage en formato JSON
      localStorage.setItem("arrayResult",JSON.stringify(arrayResultado))
    historial = JSON.parse(localStorage.getItem("arrayResult"))  
      
})
// Se obtiene del localStorage el JSON con los resultados
const  textoHistorial = document.querySelector(".textoHistorial");
// Funcion que devuelve el historial
// historialVacio = [Swal.fire({
//    icon: 'error',
//    title: 'Oops...',
//    text: "No hay historial!, realice una operacion",
   
//  })]

function devolverHistorial() {
    (localStorage.length > 0)? inner() : Swal.fire({
   icon: 'error',
   title: 'Oops...',
   text: "No hay historial!, realice una operacion",
   
 })
}
// Se aplica un evento al input que devuelve el historial mediante la funcion de arriba
document.querySelector(".botonHistoriall").addEventListener("click", ()=>devolverHistorial())

function inner(){
   textoHistorial.innerHTML = ''
   historial.forEach(element => {
     const {operacionNum, desarrollo} = element
       textoHistorial.innerHTML += `Numero de operacion: ${operacionNum} <br> ${desarrollo} <br>` 
    }
    )
}
