document.addEventListener('DOMContentLoaded', () => {
  const node = window.searchDOMTreeForText('Excellence in code can come from anyone!');
  
  if (node) window.dropConfetti();
});