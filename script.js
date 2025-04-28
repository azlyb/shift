// WhatsApp Contact
function contactWhatsApp() {
    window.open('https://wa.me/60192817718', '_blank');
}

// Reveal Animation on Scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Simple Form Handling (currently just alert)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name && phone) {
        alert(`Thank you ${name}! We will contact you at ${phone} soon.`);
        document.getElementById('contactForm').reset();
    }
});