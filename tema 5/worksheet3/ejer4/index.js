function iniciar(section,ul){
      boton = document.getElementsByTagName("button")[0];
      entrada = document.getElementById("entrada");
      limpiar = document.getElementsByTagName("button")[1];
      body = document.body;


      function editarElemento(li,div){
            li.innerHTML = prompt("Intorduzca el nuevo elemento: ");
            li.append(div);
      }

      function eliminarElemento(li){
            li.remove();
      }

      function crearImagen(div,li){
            img1 = document.createElement("img");
            img2 = document.createElement("img");
            img1.className = "imagen";
            img2.className = "imagen";
            img1.src = "editar.png";
            img2.src = "borrar.png";
            div.append(img1);
            div.append(img2);
            img1.onclick = function() {editarElemento(li,div)};
            img2.onclick = function() {eliminarElemento(li)};
      }

      function crearDiv(li){
            div_imagen = document.createElement("div");
            li.innerHTML = entrada.value;
            li.append(div_imagen);
            crearImagen(div_imagen,li);
      }

      function enviarDatos(){
            if(entrada.value != ""){
                  if(document.getElementById("añadir") != undefined){
                        p = document.getElementById("añadir");
                        p.remove();
                  }
                  if(document.getElementById("borrar") != undefined){
                        p = document.getElementById("borrar");
                        p.remove();
                  }
                  li = document.createElement("li");
                  li.className = "elemento";
                  crearDiv(li);
                  ul.appendChild(li);
                  entrada.value = "";
            }else{
                  if(document.getElementById("añadir") == undefined || document.getElementById("añadir").innerHTML == ''){
                        p = document.createElement("p");
                        p.id = "añadir";
                        p.innerHTML = "Introduzca un elemento para añadir";
                        body.appendChild(p);
                  }
            }
      }

      function limpiarDatos(){
            if(ul.childNodes.length > 0){
                  section.removeChild(ul);
                  ul = document.createElement("ul");
                  section.appendChild(ul);
            }else{
                  if(document.getElementById("borrar") == undefined || document.getElementById("borrar").innerHTML == ''){
                        p = document.createElement("p")
                        p.innerHTML = "No hay elementos para borrar";
                        p.id = "borrar"
                        body.appendChild(p);
                  }
            }
                
      }

      boton.addEventListener("click", enviarDatos);
      limpiar.addEventListener("click", limpiarDatos);
}


window.addEventListener("load",() => {
      section = document.getElementsByTagName("section")[0];
      ul = document.createElement("ul");
      section.appendChild(ul);
      iniciar(section,ul);
})

