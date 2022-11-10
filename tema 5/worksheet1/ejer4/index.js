window.addEventListener("load", () => {
      boton = document.getElementsByTagName("button");
      ul = document.getElementsByTagName("ul");

      boton[0].addEventListener("click", () =>{
            entrada = prompt("escribe lo que quieras en la lista;")
            li = document.createElement("li");
            li.innerHTML = entrada;
            ul[0].appendChild(li);
      })
})