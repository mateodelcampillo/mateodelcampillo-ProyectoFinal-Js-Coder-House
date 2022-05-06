const monedaUno = document.querySelector(".moneda-uno")
const monedaDos =  document.querySelector(".moneda-dos")
const cantidadUno = document.querySelector(".cantidad-uno")
const cantidadDos = document.querySelector(".cantidad-dos")
const boton = document.querySelector(".btn")
const cambio = document.querySelector(".cambio")
// fetch exchange
function calcular(){
    const monedaOne = monedaUno.value
    const monedaTwo = monedaDos.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOne}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[monedaTwo];
      cambio.innerHTML = `1 ${monedaOne} = ${taza} ${monedaTwo}`
      cantidadDos.value = (cantidadUno.value * taza).toFixed(2)
   })
    
}


monedaUno.addEventListener("change", calcular)
monedaDos.addEventListener("change", calcular)
cantidadUno.addEventListener("input", calcular)
cantidaDos.addEventListener("input", calcular)






calcular()