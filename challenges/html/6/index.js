document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector("a:not(.back-text)")
  
  const validSolutions = [
    'https://just-one-line.glitch.me/',
    'https://just-one-line.glitch.me/index.html'
  ]
  if (validSolutions.includes(node.href)) window.dropConfetti();
});