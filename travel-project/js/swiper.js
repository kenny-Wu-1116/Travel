var swiper = new Swiper(".bgSwiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".about-slider", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".package-slider", {
    autoHeight: true,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    coverflowEffect: {
        rotate: 30,
        stretch: -30,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        678: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper('.review-slider', {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});