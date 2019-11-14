document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('input').addEventListener('input', ($e) => {
    if ($e.target.value === 'hello') window.dropConfetti();
  })
})


