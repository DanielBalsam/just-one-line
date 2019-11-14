document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('.flex');
  const passed = window.compareCSSProperty(
    node,
    'display',
    ['flex', 'inline-flex']
  );
    
  if (passed) window.dropConfetti()
});