// Script untuk interaksi sederhana
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.price-box button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Terima kasih telah memesan! Kami akan menghubungi Anda segera.');
        });
    });
});