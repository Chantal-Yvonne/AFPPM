
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





    // ========== FAQ ACCORDION ==========
   $(function () {
  $(".accordion").accordion({ 
    collapsible: true,
    heightStyle: "content",
    active: false,
    icons: {
      header: "ui-icon-plus",
      activeHeader: "ui-icon-minus"
    }
  });
});
    