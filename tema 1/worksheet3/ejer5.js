function subcadena(cadena,subcadena){
      resultado = []
      if (subcadena.length == 1){      
            for (i in cadena){
                  if (cadena[i].includes(subcadena))
                  resultado.push(i)
            }
      }else{
            palabras = cadena.split(" ")
            for (i in palabras){
                  if (palabras[i].includes(subcadena))
                  resultado.push(i)
            }
      }
      return resultado.length
}


function unicos(cadena){
      resultado1 = []
      palabras = cadena.split("")
      for (letra of palabras){
            if (subcadena(cadena,letra)<2){
                  resultado1.push(letra)
            }
      }
      return resultado1.join("")
}


document.write(unicos("hola como estamos"))