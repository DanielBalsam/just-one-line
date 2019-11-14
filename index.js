document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#confetti-drop');
  button.addEventListener('click', window.confetti.start);
});