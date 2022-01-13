import { form as triangleForm } from './triangle.js';
//import { swapButton } from "./swap.js";
import { getCookie, /*setCookie, */ deleteCookie } from './utils.js';
import { capitalize } from './capitalize.js';
import { renderEditHtml } from './editHTML.js';

window.addEventListener('DOMContentLoaded', () => {
  const cookieResult = getCookie('result');
  if (typeof cookieResult !== 'undefined') {
    triangleForm.style.display = 'none';
    alert(cookieResult);
    deleteCookie('result');
    alert('Cookies cleared');
    triangleForm.reset();
    triangleForm.style.display = 'initial';
  }
});
capitalize();
renderEditHtml();

//const squareResultPlaceholder =
// document.getElementById("section__square-result");

//const PENTAGON_SIDE = 5;

/**
 *
 * @param {Number} R
 */
//function calculateSquare(R) {
//let square = 0;

//return square;
//}

//const square = calculateSquare(PENTAGON_SIDE);
// squareResultPlaceholder.textContent = square.toString();
