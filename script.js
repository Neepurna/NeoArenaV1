// Email notification functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email-input');
    const notifyBtn = document.querySelector('.notify-btn');
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Handle notify button click
    notifyBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        
        if (!email) {
            showMessage('Please enter your email address', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate successful subscription
        showMessage('Thank you! We\'ll notify you when NeoArena launches! 🎮', 'success');
        emailInput.value = '';
        
        // Store email in localStorage (in production, this would be sent to a backend)
        storeEmail(email);
    });
    
    // Handle Enter key press in email input
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            notifyBtn.click();
        }
    });
    
    // Store email in localStorage
    function storeEmail(email) {
        let emails = JSON.parse(localStorage.getItem('neoarena_emails') || '[]');
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('neoarena_emails', JSON.stringify(emails));
        }
    }
    
    // Show message to user
    function showMessage(message, type) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.notification-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageEl = document.createElement('div');
        messageEl.className = `notification-message ${type}`;
        messageEl.textContent = message;
        
        // Add styles
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 1rem 2rem;
            background: ${type === 'success' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)'};
            color: white;
            border-radius: 50px;
            font-weight: 600;
            z-index: 1000;
            animation: slideDown 0.3s ease-out;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(messageEl);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                messageEl.remove();
            }, 300);
        }, 3000);
    }
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Particle effect on feature cards hover (optional enhancement)
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    });
    
    function createParticles(element) {
        const rect = element.getBoundingClientRect();
        const particleCount = 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 50%;
                pointer-events: none;
                z-index: 999;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                animation: particleFloat 1s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
    
    // Add particle animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            to {
                transform: translateY(-100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
});
