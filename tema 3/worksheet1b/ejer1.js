//1
sum = (num1, num2) => num1+num2

document.write(sum(1,2) + "<br>")

//2
stringLength = (str) => document.write(`the length of "${str}" is: `, str.length)

stringLength("hola") 
document.write("<br>")

//3
stringLength2 = (str) => {
      let length = str.length
      console.log(`the length of "${str}" is:`, length)
      return str.length
}

document.write(stringLength2("holas") + "<br>")

//4
alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
ShowAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)

ShowAlert("hey") + "<br>"

//5
oneTwoThreeRotate = () => {
      Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
            tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
        })
}

document.write(oneTwoThreeRotate() + "<br>")

//6
saludo = (nombre,edad) => `hola soy ${nombre} y tengo ${edad}`

document.write(saludo("alvaro",3) + "<br>")

//7
array = [1,2,3,4,5,4]
suma = (lista) => {
      this.lista = lista
      resultado = 0
      for (element of this.lista){
            resultado += element
      }
      return resultado
}

document.write(suma(array) + "<br>")

//8
eye = "eye"
fire = () => `bulls-`

document.write(fire() + "<br>")

//9
fibonacci = (n) => {
      if (n < 3) return 1;
return fibonacci(n - 1) + fibonacci(n - 2);
}

document.write(fibonacci(1) + "<br>")