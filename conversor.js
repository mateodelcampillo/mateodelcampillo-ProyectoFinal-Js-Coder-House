// Nombrar variable de las clases
const monedaUno = document.querySelector(".moneda-uno")
const monedaDos =  document.querySelector(".moneda-dos")
const cantidadUno = document.querySelector(".cantidad-uno")
const cantidadDos = document.querySelector(".cantidad-dos")
const boton = document.querySelector(".btn")
const cambio = document.querySelector(".cambio")
// Fetch del exchange dentro de la funcion Calcular
function calcular(){
    const monedaOne = monedaUno.value
    const monedaTwo = monedaDos.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOne}`)
   .then(res => res.json() )
   .then(data => {
    //Se selecciona la taza de la moneda elegida
       const taza = data.rates[monedaTwo];
      cambio.innerHTML = `1 ${monedaOne} = ${taza} ${monedaTwo}`
      cantidadDos.value = (cantidadUno.value * taza).toFixed(2)
   })
    
}
// Se le añade eventos a las variables, y se ejecuta la funcion de `calcular`
monedaUno.addEventListener("change", calcular)
monedaDos.addEventListener("change", calcular)
cantidadUno.addEventListener("input", calcular)
cantidadDos.addEventListener("input", calcular)
// Evento que mediante una funcion flecha realiza el cambio de moneda
boton.addEventListener("click", ()=>{
    const temp = monedaUno.value
    monedaUno.value = monedaDos.value
    monedaDos.value = temp
    // const temp1 = cantidadUno.value;
    // cantidadUno.value = cantidadDos.value;
    // cantidadDos.value = temp1
    calcular()
})
calcular()





