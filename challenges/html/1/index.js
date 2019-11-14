document.addEventListener('DOMContentLoaded', () => {
  const boldNode = window.searchDOMTreeForText('this text bold.');
  const passed = window.compareCSSProperty(
    boldNode,
    'font-weight',
    ['bold', 'bolder', '600', '700']
  );
  
  if (passed) window.dropConfetti()
});