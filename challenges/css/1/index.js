document.addEventListener('DOMContentLoaded', () => {
  const boldNode = window.searchDOMTreeForText('this text bold.');
  if (boldNode.tagName === 'STRONG') return
  const passed = window.compareCSSProperty(
    boldNode,
    'font-weight',
    ['bold', 'bolder', '600', '700']
  );
  
  if (passed) window.dropConfetti()
});