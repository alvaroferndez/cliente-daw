lista = [[34,21,32,41,25],
      [14,42,43,14,31],
      [54,45,52,42,23],
      [33,15,51,31,35],
      [21,52,33,13,23]]

function buscarTesoro(lista,i=0,j=0){
      if (i != 0){
            i-=1
            j-=1
      }
      buscador = lista[i][j].toString()
      row = buscador[0]-1
      column = buscador[1]-1 
      siguiente = lista[row][column].toString()
      if (buscador == siguiente)
            return (buscador)
      else{
            resultado = (buscarTesoro(lista,siguiente[0],siguiente[1]))
            return resultado
      }
}
document.write(buscarTesoro(lista))