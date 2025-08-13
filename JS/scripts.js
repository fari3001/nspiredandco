document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('input[name="acknowledgment"]');
  const sendBtn = document.querySelector('button[type="submit"]');

  sendBtn.disabled = !checkbox.checked;

  checkbox.addEventListener('change', () => {
    sendBtn.disabled = !checkbox.checked;
  });
});
