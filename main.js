document.addEventListener('DOMContentLoaded', () => {

  // ===== VARIABLES Y ELEMENTOS =====
  const donateButton = document.getElementById('donate-button');
  const donationModal = document.getElementById('donation-modal');
  const closeButton = document.querySelector('.close-button');
  const cancelButton = document.getElementById('cancel-button');
  const donationForm = document.getElementById('donation-form');
  const presetButtons = document.querySelectorAll('.preset');
  const donationAmountInput = document.getElementById('donation-amount');
  const cardNumberInput = document.getElementById('card-number');
  const cardExpiryInput = document.getElementById('card-expiry');
  const cardCvcInput = document.getElementById('card-cvc');
  const cardNumberError = document.createElement('span');
  cardNumberError.style.color = 'red';
  cardNumberError.style.display = 'none';
  cardNumberError.textContent = 'Número de tarjeta inválido.';
  cardNumberInput.parentNode.insertBefore(cardNumberError, cardNumberInput.nextSibling);

  // ===== HABILITAR/DESACTIVAR BOTÓN DONAR =====
  function toggleDonateButton() {
    donateButton.disabled = !donationAmountInput.value.trim();
  }

  
  // ===== VALIDACIÓN DEL NÚMERO DE TARJETA =====
  function validateCardNumber() {
    const cardNumber = cardNumberInput.value.replace(/\D/g, '');
    cardNumberInput.value = cardNumber.slice(0, 18); 

    // Mostrar mensaje
    if (cardNumber.length === 18) {
      cardNumberError.style.display = 'none';
    } else {
      cardNumberError.style.display = 'block';
    }
  }

  cardNumberInput.addEventListener('input', validateCardNumber); // Validar en cada entrada

  // ===== FORMATO DE FECHA DE EXPIRACIÓN DE LA TARJETA (MM/YY) =====
  function formatCardExpiry(e) {
    let value = e.target.value.replace(/\D/g, ''); // Solo números
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4); // Formato MM/YY
    }
    e.target.value = value;
  }
  cardExpiryInput.addEventListener('input', formatCardExpiry); // Formateo en cada entrada

  // ===== VALIDACIÓN Y MÁSCARA PARA EL CVC =====
  function maskCardCvc(e) {
    e.target.type = 'password'; // Tipo password para ocultar el CVC
  }
  cardCvcInput.addEventListener('focus', maskCardCvc); // Aplicar máscara al enfocar

  function validateCvcLength(e) {
    e.target.value = e.target.value.replace(/\D/g, ''); // Solo números
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4); // Limitar a 4 dígitos
    }
  }
  cardCvcInput.addEventListener('input', validateCvcLength); // Validar en cada entrada

  // ===== EVENTOS DE BOTONES (MODAL DE DONACIÓN) =====
  donateButton.addEventListener('click', () => {
    if (donationAmountInput.value.trim()) {
      donationModal.style.display = 'block'; // Mostrar el modal si hay una cantidad ingresada
    }
  });

  closeButton.addEventListener('click', () => {
    donationModal.style.display = 'none'; // Cerrar el modal con el botón de cierre
  });

  cancelButton.addEventListener('click', () => {
    donationModal.style.display = 'none'; // Cerrar el modal con el botón de cancelar
  });

  window.addEventListener('click', (event) => {
    if (event.target === donationModal) {
      donationModal.style.display = 'none'; // Cerrar el modal al hacer clic fuera de él
    }
  });

  // ===== SUBMIT DEL FORMULARIO DE DONACIÓN =====
  donationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateCardNumber()) { // Verifica que el número de tarjeta tenga 18 dígitos
      alert('Por favor, ingresa un número de tarjeta válido de 18 dígitos.');
      return; // Si no es válido, no enviar el formulario
    }

    alert('Gracias por su donación'); // Mensaje de confirmación

    // Limpiar el formulario después de la donación
    donationAmountInput.value = '';
    cardNumberInput.value = '';
    cardExpiryInput.value = '';
    cardCvcInput.value = '';
    toggleDonateButton(); // Desactiva el botón hasta que se ingrese una cantidad
    donationModal.style.display = 'none'; // Cierra el modal
  });

  // ===== EVENTOS PARA LOS BOTONES DE CANTIDADES PREDEFINIDAS =====
  presetButtons.forEach(button => {
    button.addEventListener('click', () => {
      donationAmountInput.value = button.getAttribute('data-amount');
      toggleDonateButton(); // Activa el botón de donar si se selecciona una cantidad
    });
  });

  // ===== INICIALIZAR EL BOTÓN DONAR =====
  toggleDonateButton(); // Desactiva el botón de donar hasta que haya una cantidad ingresada

});
