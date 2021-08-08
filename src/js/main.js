const btn = document.querySelector('.burger-btn'),
    header = document.querySelector('.header');
btn.addEventListener('click', function () {
    header.classList.toggle('header--active')
    if (header.classList.contains('header--active')) {
        hideScroll();
    } else {
        showScroll();
    }
});


const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;
    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    document.getElementById('header').style.paddingRight = scrollWidth;
};

const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    document.getElementById('header').style.paddingRight = '';
};

const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const ScrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return ScrollBarWidth;
};

// === TABS ===

const tabs = document.querySelectorAll('.tabs');

function tabCLick(wrapper) {
    wrapper.forEach(function (box) {
        const tabsItem = box.querySelectorAll('.tabs-triggers__item');
        const itemContent = box.querySelectorAll('.tabs-content__item');

        tabsItem.forEach(onTabClick);

        function onTabClick(item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                const id = e.target.getAttribute('href').replace('#', '');

                tabsItem.forEach(
                    (child) => child.classList.remove('tabs-triggers__item--active')
                );
                itemContent.forEach(
                    (child) => child.classList.remove('tabs-content__item--active')
                );

                item.classList.add('tabs-triggers__item--active');
                document.getElementById(id).classList.add('tabs-content__item--active');

            });
        };

        tabsItem[0].click();
    });
};

tabCLick(tabs);

// === FILTER ===

// const filterItemContent = document.querySelectorAll('.filter-content__item');
// const filterItem = document.querySelectorAll('.filter-item');

// document.querySelector('.filter-items').addEventListener('click', event => {
//     if (event.target.tagName !== 'LI') return false;

//     filterItem.forEach(
//         (childe) => childe.classList.remove('filter-item--active')    
//     );

//     event.target.classList.add('filter-item--active');

//     let filterClass = event.target.dataset['filter'];


//     filterItemContent.forEach(elem => {
//         elem.classList.remove('hide')
//         if (elem.classList.contains(filterClass) && filterClass !== 'all') {
//             elem.classList.add('hide')
//         }
//     });

// })

// === MIXTUP ==

// let mixer = mixitup('.filter-content');

// const filterItem = document.querySelectorAll('.filter-item');

// filterItem.forEach(function(item) {
//     item.addEventListener('click', function() {
//         filterItem.forEach(
//             (child) => child.classList.remove('filter-item--active')
//         );
//         item.classList.add('filter-item--active');
//     });
//     filterItem[0].click();
// });

// === SLIDER ===

const mySwiper = new Swiper('.reviews-slider', {
    slideClass: 'reviews-item',
    wrapperClass: 'reviews-items',

    slidesPerView: 'auto',
    centeredSlides: true,
    simulateTouch: false,
    spaceBetween: 160,

    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    speed: 1500,

    breakpoints: {
        1000: {
            simulateTouch: true
        }
    }
});


const swiperSlider = new Swiper(".showroom-container", {
    slideActiveClass: 'showroom-item--active',

    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 58,
    slideToClickedSlide: true,

    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    // speed: 1500,

    breakpoints: {
        320: {
            slidesPerView: 1,
            speed: 1100,
        },
        1000: {
            slidesPerView: 3,
            speed: 1500,
        },
    }
});

function mobileSlider(container, width) {
    const startSlider = document.querySelector(container);

    let swiperStart;

    function mobileSwiper() {
        if (window.innerWidth <= width && startSlider.dataset.mobile == 'false') {
            swiperStart = new Swiper(startSlider, {
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 50,
                pagination: {
                    el: '.slider-pagination',
                    clickable: true,
                },
                speed: 1000,
            });
            startSlider.dataset.mobile = 'true';
        };
        if (window.innerWidth > width) {
            startSlider.dataset.mobile = 'false';
            if (startSlider.classList.contains('swiper-container-initialized')) {
                swiperStart.destroy();
            }
        };
    }

    mobileSwiper();

    window.addEventListener('resize', () => {
        mobileSwiper();
    })
}

mobileSlider('.exhibition-slider', 900);

mobileSlider('.designer-content', 1060);























// const subTabs = document.querySelectorAll('.subtabs');

// SubTabCLick(subTabs);

// function SubTabCLick (wrapper) {
//     wrapper.forEach(function (box) {
//         const item = box.querySelectorAll('.subtabs-triggers__item');
//         const itemContent = box.querySelectorAll('.subtabs-content__item');

//         item.forEach(onTabClick);

//         function onTabClick(item) {
//             item.addEventListener('click', function (e) {
//             e.preventDefault();

//             const id = e.target.getAttribute('href').replace('#', '');

//             box.querySelectorAll('.subtabs-triggers__item').forEach(
//                 (child) => child.classList.remove('subtabs-triggers__item--active')
//             );
//             box.querySelectorAll('.subtabs-content__item').forEach(
//                 (child) => child.classList.remove('subtabs-content__item--active')
//             );

//             item.classList.add('subtabs-triggers__item--active');
//             document.getElementById(id).classList.add('subtabs-content__item--active');

//             console.log(item);
//             });
//         };
//     });
// };



