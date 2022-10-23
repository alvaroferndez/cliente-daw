function distinguir(cadena){
      palabras = cadena.split(" ")
      vocal = ""
      consonates = ""
      for (palabra of palabras){
            for (letra of palabra){
                  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
                        vocal += letra
                  }else{
                        consonates += letra
                  }
            }
      }
      return resultado = consonates + vocal
}

document.write(distinguir("hola como estamos"))