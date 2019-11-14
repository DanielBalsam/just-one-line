document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('.challenge-text');
  if (node.tagName !== 'P') return
  let fontSize = window.returnCSSProperty(
    node,
    'font-size'
  );
  fontSize = +fontSize.replace("px", "");
  
  const passed = fontSize > 18; 
  
  if (passed) window.dropConfetti()
});