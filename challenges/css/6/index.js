document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('.challenge-text');
  const passed = window.compareCSSProperty(
    node,
    'display',
    ['inline-block', 'inline', 'inline-flex']
  );
  
  if (passed) window.dropConfetti()
});