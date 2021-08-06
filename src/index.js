import './style.css';

const btnRefresh = document.querySelector('.btn-refresh');
const btnSubmit = document.querySelector('.btn-submit');

btnRefresh.addEventListener('click', () => {
  renderList();
});

btnSubmit.addEventListener('click', () => {
  postHandler();
});

window.addEventListener('load', () => {
  renderList();
});

document.body.appendChild(component());