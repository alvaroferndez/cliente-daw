window.addEventListener("load", () => {
      seccion = document.getElementsByTagName("section")[0];
      divs = document.getElementsByClassName("letra");
      solucion = document.getElementById("solucion");

      lista_pal = [
            "hola",
            "gacamayo",
            "salir",
            "veinte"
      ]

      function getRandomInt(max) {
            return Math.floor(Math.random() * max);
      }

      function elegirPalabra(){
            numero = getRandomInt(4);
            return lista_pal[numero];
      }

      pal_solucion = elegirPalabra()
      pal_jugador = [];

      for(let i=0; i<pal_solucion.length; i++){
            pal_jugador.push("");
      }

      for(let i=0; i<pal_solucion.length; i++){
            span = document.createElement("span");
            span.className = "span_solucion"; 
            span.innerHTML = "-";
            span.style.height = "10px";
            span.style.width = "50xp";
            span.style.marginLeft = "10px";
            span.style.borderBottom = "1px solid #0000FF";
            solucion.appendChild(span);
      }
      
      span_solucion = document.getElementsByClassName("span_solucion")

      function buscarLetra(e){
            verde = false;
            for(let i=0; i<pal_solucion.length; i++){
                  if(pal_solucion[i]==e.target.innerHTML){
                        span_solucion[i].innerHTML=e.target.innerHTML;
                        verde = true;
                        pal_jugador[i] = e.target.innerHTML;
                  }
            }
            if(verde == true){
                  e.target.style.backgroundColor = "green";
            }else{
                  e.target.style.backgroundColor = "red";
            }
            if(comprobarResuelto()){
                  pal_jugador = pal_jugador.join("")
                  console.log(pal_jugador)
                  if(pal_jugador == pal_solucion){
                        span = document.createElement("span");
                        span.innerHTML = "has ganado!"
                        span.style.color = "green"
                        seccion.appendChild(span);
                        for (div of divs){
                              div.removeEventListener("click",buscarLetra);
                        }
                  }
            }
      }

      function comprobarResuelto(){
            j=0;
            for (let i=0; i<pal_solucion.length; i++){
                  if(pal_jugador[i]!=""){
                        j++
                  }
            }
            if(j==pal_solucion.length){
                  return true
            }else
            return false
      }

      for (div of divs){
            div.addEventListener("click",buscarLetra);
      }
      
})