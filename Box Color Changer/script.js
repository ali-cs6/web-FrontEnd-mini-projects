let box = document.querySelector('#center'); //selecting target
box.addEventListener('mousemove', function(details){ //while doing mousemove this function runs
    let boxLocation = box.getBoundingClientRect(); //this give a lot of detail about the target like, right/left position
    let insideBox = details.clientX - boxLocation.left; //clientX is distance from the left end to where we mousemove, and removing boxlocation.left gives us value only inside of the box

    if(insideBox < boxLocation.width/2){ //if for left-side of box
        const redColor = gsap.utils.mapRange(0, boxLocation.width/2, 255, 0, insideBox); //convert one range values to another, mapRange(inMin, inMax, outMin, outMax, valueToMap), gsap is a library
        gsap.to(box, {  //here we do stuff via gsap, inside to(target, {properties/changes via object})
           backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4 //useful for smoothness
        })
    } else{ //else for right-side of box
        const blueColor = gsap.utils.mapRange(boxLocation.width/2, boxLocation.width, 0, 255, insideBox);
        gsap.to(box, {
           backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        })
    }
})
// white color again by lefting the box
box.addEventListener('mouseleave', function(){
    gsap.to(box, {
        backgroundColor: 'white',
    })
})

