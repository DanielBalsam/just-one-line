document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select');
  
  select.addEventListener('change', () => {
    if (select.value === '7') window.dropConfetti();
  })
})


