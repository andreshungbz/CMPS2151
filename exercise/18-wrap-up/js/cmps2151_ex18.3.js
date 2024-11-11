/* add code after this comment */

window.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');

  for (const panel of panels) {
    panel.addEventListener('click', () => {
      panel.classList.toggle('open');
    });
  }
});
