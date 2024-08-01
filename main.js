document.addEventListener('DOMContentLoaded', () => {
  const donateButton = document.getElementById('donate-button');
  const donationModal = document.getElementById('donation-modal');
  const closeButton = document.querySelector('.close-button');
  const cancelButton = document.getElementById('cancel-button');
  const donationForm = document.getElementById('donation-form');
  const presetButtons = document.querySelectorAll('.preset');
  const donationAmountInput = document.getElementById('donation-amount');
  const cardExpiryInput = document.getElementById('card-expiry');
  const cardCvcInput = document.getElementById('card-cvc');

  function toggleDonateButton() {
    donateButton.disabled = !donationAmountInput.value.trim();
  }

  function formatCardExpiry(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 6); // Format as MM/YY
    }
    e.target.value = value;
  }

  function maskCardCvc(e) {
    e.target.type = 'password'; // Set input type to password to hide CVC
  }

  // Initialize
  toggleDonateButton();
  cardCvcInput.addEventListener('focus', maskCardCvc); // Mask CVC on focus

  // Add event listener for donation amount input
  donationAmountInput.addEventListener('input', toggleDonateButton);

  donateButton.addEventListener('click', () => {
    if (donationAmountInput.value.trim()) {
      donationModal.style.display = 'block';
    }
  });

  closeButton.addEventListener('click', () => {
    donationModal.style.display = 'none';
  });

  cancelButton.addEventListener('click', () => {
    donationModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === donationModal) {
      donationModal.style.display = 'none';
    }
  });

  donationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Gracias por su donación');
    
    // Clear donation form
    donationAmountInput.value = '';
    document.getElementById('card-number').value = '';
    cardExpiryInput.value = '';
    cardCvcInput.value = '';
    
    // Disable donate button until a donation amount is entered
    toggleDonateButton();
    
    // Hide the modal
    donationModal.style.display = 'none';
  });

  presetButtons.forEach(button => {
    button.addEventListener('click', () => {
      donationAmountInput.value = button.getAttribute('data-amount');
      toggleDonateButton(); // Enable donate button when a preset amount is selected
    });
  });

  // Add event listener for card expiry input
  cardExpiryInput.addEventListener('input', formatCardExpiry);
});
