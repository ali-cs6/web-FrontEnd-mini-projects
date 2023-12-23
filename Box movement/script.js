window.addEventListener('mousemove', function(i){
    gsap.to("#box", {
        left: i.clientX + 'px',
        ease: Power3
    })
});