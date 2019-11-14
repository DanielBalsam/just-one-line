window.dropConfetti = () => {
  window.isValidHTML().then(valid => {
    if (!valid) return;
    window.confetti.start();

    window.setTimeout(() => {
      window.confetti.stop()
    }, 4000);
  });
}

window.isValidHTML = () => {
  // NOTE: gotta do this because chrome autocorrects HTML
  return window.axios.get(window.location.href).then(page => {
    const doc = document.createElement('div');
    doc.innerHTML = page.data;
    
    const valid = page.data.replace(
      /\s/g,''
    ).replace("<body>", "").replace("</body>", "").replace("<head>", "").replace("</head>", "").indexOf(
      doc.innerHTML.replace(/\s/g,'')
    ) > -1;

    return Promise.resolve(valid);
  });
}

window.searchDOMTreeForText = (searchText, node) => {
  if (!node) node = document.body;
  
  for (let i=0; i < node.children.length; i++) {
    const child = node.children[i];
    
    if (child.innerText === searchText) {
      return child;
    }
    
    const foundNode = window.searchDOMTreeForText(searchText, child);
    
    if (foundNode) return foundNode
  }
  
  return null;
}

window.returnCSSProperty = (node, property) => {
  const computedStyles = window.getComputedStyle(node);
  return computedStyles[property];
}

window.compareCSSProperty = (node, property, values) => {
  const computedValue = window.returnCSSProperty(node, property);
  
  return values.includes(computedValue);
}

// add back button if we need to
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.indexOf('challenges') === -1) return;
  
  const link = document.createElement('a');
  link.href = "/";
  link.innerText = "← Back to home";
  link.classList.add('back-text');
  
  document.body.appendChild(link);
})