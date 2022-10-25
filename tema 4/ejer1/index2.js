window.addEventListener("load", () =>{
      enlace = document.getElementsByClassName("enlace");
      link = document.getElementsByTagName("link");
      enlace[0].addEventListener("click",() => {
            link[0].href = "index2_1.css"
      })
      enlace[1].addEventListener("click",() => {
            link[0].href = "index2.css"
      })
})