import {ListaLibros} from "./libro.js";
import { Libro } from "./libro.js";

window.addEventListener("load", () => {
      let envio = document.getElementsByClassName("btn btn-primary btn-lg btn-block")[0];
      let titulo = document.getElementById("title");
      let genero = document.getElementById("genre");
      let autor = document.getElementById("author");
      let lista_libros = document.getElementById("readingList");

      lista_libros.style.width = "100%";
      lista_libros.style.height = "100%";

      var lista = new ListaLibros();

      function libroLeido(libro,leido){
            console.log(libro);
      }

      function enviarLibro(){
            let libro = new Libro(titulo.value,genero.value,autor.value);
            lista.añadirLibro(libro);
            let elemento = document.createElement("li");
            elemento.style.width = "90%";
            elemento.style.height = "80px";
            elemento.style.backgroundColor= "white";
            elemento.style.listStyle= "none";
            elemento.style.position= "relative";
            elemento.style.marginBottom = "10px";
            lista_libros.appendChild(elemento);
            let titulo_p = document.createElement("p");
            titulo_p.innerHTML = libro.titulo;
            titulo_p.style.fontWeight = "400";
            titulo_p.style.marginLeft = "15px";
            titulo_p.style.fontSize = "20px";
            let autor_p = document.createElement("h6");
            autor_p.innerHTML = libro.autor;
            autor_p.style.marginLeft = "15px";
            let leido = document.createElement("span");
            leido.style.right = "15px";
            leido.style.color = "gray";
            leido.innerHTML = "no leido";
            leido.style.position = "absolute";
            leido.style.top = "25px";
            elemento.appendChild(titulo_p);
            elemento.appendChild(autor_p);
            elemento.appendChild(leido);
            elemento.onclick = libroLeido(libro,leido);
      }

      envio.addEventListener("click", enviarLibro)
})
