window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var logo = document.querySelector(".navbar-logo");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        logo.style.filter = "invert(0%)";
        // console.log(window.scrollY); // vedi console js sul browser, ottimizza le prestazioni
    } else {
        navbar.classList.remove("scrolled");
        logo.style.filter = "invert(100%)";
    }
});

function openPage(pageName) {
    window.open(pageName, "_self");
}
