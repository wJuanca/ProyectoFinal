// FAQ.js
document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll('.question-btn');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const question = e.currentTarget.parentElement.parentElement;
            question.classList.toggle('show-text');
        });
    });

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
    });
});
