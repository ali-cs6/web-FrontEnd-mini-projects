 
// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
document.querySelector('#center').addEventListener("mousemove",
    throttleFunction((details) => {
        let div = document.createElement("div");
        div.classList.add('imgdiv');
        div.style.left = details.clientX+ 'px';
        div.style.top = details.clientY + 'px';

        let img = document.createElement("img");
        img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1702273505247-93668f78c301?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" )
        div.appendChild(img);

        gsap.to(img, {
            y: "0",
            ease:Power1,
            duration: 0.6
        })
        gsap.to(img, {
            y: "100%",
            ease:Power2,
            delay: 0.7
            
        })

        document.body.appendChild(div);
        setTimeout(function(){
            div.remove();
        }, 1000)
    }, 500));