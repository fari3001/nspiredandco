// document.addEventListener('DOMContentLoaded', () => {
//   const checkbox = document.querySelector('input[name="acknowledgment"]');
//   const sendBtn = document.querySelector('button[type="submit"]');

//  if (!checkbox || !sendBtn) {
//     console.error('Checkbox or button not found in the DOM');
//     return;
//   }

//   sendBtn.disabled = !checkbox.checked;

//   checkbox.addEventListener('change', () => {
//     sendBtn.disabled = !checkbox.checked;
//   });
// });
function initFormControls() {
  const checkbox = document.querySelector('input[name="acknowledgment"]');
  const sendBtn = document.querySelector('#sendBtn');

  if (!checkbox || !sendBtn) return false; // not ready yet

  // Initial state
  sendBtn.disabled = !checkbox.checked;

  // Event listener
  checkbox.addEventListener('change', () => {
    sendBtn.disabled = !checkbox.checked;
  });

  return true;
}

// Try immediately in case the form is already present
if (!initFormControls()) {
  // If not, watch for when it gets added
  const observer = new MutationObserver(() => {
    if (initFormControls()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
