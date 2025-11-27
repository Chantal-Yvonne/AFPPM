
// HAMBURGER
const navMenu = document.getElementById("navMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navLinks = navMenu.getElementsByTagName("a");

openMenu.addEventListener("click", function () {
  navMenu.classList.add("active");
  openMenu.classList.add("hidden");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", function () {
  navMenu.classList.remove("active");
  openMenu.classList.remove("hidden");
  document.body.style.overflow = "auto";
});

// close menu when clicking any link
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navMenu.classList.remove("active");
    openMenu.classList.remove("hidden");
    document.body.style.overflow = "auto";
  });
}

const nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
  if (window.scrollY > 25) {  // adjust scroll value as needed
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// SLIDER
$(document).ready(function(){
  $('.testimonial-cards').slick({
    arrows: false, // hide default arrows
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
  });

  $('.custom-prev').click(function() {
    $('.testimonial-cards').slick('slickPrev');
  });
  
  $('.custom-next').click(function() {
    $('.testimonial-cards').slick('slickNext');
  });



    // ========== FAQ ACCORDION ==========
    $(function() {
      $("#accordion").accordion({
        collapsible: true,
        active: false,
      });
    });
      

});
  