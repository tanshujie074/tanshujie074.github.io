const submitButton = document.getElementById('submitButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

submitButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});
