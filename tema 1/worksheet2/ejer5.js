cof0 = parseFloat(prompt("Introduce el primer coeficiente: "))
cof1 = parseFloat(prompt("Introduce el segundo coeficiente: "))
cof2 = parseFloat(prompt("Introduce el tercer coeficiente: "))

function ecuacion(num0, num1, num2){
      let resultado1, resultado2
      raiz = Math.sqrt(num1**2 - 4 * num1 * num2)
      if (typeof raiz == "" ){
            document.write("No tiene solucion")
      }else{
            resultado1 = (-num1 + raiz)/(2*num0)
            resultado2 = (-num1 - raiz)/(2*num0)
            if (resultado1 == resultado2){
                  document.write (`resultados : ${resultado1}`)
            }else{
                  document.write (`resultado 1: ${resultado1} <br> resultado 2: ${resultado2}`)
            }
      }

}

ecuacion(cof0, cof1, cof2)