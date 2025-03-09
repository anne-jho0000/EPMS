const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const loginTriggers = document.querySelectorAll(".login-trigger");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup when clicking Admin or Employee
loginTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.add("show-popup");
    });
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
