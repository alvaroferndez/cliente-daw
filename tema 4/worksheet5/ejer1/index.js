window.addEventListener("load", () =>{
      mayuscula_er = new RegExp('[A-Z]+');
      caracter_er = new RegExp('[!@#$%^&]+');
      correo_er = new RegExp('^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+([a-zA-Z0-9]{2,4})+$');
      credito_er = new RegExp('[0-9]{12}');
      longitud_er = new RegExp('[a-z]{8}');
      numero_er = new RegExp('[0-9]+');

      formulario = document.getElementById("formulario");
      envio = document.querySelectorAll("#formulario input");
      p = document.getElementsByTagName("p")

      campo = {
            nombre: false,
            especial: false,
            correo: false,
            tarjeta: false,
            longitud: false,
            numero: false,
      }

      function validarFormulario(e){
            switch (e.target.name){
                  case "nombre":
                        nombre = p[0];
                        if(mayuscula_er.test(e.target.value)){
                              nombre.innerHTML = "nombre correcto";
                              campo.nombre = true;
                        }else{
                              nombre.innerHTML = "nombre incorrecto";
                              campo.nombre = false;
                        }
                  break;
                  case "especial":
                        especial = p[1];
                        if(caracter_er.test(e.target.value)){
                              especial.innerHTML = "especial correcto";
                              campo.especial = true;
                        }else{
                              especial.innerHTML = "especial incorrecto";
                              campo.especial = false;
                        }
                  break;
                  case "correo":
                        correo = p[2];
                        if(correo_er.test(e.target.value)){
                              correo.innerHTML = "correo correcto";
                              campo.correo = true;
                        }else{
                              correo.innerHTML = "correo incorrecto";
                              campo.correo = false;
                        }
                  break;
                  case "credito":
                        credito = p[3];
                        if(credito_er.test(e.target.value)){
                              credito.innerHTML = "credito correcto";
                              campo.tarjeta = true;
                        }else{
                              credito.innerHTML = "credito incorrecto";
                              campo.tarjeta = false;
                        }
                  break;
                  case "longitud":
                        longitud = p[4];
                        if(longitud_er.test(e.target.value)){
                              longitud.innerHTML = "longitud correcto";
                              campo.longitud = true;
                        }else{
                              longitud.innerHTML = "longitud incorrecto";
                              campo.longitud = false;
                        }
                  break;
                  case "numero":
                        numero = p[5];
                        if(numero_er.test(e.target.value)){
                              numero.innerHTML = "numero correcto";
                              campo.numero = true;
                        }else{
                              numero.innerHTML = "numero incorrecto";
                              campo.numero = false;
                        }
                  break;
            }
      }

      envio.forEach( (input) => {
            input.addEventListener("keyup", validarFormulario);
            input.addEventListener("blur", validarFormulario);
      });

      formulario.addEventListener("submit", (e) =>{
            e.preventDefault();
            if (campo.nombre && campo.especial && campo.correo && campo.tarjeta && campo.longitud && campo.numero){
                  formulario.reset()
                  for (i=0;i<7;i++){
                        p[i].innerHTML = "";
                  }
            }else{
                  p[6].innerHTML = "Formulario erroneo"
            }
      })
})