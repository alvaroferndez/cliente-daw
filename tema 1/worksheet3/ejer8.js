function blancos(cadena){
      resultado = []
      palabras = cadena.split(" ")
      for (palabra of palabras){
            if (palabra != ""){
                  resultado.push(palabra)
            }
      }
      return resultado.length
}

document.write(blancos("hola     como   estamos"))