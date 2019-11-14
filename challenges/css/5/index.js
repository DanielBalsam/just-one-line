document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('img');
  const passed = node.clientWidth < 200;
  
  if (passed) window.dropConfetti()
});