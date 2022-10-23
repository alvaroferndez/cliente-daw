/*console.log("peter");
document.write("<h1>contenido</h1>");

let miVariable;
console.log('el valor de mi variable es ' + miVariable);
miVariable=2;
console.log('el valor de mi variable es ' + miVariable);

const miVariable1 =2;

console.log(`el valor de mi variable es 2 ${miVariable}`);

//1.4
let a=3, b=2;

console.log('la suma es =', a+b,'la resta es =', a-b, 'la multiplicación es =', a*b, 'la división es =', a/b, 'el modulo es =', a%b, 'la potencia es =', a**b);

//2.3
let circunferencia, radio=3, area;
const pi = 3.14;
circunferencia = radio*2 * pi; 

area = radio**2 * pi;

console.log('La circunferencia es ' + circunferencia + ' y el area es ' + area);

//2.4
let celsius= 2, fahrenhei;

fahrenhei = celsius * 9 / 5 + 32

console.log(celsius + 'º es ' + fahrenhei)

fahrenhei = 45

celsius = (fahrenhei - 32) * 5 / 9  

console.log(fahrenhei + ' es ' + celsius + 'º')

if (a=='3' && b==2 || b==3){
      console.log('vale booleano');
} else {
      console.log('no vale booleano');
}

console.log(typeof(a));


switch (a){
      case 3:
            console.log('a vale 3');
            console.log('a sigue valiendo 3');
            break;
      case 5:
            console.log('a vale 5');
}


//5.1
let valor=prompt('Introduce un valor: ')
modulo = valor%2

if (modulo==0){
      console.log('es par')
}else{
      console.log('es impar')
}



//5.2
let edad=prompt('Introduce tu edad: ')

if (edad<=18){
      console.log('es menor de edad')
}else{
      console.log('es mayor de edad')
}



//5.3
let edad2=prompt('Introduce tu edad: ')
let localidad = prompt('Introduce tu localidad: ')

if (edad2==25 && localidad=='Madrid'){
      console.log('enhorabuena')
}


//5.4
let numero=prompt('Introduce un valor: '), desc;

if (numero>=100){
      desc = numero*15/100
      console.log(desc)
      console.log('el total es: ', numero-desc)
}else{
      console.log('no se aplica decuento')
}


//5.6
let edad3=prompt('Introduce tu edad: ')
let localidad2 = prompt('Introduce tu localidad: ')

if (18>=edad3<=30 && localidad2=='Madrid'){
      console.log('tiene derecho al carnet')
}


//if/else 3
let edad4=prompt('Introduce tu edad4: ')

if (edad4<=5){
      console.log('infantil')
}else if(6<=edad4<=11) {
      console.log('primaria')
} else if(12<=edad4<=16) {
      console.log('eso')
} else if(17<=edad4<=21) {
      console.log('bachiller o ciclos')
} else{
      console.log('universidad')
}



//if/else 5
let examen1 = parseFloat(prompt('examen 1: '))
let examen2 = parseFloat(prompt('examen 2: '))
let trabajo1 = parseFloat(prompt('trabajo 1: '))
let trabajo2 = parseFloat(prompt('trabajo 2: '))

if (examen1<=4.5 || examen2<=4.5 || trabajo1<=4.5 || trabajo2<=4.5){
      console.log('estas suspenso')
}else{
      let media_examenes = (examen1 + examen2) / 2
      let media_trabajos = (trabajo1 + trabajo2) / 2
      let total = media_examenes *0.75 + media_trabajos *0.25
      console.log(total)
}
0

//switch1
let mes=prompt('Introduce el mes: ')

switch(mes){
case 'enero':
case 'marzo':
case 'mayo':
case 'julio':
case 'agosto':
case 'octubre':
case 'diciembre':
      console.log('tiene 31')
      break
case 'febrero':
      console.log('tiene 28')
      break
case 'abril':
case 'junio':
case 'septiembre':
case 'noviembre':
      console.log('tiene 30')
      break

}


let number=0;
for (let i=4 ; number<=5 && i>3; number++){
      document.write(number+ '<br>')
}
*/


let lista=['1,2,3,4']
let nombre=['pepe', 'huan', 'lui', 0, lista]
/*
for(let i=0; i<nombre.length; i++){
      document.write(nombre[i]+'<br>')
      for (j=0; if(i))
}



---for (element of nombre){
      if (element){
            for(i of element){ 
            }
      }
      
}


let contador=10
while(contador<10){
      document.write(contador+'<br>')
      contador++
}

do{
      document.write(contador+'<br>')
      contador++
}
while(contador<10)


function sumar(...numero)
{
      document.write(numero.length)
}
sumar(2,4,3,5,6,7,8)


// 4.10
for (i=1; i<=6; i++){
      document.write(`<h${i}>Cabecera h${i}</h${i}>`)
}


//4.11
let columna=prompt('Introduce columna: '), alto=parseInt(prompt('introduce alto')), ancho=parseInt(prompt('introduce acho'))

document.write("<table boder='0' cellspacing='2' bgcolor='black'>")
document.write("<tr bgcolor='white' height='"+alto+"'>")
      for (let i=0; i<columna; i++){
            if(i%2==0){
                  document.write("<td bgcolor='black' width='"+ancho+"' &nbsp;></td>")
            }else{
                  document.write("<td width='"+ancho+"' &nbsp;></td>")
            }
      }
document.write("</tr>")
document.write("</table>")


//4.13
let columna=prompt('Introduce columna: '), alto=parseInt(prompt('introduce alto')), ancho=parseInt(prompt('introduce acho'))

document.write(`<table boder='0' cellspacing='2' bgcolor='black' width='200'><tr bgcolor='white' height='${alto}'>`)
let i = 0
while (i<columna){
      document.write(`<td width='${ancho}' &nbsp;></td>`)
      i++
}
document.write(`</tr></table>`)


//4.14
let columna=prompt('Introduce columna: '), alto=parseInt(prompt('introduce alto')), ancho=parseInt(prompt('introduce acho'))

document.write(`<table boder='0' cellspacing='2' bgcolor='black' width='200'><tr bgcolor='white' height='${alto}'>`)
let i = 0
      while (i<columna){
            if(i%2==0){
                  document.write(`<td bgcolor='black' width='${ancho}' &nbsp;></td>`)
            }else{
                  document.write(`<td width='${ancho}' &nbsp;></td>`)
            }
            i++
      }
document.write(`</tr></table>`)



//4.15
let jugador1= parseFloat(prompt('Introduzaca su número jugadro 1')), jugador2 = parseFloat(prompt('Introduzca su número jugador 2'))

while(jugador1!=jugador2){
     if (jugador1<jugador2){
            document.write('Es menor <br>')
     }else{
            document.write('Es mayor <br>')
     }
     jugador2 = parseFloat(prompt('Introduzca su número jugador 2'))
}
document.write('Has acertado')


//4.16
let jugador1= parseFloat(prompt('Introduzaca su número jugadro 1')), jugador2 = parseFloat(prompt('Introduzca su número jugador 2'))
do{     
      if (jugador1<jugador2){
            document.write('Es menor <br>')
      }else{
            document.write('Es mayor <br>')
      }
      jugador2 = parseFloat(prompt('Introduzca su número jugador 2'))
}
while(jugador1!=jugador2){
}
document.write('Has acertado')


//4.17

for (i=1; i<=10; i++){
      document.write('<br> <h3>Tabla del '+ i +'</h3>')
      for(j=0; j<=10; j++){
            document.write(i + ' x ' + j + ' = ' + j*i + '<br>')
      }
}


//4.18
let columna=prompt('Introduce columna: '), fila=prompt('Introduce fila: '), alto=parseInt(prompt('introduce alto')), ancho=parseInt(prompt('introduce acho'))

document.write(`<table boder='0' cellspacing='2' bgcolor='black' width='200'>`)
let i = 0
let j=0
while(j<fila){
      document.write(`<tr bgcolor='white' height='${alto}'>`) 
      while (i<columna){
            document.write(`<td width='${ancho}' &nbsp;></td>`)
            i++
      }
      i=0
      document.write('</tr>')
      j++
}
document.write(`</table>`)
*/

//4.19
let columna=prompt('Introduce columna: '), fila=prompt('Introduce fila: '), ancho=parseInt(prompt('introduce acho'))

document.write(`<table boder='0' cellspacing='2' bgcolor='black'>`)
let i = 0
let j=0
while(j<fila){
      document.write(`<tr bgcolor='white' height='${ancho}'>`) 
      if(j%2==0){
            while (i<columna){
                  if(i%2==0){
                        document.write(`<td bgcolor='black' width='${ancho}' &nbsp;></td>`)
                        i++
                  }else{
                        document.write(`<td bgcolor='white' width='${ancho}' &nbsp;></td>`)
                        i++
                  }
            }
      }else{
            while (i<columna){
                  if(i%2==0){
                        document.write(`<td bgcolor='white' width='${ancho}' &nbsp;></td>`)
                        i++
                  }else{
                        document.write(`<td bgcolor='black' width='${ancho}' &nbsp;></td>`)
                        i++
                  }
            }
      }
      i=0
      document.write('</tr>')
      j++
}
document.write(`</table>`)
