export const swapButton = document.getElementById('swap-button');
swapButton.addEventListener('click', ev => {
  ev.preventDefault();
  swapTexts();
});

function swapTexts() {
  const headerText = document.getElementById('header__text');
  const footerText = document.getElementById('footer__text');
  const temporary = headerText.textContent;
  headerText.textContent = footerText.textContent;
  footerText.textContent = temporary;
}
