window.addEventListener('scroll', function() {
    const element = document.querySelector('.animate-outside-container');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const offset = element.getBoundingClientRect().bottom + scrollPosition;
    const translateXValue = (offset + scrollPosition) / 20;

    if (scrollPosition > offset - windowHeight) {
        element.style.transform = `translateX(-${translateXValue}px)`;
    } else {
        element.style.transform = 'translateX(0px)';
    }
});
window.addEventListener('scroll', function() {
    const aboutCard = document.querySelector('.about-card');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const aboutOffset = aboutCard.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition > aboutOffset - windowHeight) {
        aboutCard.style.transform = 'translateY(0)';
    } else {
        aboutCard.style.transform = 'translateY(100%)';
    }
});
