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
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 6);
    }
    e.target.value = value;
  }



 //Validacion para que en el input de Cvc no pueda poner mas de 4 digitos y tampoco letras
  function maskCardCvc(e) {
    e.target.type = 'password';
  }

function validateCvcLength(e) {
  e.target.value = e.target.value.replace(/\D/g, ''); 

  if (e.target.value.length > 4) {
    e.target.value = e.target.value.slice(0, 4);
  }
}

cardCvcInput.addEventListener('input', validateCvcLength);






  // Validar que en la seccion de tarjeta solo podremos poner 18 numero
  const cardNumberInput = document.getElementById('card-number');
  function limitCardNumberLength(e) {
    if (e.target.value.length > 18) {
  e.target.value = e.target.value.slice(0, 18);
}
  }
cardNumberInput.addEventListener('input', limitCardNumberLength);

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
