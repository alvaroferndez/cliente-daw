lista = ["Jose Maria","Antonio Miguel","Javier Jose"]
resultado = []
for (element of lista){
      if (element[0] == "J"){
            nombre = element.split(" ")
            total = ""
            for (palabra of nombre){
                  total += palabra[0]
            }
            resultado.push(total)
      }
}
document.write(resultado)