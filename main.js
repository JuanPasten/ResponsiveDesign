// console.log();

const ipad = window.matchMedia("screen and (max-width: 767px)");

const menu = document.querySelector(".menu");
// console.log(menu);

const burgerButton = document.querySelector("#burger-menu");
// console.log(burgerButton);


ipad.addListener(validation);
setEvent(ipad.matches);

function validation(event){
   setEvent(event.matches);
}

function setEvent(active){
   if(active){
      burgerButton.addEventListener("click", hideShow);
      menu.addEventListener("click", hideMenu);
   } 
   else {
      burgerButton.removeEventListener("click", hideShow);
      menu.removeEventListener("click", hideMenu);
   }
}

function hideMenu(){
   menu.classList.remove("is-active");
}

function hideShow (){
   if(menu.classList.contains("is-active")){
      menu.classList.remove("is-active");
   } 
   else {
      menu.classList.add("is-active");
   }
}


// Por algún motivo este código no funciona
// function validation(event){
//    if (event.matches){
//       console.log("true");
//       burgerButton.addEventListener("click", hideShow);
//    }
//    else {
//       console.log("false");
//       burgerButton.removeEventListener("click", hideShow);
//    }
// }