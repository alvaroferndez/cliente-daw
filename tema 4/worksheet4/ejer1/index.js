window.addEventListener("load", () =>{
      enlace = document.getElementsByClassName("enlace");
      div = document.getElementsByTagName("div");
      normal = document.getElementById("normal");
      aside = document.getElementsByTagName("aside");
      seccion = document.getElementsByTagName("section");
      body = document.body
      enlace[0].addEventListener("click",(e) => {
            seccion[0].style.marginLeft = "10px";
            div[0].style.backgroundColor = "#ADD8E6";
            div[0].style.borderBottom = "1px solid #00008B";
            div[0].style.borderRight = "1px solid #00008B";
            for (element of enlace){
                  element.style.textDecoration="none";
                  element.style.fontWeight="bold";
            }
            body.bgColor= "f5deb3";
            normal.style.display = "block";
            normal.style.fontWeight="bold";
            aside[0].style.height = "100vh";
            aside[0].style.width = "100px";
            aside[0].style.backgroundColor = "#07C9E0";
            div[1].style.backgroundColor = "yellow";
            div[1].style.padding = "1px";
            div[1].style.border = "1px solid black";
      });
      enlace[1].addEventListener("click",(e) => {
            seccion[0].style = "none";
            div[0].style = "none";
            for (element of enlace){
                  element.style.textDecoration="underline";
                  element.style.fontWeight="normal";
            }
            body.bgColor= "White";
            normal.style = "none";
            aside[0].style = "none";
            div[1].style = "none";
      })

})