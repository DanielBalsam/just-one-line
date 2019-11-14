document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('.flex__cell');
  const flexGrow = +window.returnCSSProperty(
    node,
    'flex-grow'
  );
  
  const passed = flexGrow >= 1;
  
  if (passed) window.dropConfetti()
});