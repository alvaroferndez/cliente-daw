window.addEventListener("load", () =>{
      lista_img = [
            "https://picsum.photos/id/237/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/200/300?grayscale",
            "https://picsum.photos/200/300/?blur",
      ]


      botones = document.getElementsByTagName("button");
      img = document.getElementsByTagName("img")[0];

      actual = img.src

      function carrusel(e){
            if (e.target.id == "anterior"){
                  console.log(img.src)
                  for (let i=0; i<lista_img.length; i++){
                        if (lista_img[i] == actual){
                              if (i == 0){
                                    img.src = lista_img[3];
                              }else{
                                    img.src = lista_img[i-1];
                              }
                              
                        }
                  }
            }else if(e.target.id == "siguiente"){
                  console.log(img.src);
                  for (let i=0; i<lista_img.length; i++){
                        if (lista_img[i] == actual){
                              if(i==3){
                                    img.src = lista_img[0];
                              }else{
                                    img.src = lista_img[i+1];
                              }
                        }
                  }
            }
            actual = img.src;
      }

      botones[0].addEventListener("click", carrusel);
      botones[1].addEventListener("click", carrusel)

})