/**
 *
 * @param {Number}a
 */
export function getPentagonSquare(a) {
  const square = calculateSquare(a);
  let resultHolder = document.getElementById('article');
  resultHolder.textContent =
    resultHolder.textContent +
    `Pentagon square: ${Math.round(square * 100) / 100}`;
}
/**
 *
 * @param {Number} a
 */
function calculateSquare(a) {
  return (a * a * Math.sqrt(25 + 10 * Math.sqrt(5))) / 4;
}
