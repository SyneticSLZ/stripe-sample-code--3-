function splitscroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '.about-pages',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    .addIndicators()
    .addTo(controller);
}

splitscroll();