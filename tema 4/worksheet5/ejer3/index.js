window.addEventListener("load", () => {

      nombre_er_min = new RegExp("[a-z]+");
      nombre_er_mayu = new RegExp("[A-Z]+");
      nombre_er_lon = new RegExp("[a-zA-Z0-9]{6}");

      er = {
            min: false,
            mayu: false,
            lon: false,
      }

      formulario = document.getElementsByTagName("form")[0];
      nombre = document.getElementById("nombre");
      envio = document.getElementById("submit");
      lista = document.getElementsByTagName("a")

      function validarNombre(e){
            if(nombre_er_min.test(e.target.value)){
                  lista[0].style.color = "white";
                  er.min = true;
            }else{
                  lista[0].style.color = "#F7BA9E";
                  er.min = false;
            };

            if(nombre_er_mayu.test(e.target.value)){
                  lista[1].style.color = "white";
                  er.mayu = true;
            }else{
                  lista[1].style.color = "#F7BA9E";
                  er.mayu = false;
            };

            if(nombre_er_lon.test(e.target.value)){
                  lista[2].style.color = "white";
                  er.lon = true;
            }else{
                  lista[2].style.color = "#F7BA9E";
                  er.lon = false;
            };
      }

      nombre.addEventListener("keyup", validarNombre);

      formulario.addEventListener("submit", (e) =>{
            e.preventDefault();
            if(er.min && er.mayu && er.lon){
                  formulario.reset()
            }
      })
})