var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Java Script For The Scroll Btn


  const showOnPx = 100;
const backToTopButton = document.querySelector(".bottomup");
const scrollContainer = () => document.documentElement || document.body;
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

/*Navigation Class Toggle Script Starts Here */
function heroHeight(){
  let heroHeight=$(".background").outerHeight();
  var header = $(".navigation");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= heroHeight) {
          header.removeClass('navigation').addClass("navigation-toggle");
      } else {
          header.removeClass("navigation-toggle").addClass('navigation');
      }
  });
};
heroHeight();
$(window).resize(function(){
  heroHeight();
});
/*Navigation Class Toggle Script Starts Here */
