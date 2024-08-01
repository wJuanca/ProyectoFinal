document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 7000; // 7 segundos

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Incrementa el índice o reinicia a 0 si llega al final
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const carouselSlide = document.querySelector('.carousel-slide');
        const newTransform = -currentIndex * 100; // Mueve el carrusel
        carouselSlide.style.transform = `translateX(${newTransform}%)`;
    }

    setInterval(moveToNextSlide, intervalTime); // Cambia de slide cada 7 segundos
});
