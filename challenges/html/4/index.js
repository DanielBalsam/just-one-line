document.addEventListener('DOMContentLoaded', () => {
  const nodes = document.querySelectorAll('.green-text');
  
  if (nodes.length === 4) window.dropConfetti();
});