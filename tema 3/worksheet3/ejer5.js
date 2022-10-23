lista = [[34,55,32,41,25],
      [14,55,43,14,31],
      [54,55,52,42,23],
      [33,55,51,31,35],
      [21,52,33,13,23]]

function punto(lista){
      resultado = []
      for (let i=0;i<lista.length; i++){
            for (j=0;j<lista[i].length;j++){
                  if (mayorfila(lista[i][j],i,lista) && menorcolumna(lista[i][j],j,lista)){
                        resultado.push(i.toString()+j.toString())
                  }
            }
      }
      function mayorfila(valor,fila,lista){
            mayor = true
            for (let i=0; i<lista[fila].length && mayor;i++){
                  if (valor < lista[fila][i]){
                        mayor = false
                  }
            }
            return mayor
      }
      function menorcolumna(valor,columna,lista){
            menor = true
            for (let i=0; i<lista[columna].length && menor;i++){
                  if (valor > lista[i][columna]){
                        menor = false
                  }
            }
            return menor
      }
      return resultado  
}
document.write(punto(lista))