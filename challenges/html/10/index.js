document.addEventListener('DOMContentLoaded', () => {
  const node = window.searchDOMTreeForText("This text is a little too close for comfort, could you give me a margin on top?");
  let margin = window.returnCSSProperty(
    node,
    'margin-top'
  );
  
  margin = +margin.replace("px", "");
  
  const passed = margin > 1;
  
  if (passed) window.dropConfetti()
});