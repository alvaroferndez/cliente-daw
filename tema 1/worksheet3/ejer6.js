function subcadena(cadena1, cadena2){
      resultado = cadena1.toLowerCase().indexOf(cadena2.toLowerCase())
      if (resultado != -1){
            return `La subcadena ${cadena2} se encuentra en la posición ${resultado}`
      }else{
            return "La subcadena no esta"
      }
}

document.write(subcadena("hola que tal","que"))