document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('input[name="acknowledgment"]');
  const sendBtn = document.querySelector('button[type="submit"]');

 if (!checkbox || !sendBtn) {
    console.error('Checkbox or button not found in the DOM');
    return;
  }

  sendBtn.disabled = !checkbox.checked;

  checkbox.addEventListener('change', () => {
    sendBtn.disabled = !checkbox.checked;
  });
});
