const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (i) {
    console.log(i.target);
    const color = i.target;
    switch (color) {
      case grey:
        body.style.backgroundColor = 'grey';
        break;
      case white:
        body.style.backgroundColor = 'white';
        break;
      case purple:
        body.style.backgroundColor = 'purple';
        break;
      case blue:
        body.style.backgroundColor = 'blue';
        break;
    }
  });
});
