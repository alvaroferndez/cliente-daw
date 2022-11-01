window.addEventListener("load", () => {

      nombre_er = new RegExp("[a-zA-z]{3}");
      apellido_er = new RegExp("[a-zA-z]{3}");
      numero_er = new RegExp("[0-9]{8,8}");
      correo_er = new RegExp("^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+([a-zA-Z0-9]{2,4})+$");
      contraseña_er = new RegExp("[A-Za-z0-9]{8}");

      er = {
            nombre: false,
            apellido: false,
            numero: false,
            correo: false,
            contraseña: false,
            confirmar: false,
      };

      formulario = document.getElementsByTagName("form")[0];
      input = document.querySelectorAll("input");
      envio = input[8];
      validado = document.getElementsByTagName("p")[0];

      function validarCampo(e,er){
            if(er.test(e.target.value)){
                  e.target.style.borderColor = "green";
                  return true;
            }else{
                  e.target.style.borderColor = "red";
                  return false;
            }
      };

      function validarContraseña(e,contraseña){
            if(contraseña==e.target.value){
                  e.target.style.borderColor = "green";
                  return true;
            }else{
                  e.target.style.borderColor = "red";
                  return false;
            }
      }

      function validarFormulario(e){
            switch (e.target.name){
                  case "nombre":
                        if(validarCampo(e,nombre_er)){
                              er.nombre = true;
                        };
                  break;
                  case "apellido":
                        if(validarCampo(e,apellido_er)){
                              er.apellido = true;
                        };
                  break;
                  case "numero":
                        if(validarCampo(e,numero_er)){
                              er.numero = true;
                        };
                  break;
                  case "correo":
                        if(validarCampo(e,correo_er)){
                              er.correo = true;
                        };
                  break;
                  case "contraseña":
                        if(validarCampo(e,contraseña_er)){
                              er.contraseña = true;
                        };
                        valor_contraseña = e.target.value;
                  break;
                  case "confirmar":
                        if(er.contraseña){
                              if(validarContraseña(e,valor_contraseña)){
                                    er.confirmar = true;
                              };
                        }else{
                              e.target.style.borderColor = "red";
                              er.confirmar = false;
                        }
                  break;
            }
      }

      // function quitarBorde(e){
      //       e.target.style.borderColor = "red"
      // }


      input.forEach((input) => {
            input.addEventListener("keyup", validarFormulario);
            input.addEventListener("blur", validarFormulario);
            // input.addEventListener("focus", quitarBorde);
      });

      function formularioIncorrecto(e){
            e.style.visibility = "visible";
      }

      formulario.addEventListener("submit", (e) =>{
            e.preventDefault();
            if(er.nombre && er.apellido && er.numero && er.correo && er.contraseña && er.confirmar){
                  formulario.reset()
                  input.forEach((input) => {
                        input.style.borderColor = "rgba(128, 128, 128, 0.519)";
                  })
            }else{
                  formularioIncorrecto(validado);
            }
      })
})