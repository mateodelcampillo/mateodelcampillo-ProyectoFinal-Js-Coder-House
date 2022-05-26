// Funciones que envian el operador al arrayResultado
functionSuma = () => {
    op = '+'
    pushOp()
    n1.value += op
 }
 functionResta = () => {
    op = '-'
    pushOp()
    n1.value += op
 }
 functionMultiplicacion = () => {
    op = '*'
    pushOp()
    n1.value += op
 }
 functionDivision = () => {
    op = '/'
    pushOp()
    n1.value += op
}
// Funcion que elimina toda la operacion
 functionDelete = ()=>{
    n1.value = ""
    n2.value = ""
    arrayResultado = []
 }
 //  Funcion que elimina el ultimo valor ingresado
 functionBack = ()=>{
    arrayResultado.pop()
    n1.value = n1.value.slice("", -1)
 }
//  Funcion que realiza la operacion en base a los datos del array
 functionIgual = () => {
    opToString = arrayResultado.join("")
    // En caso de no existir operacion a realizar, se muestra una alerta
    if (opToString == "") {
       [Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: "No se esta realizando ninguna operacion",
 
       })]
       n2.value = ""
    } else {
//  De lo contrario, se raliza la operacion brindada y se la envia al localStorage
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
 }
