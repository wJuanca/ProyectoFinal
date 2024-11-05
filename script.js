document.getElementById("captchaForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el envío del formulario
    
    const recaptchaResponse = grecaptcha.getResponse();
    const messageElement = document.getElementById("captcha-message");
    
    if (recaptchaResponse.length === 0) {
      messageElement.textContent = "Por favor, verifica que eres un humano.";
    } else {
      messageElement.textContent = ""; // Limpiar mensajes anteriores
      document.getElementById("captcha-section").style.display = "none"; // Ocultar la sección del CAPTCHA
      document.getElementById("protected-content").style.display = "block"; // Mostrar contenido protegido
    }
  });
  