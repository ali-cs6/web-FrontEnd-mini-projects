const form = document.querySelector('form');
form.addEventListener('submit', function (i) {
  i.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is ${bmi} which is in UnderWeight category</span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi} which is in OverWeight Category</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is ${bmi} which is in Normal range</span>`;
    }
  }
});
