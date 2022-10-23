/*
//1
frutas = ["manzana", "kiwi", "pera", "platano", "mandarina"]
frutas.splice(0,1)

document.write(frutas + "<br>")

frutas.push("sandia","naranjas")

document.write(frutas + "<br>")

frutas.splice(0,1,"cerecas","nisperos")

document.write(frutas + "<br>")

//2
numeros = [1,4,3,6,5,4,32,87,43,0]

ordenada = numeros.sort((a,b) => a-b) 
document.write(ordenada + "<br>")

//3
dias = [
'lunes',
'martes',
'miércoles',
'jueves',
'viernes',
'sábado',
'domingo']

m = dias.filter((m) => m[0]=="m")

document.write(m + "<br>")

//4
ordenada = dias.sort(function(a, b) {
  if (a.toLocaleLowerCase > b.toLocaleLowerCase)
    return 1
  if (a.toLocaleLowerCase < b.toLocaleLowerCase)
    return -1
  return 0
})  

c = ordenada.find((m) => m[0]=="m")

document.write(c + "<br>")

//5
c = ordenada.findIndex((m) => m[0]=="m")

document.write(c + "<br>")

//6
document.write(ordenada.some((m) => m[0]=="s") + "<br>")
document.write(ordenada.every((m) => m.endswith("s")) + "<br>")
*/

//1