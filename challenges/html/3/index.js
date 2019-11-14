document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('img');
  
  if (node.src.indexOf('https://cdn.glitch.com/06253032-d099-4b63-9eb0-b376c1dcdaff%2Fsmile.png') > -1) window.dropConfetti();
});