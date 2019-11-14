document.addEventListener('DOMContentLoaded', () => {
  const node = window.searchDOMTreeForText("This text should be black, but it's blue.");
  const passed = window.compareCSSProperty(
    node,
    'color',
    ['black', '#000', '#000000', 'rgb(0, 0, 0)']
  );
  
  if (passed) window.dropConfetti()
});