function mapaTesoro(dimension){ 
      mapa = []
      for (i=0;i<dimension; i++){
            row = []
            for (j=0;j<dimension; j++){
                  min = Math.ceil(1);
                  max = Math.floor(5);
                  decima = Math.floor(Math.random() * (max - min + 1) + min);
                  unidad = Math.floor(Math.random() * (max - min + 1) + min);
                  numero = decima.toString() + unidad.toString()
                  row.push(numero)
            }
            mapa.push(row)
      }
      min = Math.ceil(1);
      max = Math.floor(5);
      decima = Math.floor(Math.random() * (max - min + 1) + min);
      unidad = Math.floor(Math.random() * (max - min + 1) + min);
      numero = decima.toString() + unidad.toString()
      decima = decima-1
      unidad = unidad-1
      mapa[decima][unidad] = numero
      min = Math.ceil(0);
      max = Math.floor(4);
      decima = Math.floor(Math.random() * (max - min + 1) + min);
      unidad = Math.floor(Math.random() * (max - min + 1) + min);
      posicon = decima.toString() + unidad.toString()
      mapa[decima][unidad] = numero
      for (i=0; i<5; i++){
            min = Math.ceil(0);
            max = Math.floor(4);
            decima = Math.floor(Math.random() * (max - min + 1) + min);
            unidad = Math.floor(Math.random() * (max - min + 1) + min);
            mapa[decima][unidad] = numero
            decima1 = (decima+1).toString()
            unidad1 = (unidad+1).toString()
            numero = decima1 + unidad1
      }
      mapa[0][0]= numero
      return mapa
}

// for ( element of mapaTesoro(5)){
//       document.write(element + "<br>")
// }

function crearNumero(tipo){
      if (tipo == 0){
            min = Math.ceil(0);
            max = Math.floor(4);
            decima = Math.floor(Math.random() * (max - min + 1) + min);
            unidad = Math.floor(Math.random() * (max - min + 1) + min);
            random = decima.toString() + unidad.toString() 
      }else if(tipo == 1){
            min = Math.ceil(1);
            max = Math.floor(5);
            decima = Math.floor(Math.random() * (max - min + 1) + min);
            unidad = Math.floor(Math.random() * (max - min + 1) + min);
            random = decima.toString() + unidad.toString()
      }
      return random
}

function mapaTesoro2(dimension){ 
      mapa = []

      //rellenamos el mapa
      for (i=0;i<dimension; i++){
            row = []
            for (j=0;j<dimension; j++){
                  numero = crearNumero(1)
                  row.push(numero)
            }
            mapa.push(row)
      }

      // creamos la solución
      posicion = crearNumero(0)
      decimapos = posicion[0]
      unidadpos = posicion[1]
      decimanum = parseInt(decimapos)+1
      unidadnum = parseInt(unidadpos)+1
      numero = decimanum.toString() + unidadnum.toString()
      mapa[decimapos][unidadpos] = numero
      
      // mandamos el buscador a la solución
      posicion = crearNumero(0)
      decimapos = posicion[0]
      unidadpos = posicion[1]
      mapa[decimapos][unidadpos] = numero

      // vamos desde el pricipio hasta la solución
      for (i=0; i<5; i++){
            decimanum = parseInt(decimapos)+1
            unidadnum = parseInt(unidadpos)+1
            numero = decimanum.toString() + unidadnum.toString()
            posicion = crearNumero(0)
            decimapos = posicion[0]
            unidadpos = posicion[1]
            mapa[decimapos][unidadpos] = numero
      }
      mapa[0][0]= numero
      return mapa
}

for ( element of mapaTesoro2(5)){
      document.write(element + "<br>")
}