window.addEventListener("load",() =>{
      button = document.getElementsByTagName("button");
      p = document.getElementsByTagName("p");
      button[0].addEventListener("click", () =>{
            for (element of p){
                  tamaño = element.style.fontSize;
                  tamaño = tamaño[0] + tamaño[1];
                  resultado = parseInt(tamaño) + 1
                  resultado = resultado + "px"
                  element.style.fontSize = resultado;
            }
      });
      button[1].addEventListener("click", () =>{
            for (element of p){
                  tamaño = element.style.fontSize
                  tamaño = tamaño[0] + tamaño[1]
                  resultado = tamaño - 1
                  resultado = resultado + "px"
                  element.style.fontSize = resultado;
            }
      });
      button[2].addEventListener("click", () =>{
            for (element of p){
                  element.style.fontSize = "16px";
            }
      });
      button[3].addEventListener("click", () =>{
            for (element of p){
                  element.style.textAlign = "justify";  
            }
      });
      button[4].addEventListener("click", () =>{
            for (element of p){
                  element.style.textAlign = "left";            
            }
      });
      
})
