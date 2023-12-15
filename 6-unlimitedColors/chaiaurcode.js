//for generating Random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    //6 times for 6 digits as #123456
    color += hex[Math.floor(Math.random() * 16)]; //here [...] is used as an index nmbr to access string's elements, hex
  }
  return color;
};

const repeat = function () {
  document.body.style.backgroundColor = randomColor();
};
let intervalId; //later helps in clearing interval
document.querySelector('#start').addEventListener('click', function () {
  intervalId = setInterval(repeat, 1000);
});

//stopping interval while clicking on stop button
document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null; //as intervalId is no more in use so clearing it up, good practice
});
