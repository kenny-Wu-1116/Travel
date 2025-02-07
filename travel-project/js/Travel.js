const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeBtn = sideMenu.querySelector('.close-btn');
const topButton = document.getElementById('topButton');

window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('show');
    } else {
        header.classList.remove('show');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 80;
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.getAttribute("data-animation") || "visible";
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = [
        { selector: ".about-content", animation: "visible" },
        { selector: ".about-image", animation: "visible" },
        { selector: ".destination-card", animation: "visible" },
        { selector: ".destination-content", animation: "visible" },
        { selector: ".package-content", animation: "visible" },
        { selector: ".package .package-slider", animation: "visible" },
        { selector: ".gallery-content", animation: "visible" },
        { selector: ".gallery-card", animation: "visible" },
        { selector: ".review-content", animation: "visible" },
        { selector: ".review .swiper-wrapper", animation: "visible" },
    ];

    elementsToAnimate.forEach(({ selector, animation }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.setAttribute("data-animation", animation);
            observer.observe(element);
        });
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topButton.classList.add('show');
    } else {
        topButton.classList.remove('show');
    }
});

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});