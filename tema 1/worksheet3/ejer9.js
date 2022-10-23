// hacer una tabla con dos for con i y j donde sean igual al length de la palabra que me pasan

document.write(`<table>`)
function palabra(palabra){
      document.write(`<tr>`)
      for (letra of palabra){
            document.write(`<td padding="10px">${letra}</td>&nbsp;`)
      }
      document.write(`<br></tr>`)
      resultado1 = palabra.split("").reverse().join("")
      resultado1 = resultado1.substr(1)
      resultado1 = resultado1.split("").reverse().join("")
      resultado1 = resultado1.substr(1)
      for (letra of resultado1){
            document.write(`<tr padding="10px">${letra}</tr>`)
            document.write(`<tr padding="10px">${letra}</tr><br>`)
      }
      resultado2 = palabra.split("").reverse().join("")
      for (letra of resultado2){
            document.write(`<td padding="10px">${letra}</td>&nbsp;`)
      }
      document.write(`</tr>`)
}
document.write("</table>")


palabra("hola")