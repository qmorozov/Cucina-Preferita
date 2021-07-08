const btn = document.querySelector('.burger-btn'),
    header = document.querySelector('.header');
btn.addEventListener('click', function() {
    header.classList.toggle('header--active')
    if (header.classList.contains('header--active')) {
        hideScroll();
    } else {
        showScroll();
    }
})


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
