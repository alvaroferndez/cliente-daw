function potencia(base,exponente){
      if (exponente==0){
            return 1
      }
      else
            return base * potencia(base, exponente - 1)
}

document.write(potencia(6,3))