window.addEventListener("load",() =>{
      enlaces =document.getElementsByTagName("a");
      p = document.getElementsByTagName("p");
      console.log(enlaces.length);

      console.log(enlaces[(enlaces.length)-2].href);

      google = [];
      for (enlace of enlaces){
            if(enlace.href == "http://127.0.0.7:5500/tema%205/worksheet1/ejer1/google.com"){
                  google.push(enlace);
            }
      }

      console.log(google.length);

      tercer = p[1].childNodes;
      console.log(tercer.length);

})