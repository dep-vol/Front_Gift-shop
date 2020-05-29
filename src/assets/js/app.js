window.addEventListener('load', function() {
    new Glider(document.querySelector('.new__slider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.products__left--new',
            next: '.products__right--new'
        },
        scrollLock: true,
        duration: 1.5,
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 600,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    });
    new Glider(document.querySelector('.featured__slider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.products__left--featured',
            next: '.products__right--featured'
        },
        scrollLock: true,
        duration: 1.5,
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 500,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    itemWidth: 200,
                    duration: 0.25
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    itemWidth: 200,
                    duration: 0.25
                }
            }
        ]
    });
    document.querySelector('.new__slider').addEventListener('dragstart', (e) => e.preventDefault());

    document.querySelector('.header__burger').addEventListener('click', (e) => {
        document.querySelector('.header__categories').classList.toggle('hidden');
    });


});