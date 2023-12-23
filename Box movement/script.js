window.addEventListener('mousemove', function(i){
    let box = document.querySelector('#box').getBoundingClientRect(); //this will later help in keeping the box in bound with the visible part of the screen upon moving it
    let restrictedMovementOfBox = gsap.utils.mapRange(0, window.innerWidth, 200 + box.width/2, window.innerWidth-(200 + box.width/2), i.clientX); //this helps in converting the whole clientX for box, diff to that of cursore
    gsap.to("#box", { //this is all about movement of the box
        left: restrictedMovementOfBox + 'px',
        ease: Power3
    })
});