function datos(cadena){
      if (cadena.toUpperCase() === cadena){
            return "Todo es mayuscula"
      }else if(cadena.toLowerCase() === cadena){
            return "Todo es minuscula"
      }else{
            return "Tiene minuscula y mayusculas"
      }
}

document.write(datos("hola como estas"))