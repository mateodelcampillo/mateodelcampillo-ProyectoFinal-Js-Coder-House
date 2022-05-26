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
 functionDelete = ()=>{
    n1.value = ""
    n2.value = ""
    arrayResultado = []
 }
 functionBack = ()=>{
    arrayResultado.pop()
    n1.value = n1.value.slice("", -1)
 }
 functionIgual = () => {
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
 }