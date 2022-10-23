/*
// 1
function sumar(...number){
      let resultado = 0
      for (numero of number){
            resultado += numero
      }
      document.write(resultado)
}

sumar(4,6,5,3,2)

//2
function sumarNumeros(...number){
      let resultado = 0
      for (numero of number){
            if (typeof numero == "number"){
            resultado += numero
            }
      }
      document.write(resultado)
}

sumarNumeros(4,'r','j',6,5,3,2,3)


//3
function countTheArgs(...numbers){
      document.write(numbers.length)
}

countTheArgs(4,5,4,3,2,4)


//4
function combineTwoArrays(...array){
      document.write([...array])
}

let lista1 =[1,2,2,3,4,'d'], lista2=[0,'d','g']
combineTwoArrays(lista1,lista2)



//5
function sumEveryOther(...number){
      let resultado = 0
      for (numero in number){
            if (numero%2==0){
                  resultado += number[numero]
            }
      }
      document.write(resultado)
}

sumEveryOther(4,5,4,3,2,4)



//6
function onlyUniques(...set){
      let resultado = []
      contador = 0
      for (element of set){
            for (elements of set){
                  if (element == elements){
                        contador++
                  }
            }
            if (contador < 2){
                  resultado.push(element)
            }
            contador = 0
      }
      document.write(...resultado)
}

onlyUniques(3,4,3,2,5,2,4,'f','f','g')


//7
function combineAllArrays(...array){
      document.write([...array])
}

let lista1 =[1,2,2,3,4,'d'], lista2=[0,'d','g'], lista3=[0,'d','g'], lista4=[0,'d','g']
combineAllArrays(lista1,lista2,lista3,lista4)



//7.2
function combineAllArrays(...array){
      let resultado = []
      for (element of array){
            resultado = resultado.concat(combineArray(element))
      }
      document.write([...resultado])
}

function combineArray(array){
      let resultado = []
      for (i of array){
            if (typeof i == 'object'){
                  combineArray(i)
            }else{
                  resultado = resultado.concat(element)
            }
      }
      return resultado
}
let lista1 =[1,2,2,3,4,'d'], lista2=[0,'d','g'], lista3=[[lista1],'d','g'], lista4=[lista3,'d','g']
combineAllArrays(lista1,lista2,lista3,lista4)



//8
function squareAndSum(...element){
      resultado = 0
      for (number of element){
            resultado += number**2
      }
      document.write(resultado)
}


squareAndSum(1, 2)
*/