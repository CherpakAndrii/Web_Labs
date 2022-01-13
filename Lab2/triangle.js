export const form = document.getElementById('check-triangle');

form.addEventListener('submit', event => {
  event.preventDefault();
  let formData = new FormData(event.target);
  formData = Object.fromEntries(formData.entries());
  const side1 = formData.get('side1');
  const side2 = formData.get('side2');
  const side3 = formData.get('side3');
  const isBiggerThan3 = side1 + side2 > side3;
  const isBiggerThan2 = side3 + side1 > side2;
  const isBiggerThan1 = side3 + side2 > side1;
  let result = 'valid';
  if (isBiggerThan3 || isBiggerThan2 || isBiggerThan1) {
    result = 'invalid';
  }

  alert(result);
  document.cookie = `result=${result}; path=/; expires=01-01-2050`;
  console.log(document.cookie);
});
