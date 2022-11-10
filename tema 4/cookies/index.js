window.addEventListener("load",()=> {
      if(getCookie("nombre-usuario")){
            console.log(getCookie("nombre-usuario"))
      }else{
            usuario = prompt("Dime el usuario:")
            setCookie("nombre-usuario",usuario,15)
            console.log(getCookie("nombre-usuario"))
      }

      if(getCookie("color-fondo")){
            document.body.style.backgroundColor = getCookie("color-fondo")
      }else{
            color = prompt("Dime el color:")
            setCookie("color-fondo",color)
            document.body.style.backgroundColor = getCookie("color-fondo")
      }

      if(getCookie("color-parrafo")){
            document.getElementsByTagName("p")[0].style.color = getCookie("color-parrafo")
      }else{
            color = prompt("Dime el color del parrafo:")
            setCookie("color-parrafo",color,15)
            document.getElementsByTagName("p")[0].style.color = getCookie("color-parrafo")
      }

      if(getCookie("tamaño-letra")){
            document.body.style.fontSize = getCookie("tamaño-letra") + "px"
      }else{
            tamaño = prompt("Dime el tamaño:")
            setCookie("tamaño-letra",tamaño,15)
            document.body.style.fontSize = getCookie("tamaño-letra") + "px"
      }

      deleteCookie("color-parrafo")
})


function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
}


function setCookie(cname, cvalue, exdays=null) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname){
      setCookie(cname,"",-1)
}