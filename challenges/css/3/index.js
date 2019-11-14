document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('.challenge-text');
  const passed = window.compareCSSProperty(
    node,
    'color',
    ['red', '#ff0000', 'rgb(255, 0, 0)']
  );
  
  if (passed) window.dropConfetti()
});