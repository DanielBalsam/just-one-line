document.addEventListener('DOMContentLoaded', () => {
  const node = window.searchDOMTreeForText('Gimme confetti');
  if (node) window.dropConfetti();
});