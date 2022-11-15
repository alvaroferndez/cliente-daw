function iniciar(){
      //contador 
      jugador1 = document.getElementsByTagName("span")[0];
      jugador2 = document.getElementsByTagName("span")[2];
      puntos_jugador1 = 0;
      puntos_jugador2 = 0;

      //bola
      bola = document.getElementById("bola");
      cx = 50;
      cy = 50;
      radio = 10;
      direccionx=1;
      direcciony=1;
      speedx = 3;
      speedy = 3;

      //barras
      barra1 = document.getElementById("barra1");
      barra2 = document.getElementById("barra2");
      x1 = parseInt(barra1.getAttribute("x"));
      y1 = 125;
      x2 = parseInt(barra2.getAttribute("x"));
      y2 = 125;
      direcciony1=1;
      direcciony2=1;

      function cargarSesiones(){
            if(sessionStorage.jugador1 && sessionStorage.jugador2){
                  jugador1.innerHTML = JSON.parse(sessionStorage.jugador1);
                  jugador2.innerHTML = JSON.parse(sessionStorage.jugador2);
                  puntos_jugador1 = JSON.parse(sessionStorage.jugador1);
                  puntos_jugador2 = JSON.parse(sessionStorage.jugador2);
            }else{
                  sessionStorage.jugador1 = JSON.stringify(0);
                  sessionStorage.jugador2 = JSON.stringify(0);
            }     
      }

      cargarSesiones();

      function movimientoBola(){

            function sumarJugador1(){
                  puntos_jugador2++;
                  jugador2.innerHTML = puntos_jugador2;
                  sessionStorage.jugador2 = JSON.stringify(puntos_jugador2);
                  cx=500;
            }

            function sumarJugador2(){
                  puntos_jugador1++;
                  jugador1.innerHTML = puntos_jugador1;
                  sessionStorage.jugador1 = JSON.stringify(puntos_jugador1);
                  cx=500;
            }


            function dibujarBola(){
                  if(cx>(1000-radio) || cx<(0+radio)){
                        if(cx>(1000-radio)){
                              sumarJugador2();
                        }else if(cx<(0+radio)){
                              sumarJugador1();
                        }
                  }

                  if(cy>(300-radio) || cy<(10+radio)){
                        direcciony*=-1;
                  }

                  if((cx-(radio*2)) < x1 && (cy<=(y1 +50) && cy>= y1)){
                        direccionx*=-1;
                  }


                  if((cx+radio) > x2 && (cy<=(y2 +50) && cy>= y2)){
                        direccionx*=-1;
                  }

                  cx += direccionx*speedx;
                  bola.setAttribute("cx",cx);

                  cy += direcciony*speedy;
                  bola.setAttribute("cy",cy);
            }
            


            intervalo = setInterval(dibujarBola, 10);
      }

      function movimientoBarra(){
            document.addEventListener("keydown", (e) => {
                  if(e.key == "w"){
                        y1 += -10;
                        barra1.setAttribute("y",y1);
                  }else if(e.key == "s"){
                        y1 += 10;
                        barra1.setAttribute("y",y1);
                  }else if(e.key == "ArrowUp"){
                        y2 += -10;
                        barra2.setAttribute("y",y2);
                  }else if(e.key == "ArrowDown"){
                        y2 += 10;
                        barra2.setAttribute("y",y2);
                  }
            })
      }

      movimientoBola();
      movimientoBarra();
}




window.addEventListener("load", () => {
      iniciar()
})