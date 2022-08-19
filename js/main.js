var elOpenNavbarBtn = document.querySelector(".js-open-navbar-btn");

elOpenNavbarBtn.addEventListener("click", function(){
    elOpenNavbarBtn.closest(".site-header").classList.toggle("navbar-open");
});