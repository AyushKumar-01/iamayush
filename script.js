var typed = new Typed('#element', {
    strings: ['Web Developer', 'With Experience and knowledge Of technologies like,', 'Python, NodeJS, MongoDB and much more..', "Let's Get your work done!"],
    typeSpeed: 50,
    backspeed: 20,
    onComplete: function (self) {
        var cursor = document.querySelector('.typed-cursor');
        cursor.style.display = 'inline-block';
        setTimeout(function () {
            self.reset();
        }, 2000); // Wait for 2 seconds and reset Typed.js
    }
});

var navbar = document.querySelector(".navbar");
var topBanner = document.querySelector(".top-banner");

var isNavbarFixed = false;

// Function to toggle the class for the navbar
function toggleNavbar() {
    if (window.pageYOffset >= topBanner.offsetHeight && !isNavbarFixed) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        isNavbarFixed = true;
    } else if (window.pageYOffset < topBanner.offsetHeight && isNavbarFixed) {
        navbar.style.position = "relative";
        isNavbarFixed = false;
    }
}

window.addEventListener("scroll", toggleNavbar);

const navigation = document.querySelector('.navbar');

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty (
    "--scroll-padding",navigationHeight + "px"
);

// Certificate dropdown button 

const certificates = document.getElementById('certificates');
const certify = document.getElementById('certify-btn');
const downArrow = document.getElementById('down-arrow-icon');

certify.addEventListener('click', () => {
    if (downArrow.classList.contains("fa-angle-down")) {
        certificates.style.maxHeight = "1000px"; // Adjust this value to your content's height
        downArrow.classList.remove('fa-angle-down');
        downArrow.classList.add('fa-angle-up');
    } else {
        downArrow.style.transform = "rotate(0deg)"; // Rotate the arrow icon downwards
        downArrow.classList.add('fa-angle-down');
        downArrow.classList.remove('fa-angle-up');
        certificates.style.maxHeight = "0";
    }
});

// Hamburger menu 

const hamburger = document.getElementById('openMenu-icon');
const dropDown = document.querySelector('.hamburger-dropdown-list');
const dropList = document.getElementById('dropList');

hamburger.addEventListener('click', () => {
    if (dropList.style.left == "0px") {
        dropList.style.left = "-400px";
        hamburger.classList.remove('closeMenu');
    }
    else {
        dropList.style.left = "0px";
        hamburger.classList.add('closeMenu');
    }
})

function hamHref (){
    if (dropList.style.left == "0px") {
        dropList.style.left = "-400px";
        hamburger.classList.remove('closeMenu');
    }
    else {
        dropList.style.left = "0px";
        hamburger.classList.add('closeMenu');
    };
};
function login() {
    window.location.assign('Login.html')
}
