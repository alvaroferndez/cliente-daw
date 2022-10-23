mensaje = "have a nice day feed the dog chill outa"
function codificar(mensaje){
      if (mensaje.length > 81){
            return "No puede ser mayor que 81"
      }
      cadena = mensaje.replace(/ /g,"")
      row = Math.sqrt(cadena.length)
      if (row - Math.trunc(row) <0.5){
            row = Math.trunc(row)
            column = Math.trunc(row) + 1
      }else{
            row = Math.trunc(row) + 1
            column = Math.trunc(row)
      }
      resultado = []
      lista = mensaje.split(" ")
      for (i=0;i<row; i++){
            fila = []
            for (j=0;j<column; j++){
                  fila.push(lista[j][i])
            }
            resultado.push(fila)
      }
      return resultado
}

document.write(codificar(mensaje))
