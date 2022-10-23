function palindromo(cadena){
      palabras = cadena.split(" ")
      vuelta = ""
      for (element of palabras){
            vuelta += element.split("").reverse().join("")
      }
      if (vuelta === cadena){
            return "es palindromo"
      }else{
            return "no es palindromo"
      }
}

document.write(palindromo("ana"))