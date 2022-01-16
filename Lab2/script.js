import { form as triangleForm } from './triangle.js';
import { swapTexts } from './swap.js';
import { getCookie, /*setCookie, */ deleteCookie } from './utils.js';
import { capitalize } from './capitalize.js';
import { renderEditHtml } from './editHTML.js';
import { getPentagonSquare } from './pentagonSquare.js';

window.addEventListener('DOMContentLoaded', () => {
  const cookieResult = getCookie('result');
  if (typeof cookieResult !== 'undefined') {
    new Promise(resolve => {
      triangleForm.style.display = 'none';
      resolve()
    })
      .then(() => {
        const res = confirm(`Cookies: ${cookieResult}. If you press "OK" button they will be cleared`);
        if (res) {
          deleteCookie('result');
          setTimeout(() => {
            triangleForm.style.display = 'initial';
          }, 1000)
        }

      })
  }
});
capitalize();
renderEditHtml();
getPentagonSquare(5);

const swapButton = document.getElementById('swap-button');
swapButton.addEventListener('click', ev => {
  ev.preventDefault();
  swapTexts();
});
