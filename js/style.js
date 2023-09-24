const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const navbar = document.querySelector("#navbar");

openMenu.addEventListener("click", () => {
    navbar.classList.add("active");
})

closeMenu.addEventListener("click", () => {

    navbar.classList.add("closing");
    setTimeout(() => {
        navbar.classList.remove("active");
        navbar.classList.remove("closing");
    }, 400);
})


