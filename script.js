// JavaScript для плавної прокрутки
document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо всі посилання в навігації
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Отримуємо ID секції з href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Обчислюємо позицію з урахуванням висоти хедера
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // Плавна прокрутка
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Додаткова анімація для карток при скролі
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Спостерігаємо за картками портфоліо
    document.querySelectorAll('.portfolio-card').forEach(card => {
        observer.observe(card);
    });
});