//a
numeros = [1,4000000,3,6,4,33,444,555,6666,77777,100000]

ordenada = numeros.sort((a,b) => a-b) 
document.write(ordenada.slice(-1) + "<br>")

//b
palabras = ["ja","jsais","khlrldkfmbe","iskgldñ"]

mayor_palabra = ""
for (element of palabras){
      if (element.length > mayor_palabra.length){
            mayor_palabra = element
      }
}
document.write(mayor_palabra + "<br>")

//c
for (element of numeros){
      if (element % 2 == 1) 
            document.write(element + " es impar ");
}
for (element of numeros){
      if (element % 2 != 1) 
            document.write(element + " es par ");
}
document.write("<br>")

//d
for (element of palabras){
      if (element.includes("is"))
      document.write(element + "<br>")
}

//e
for (element of numeros){
      if (element % 3==0){
            document.write(element + "<br>")
      }
}

//f
juntos = [...numeros,...palabras]
document.write(juntos)
document.write("<br>")

//g
document.write(juntos.sort())
document.write("<br>")

//h
ordenada = juntos.sort()
reves = ordenada.reverse()
reves.shift()
document.write(reves)
document.write("<br>")

//i
reves.splice(0, 0, "hola") 
document.write(reves)
document.write("<br>")

//j
palabras.splice(3, 1, "hola") 
palabras.splice(0, 1, "adios") 
document.write(palabras)