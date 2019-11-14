document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('.challenge-text');
  if (node.tagName === 'I') {
    window.alert('Use CSS please!');
    return;
  }
  const passed = window.compareCSSProperty(
    node,
    'font-style',
    ['italic']
  );
  
  if (passed) window.dropConfetti()
});