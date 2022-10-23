document.write(Math.floor(Math.random() * 2) + "<br>")

document.write(Math.floor(Math.random() * (200 - 100) + 100) + "<br>")

num1= parseInt(prompt("Introduce el mínimo: "))
num2= parseInt(prompt("Introduce el máximo: "))

document.write(Math.floor(Math.random() * (num2 - num1) + num1) + "<br>")