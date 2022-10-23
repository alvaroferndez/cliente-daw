function dado(){
      uno = 0
      dos = 0
      tres = 0
      cuatro = 0
      cinco = 0
      seis = 0
      for (i=0;i<6000;i++){
            numero = Math.floor(Math.random() * 6) + 1
            if (numero==1)
                  uno++
            else if (numero==2) 
                  dos++
            else if (numero==3) 
                  tres++
            else if (numero==4) 
                  cuatro++
            else if (numero==6) 
                  cinco++
            else 
                  seis++
      }
      resultado = [uno,dos,tres,cuatro,cinco,seis]
      return resultado
}
document.write(dado())