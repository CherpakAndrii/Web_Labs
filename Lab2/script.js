import { form as triangleForm } from './triangle.js';
//import { swapButton } from "./swap.js";
import { getCookie, /*setCookie, */ deleteCookie } from './utils.js';
import { capitalize } from './capitalize.js';
import { renderEditHtml } from './editHTML.js';
import { getPentagonSquare } from './pentagonSquare.js';

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
getPentagonSquare(5);
