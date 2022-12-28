var body = document.body;


var hamburger = document.querySelector(".navbar-toggler");
var offcanvasNavbar = hamburger.querySelectorAll("span");

   hamburger.addEventListener("click", function (){
    offcanvasNavbar.forEach(function(span){
        span.classList.toggle("show");
    });
   });


