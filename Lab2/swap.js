export function swapTexts() {
  const headerText = document.getElementById('header__text');
  const footerText = document.getElementById('footer__text');
  const temporary = headerText.innerHTML;
  headerText.innerHTML = footerText.innerHTML;
  footerText.innerHTML = temporary;
}
