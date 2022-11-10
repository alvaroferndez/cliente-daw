window.addEventListener("load", () => {
      input = document.getElementsByTagName("input");
      boton = document.getElementsByTagName("input")[1];
      form = document.getElementsByTagName("form")[0];

      function crearEvento(i){
            input[i].addEventListener("click",() => {            
            input = document.createElement("input");
            input.type = "file";
            form.appendChild(input);
            input = document.getElementsByTagName("input");
            })
            return input
      }

      for (let i=0; i<input.length; i++){
            crearEvento(i);
            input.length = crearEvento.length;
      }
})