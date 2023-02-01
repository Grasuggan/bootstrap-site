var body = document.body;

/*==========================
    #Mobile menu
 ===========================*/
var hamburger = document.querySelector(".navbar-toggler");
var offcanvasNavbar = hamburger.querySelectorAll("span");

hamburger.addEventListener("click", function () {
  offcanvasNavbar.forEach(function (span) {
    span.classList.toggle("show");
  });
});

/*======================================
      #Set .scroll class on scroll
    ======================================*/
//Add the .scroll class to body when passing the io-hook placed over the header
var ioHook = document.querySelector(".io-hook");
if (ioHook) {
  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].boundingClientRect.y < 0) {
      body.classList.add("scroll");
    } else {
      body.classList.remove("scroll");
    }
  });
  observer.observe(ioHook);
}

/*==========================
    #AUTOCPMPLETE SEARCH
 ===========================*/
const autoCompleteJS = new autoComplete({
  placeHolder: "Vad letar du efter?",
  data: {
    src: [
      "Bad & simhall",
      "För anställda",
      "Återvinningscentral",
      "Läsårstider",
      "Arbeta",
      "Kommun & politik",
    ],
  },
  resultItem: {
    tag: "li",
    class: "autoComplete_result",
    element: (item, data) => {
      var nodeItem = `<a href="#">${item.innerText} <i class="bi bi-chevron-right" aria-hidden="true"></i></a>`;
      item.innerHTML = nodeItem;
    },
  },
});

var navsearch = document.querySelectorAll(".input-nav .btn");
navsearch.forEach(function (nav) {
  nav.addEventListener("click", function () {
    var input = nav.closest("#search-autocomplete");
    input.classList.toggle("open-input");
  });
});
