// Smooth scroll untuk multiple nav buttons
document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.btn-nav');
    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Fallback to contact
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

