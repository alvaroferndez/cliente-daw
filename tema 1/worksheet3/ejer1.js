function invertir_cad(cadena){
      return cadena.split(" ").reverse().join(" ")
}
function invertir_pal(cadena){
      palabras = cadena.split(" ")
      resultado = ""
      for (element of palabras){
            resultado += element.split("").reverse().join("")
      }
      return resultado
}
function pal_larga(cadena){
      palabras = cadena.split(" ")
      palabramaslarga = ""
      for (element of palabras){
            if (element.length > palabramaslarga.length){
                  palabramaslarga = element
            }
      }
      return palabramaslarga
}
function fil_pal_larga(cadena, numero){
      contador = 0
      palabras = cadena.split(" ")
      for (element of palabras){
            if (element.length > numero){
                  contador ++
            }
      }
      return contador
}
function cad_bien_for(cadena){
      resultado = cadena.toLowerCase()
      letra = cadena.charAt(0).toUpperCase()
      resultado = letra + resultado.substr(1)
      return resultado
}

document.write(invertir_cad("hola como estas") + "<br>")
document.write(invertir_pal("hola como estas") + "<br>")
document.write(pal_larga("hola como estas") + "<br>")
document.write(fil_pal_larga("hola como estas",4) + "<br>")
document.write(cad_bien_for("hola cOmo estas") + "<br>")