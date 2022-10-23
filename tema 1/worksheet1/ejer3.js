segundos = 60
function reloj(){
      if (segundos != 0){
            document.open()
            document.write(`${segundos}<br>`)
            segundos -= 1
            time = setTimeout(reloj, 1000) 
      }
}
time = setTimeout(reloj, 1000) 
