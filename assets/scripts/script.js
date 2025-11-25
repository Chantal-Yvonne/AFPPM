
// HAMBURGER
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");

// Open menu
menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

// Close menu with "X"
closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

// Close menu when clicking a link
const navLinks = mobileNav.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});



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
  