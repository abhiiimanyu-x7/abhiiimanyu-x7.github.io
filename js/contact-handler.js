// js/contact-handler.js
(function() {
    // Your Public Key initialized
    emailjs.init("0FtefjMEgoGVfc6fD"); 
})();

window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const originalText = btn.textContent;
        
        // UI State: Transmission Start
        btn.textContent = 'STATUS: UPLOADING_PAYLOAD...';
        btn.disabled = true;
        btn.style.opacity = '0.5';

        // Parameters: (Service_ID, Template_ID, Form_Element)
        // REPLACING Service Key with your provided key: service_xjdkrdc
        emailjs.sendForm('service_xjdkrdc', 'template_lavxeur', this)
            .then(function() {
                // Success State
                btn.textContent = 'ACK_RECEIVED: SUCCESS';
                btn.style.backgroundColor = '#22c55e'; // Green glow
                btn.style.color = '#020617';
                
                // Clear form and reset button after 4 seconds
                setTimeout(() => {
                    contactForm.reset();
                    btn.textContent = originalText;
                    btn.style.backgroundColor = ''; 
                    btn.style.color = '';
                    btn.disabled = false;
                    btn.style.opacity = '1';
                }, 4000);

            }, function(error) {
                // Error State
                console.error('CRITICAL_TRANSMISSION_FAILURE:', error);
                btn.textContent = 'ERROR: LINK_INTERRUPTED';
                btn.style.backgroundColor = '#ef4444'; // Red alert
                btn.disabled = false;
                btn.style.opacity = '1';
            });
    });
}