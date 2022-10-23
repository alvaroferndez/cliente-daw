document.write("<table border='1' cellspacing='2'>")
i=1
while(i<=10){
      document.write(`<tr><td>${i}</td><td>${Math.sin(i)}</td></tr>`)
      i++
}
document.write("</table>")