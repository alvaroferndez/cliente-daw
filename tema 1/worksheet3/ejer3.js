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
      return resultado
}

document.write(subcadena("hola como estas","estas"))