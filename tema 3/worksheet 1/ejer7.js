function factorial(numero){
      if (numero==1)
            return numero
      else  
            return numero * factorial(numero - 1)
}

document.write(factorial(6))