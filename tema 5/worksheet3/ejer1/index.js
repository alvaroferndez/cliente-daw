window.addEventListener("load", () =>{
      inicio = document.getElementsByTagName("button")[0];
      parar = document.getElementsByTagName("button")[1];
      reinicio = document.getElementsByTagName("button")[2];
      segundos = document.getElementsByTagName("span")[0];
      milisegundos = document.getElementsByTagName("span")[2];

      
      function contarMilisengundos(){
            if(m<99){
                  m++;
            }else{
                  m=0;
            }
            if(m==0){
                  s++;
            }
            resultado = []
            resultado.push(m,s)
            return resultado;

      }

      m=0;
      s=0;

      inicio.addEventListener("click", () => {
            mil_interval = setInterval(()=>{milisegundos.innerHTML = contarMilisengundos()[0];segundos.innerHTML = contarMilisengundos()[1]},20);
      })

      parar.addEventListener("click", () => {
            clearInterval(mil_interval);
      })

      reinicio.addEventListener("click", () => {
            clearInterval(mil_interval);
            segundos.innerHTML = "00";
            milisegundos.innerHTML = "00";
            m=0;
            s=0;
      })
})