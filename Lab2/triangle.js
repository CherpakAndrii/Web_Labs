export const form = document.getElementById('check-triangle');

form.addEventListener('submit', event => {
  event.preventDefault();
  let formData = new FormData(event.target);
  formData = Object.fromEntries(formData.entries());
  const side1 = parseInt(formData.side1);
  const side2 = parseInt(formData.side2);
  const side3 = parseInt(formData.side3);
  let result = 'a triangle can be constructed';
  if (
    sumIsLess(side1, side2, side3) ||
    sumIsLess(side2, side3, side1) ||
    sumIsLess(side3, side1, side2)
  ) {
    result = 'a triangle cannot be constructed';
  }

  alert(result);
  document.cookie = `result=${result}; path=/; expires=01-01-2050`;
  console.log(document.cookie);
  event.target.reset()
});

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 */
function sumIsLess(a, b, c) {
  return a + b < c;
}
