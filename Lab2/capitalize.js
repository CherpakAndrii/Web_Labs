export const capitalize = () => {
  const checkbox = document.getElementById('capitalize-checkbox');
  const sidebar = document.getElementById('right-side-bar');
  const shouldCapitalize = localStorage.getItem('shouldCapitalize');
  if (shouldCapitalize === 'true') {
    sidebar.classList.add('capitalize');
  } else {
    sidebar.classList.remove('capitalize');
  }

  checkbox.addEventListener('blur', event => {
    if (event.target.checked) {
      sidebar.classList.add('capitalize');
      localStorage.setItem('shouldCapitalize', 'true');
    } else {
      sidebar.classList.remove('capitalize');
      localStorage.setItem('shouldCapitalize', 'false');
    }
  });
};
