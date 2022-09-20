var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  // slidesPerGroup: 3,

  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// TAB

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}
document.getElementById("default").click();



// Scroll

const showOnPx = 100;
const backToTopButton = document.querySelector(".scrollUp");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});


// Counter

$(document).ready(function() {

  var counters = $(".cont");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    });
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

function show(){
  const para=document.getElementById("serviceclick");
  if(para.style.display=="none"){
    para.style.display="block";
  }
  else{
    para.style.display="none";
  }
}

function search1(){
  const s=document.getElementById("searchbox");
  if(s.style.display=="none"){
    s.style.display="block";
  }
  else{
    s.style.display="none";
  }
}


