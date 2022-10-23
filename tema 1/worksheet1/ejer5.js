// function reloj(){
//       fecha = new Date()
//       document.write(fecha + "<br>")
//       time = setTimeout(reloj, 1000) 
// }
// time = setTimeout(reloj, 1000) 

function reloj(){
      fecha = new Date()
      document.open()
      document.write(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}<br>`)
      time = setTimeout(reloj, 1000)
      if (fecha.getSeconds() == 55){
            clearTimeout(time)
      } 
}
time = setTimeout(reloj, 1000) 