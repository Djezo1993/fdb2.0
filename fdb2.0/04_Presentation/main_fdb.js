document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursor-ring');
    const hero = document.querySelector('.hero');

    // MOUSE FOLLOW
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
    });

    // HOVER EFFECTS
    const interactives = document.querySelectorAll('a, .flip-card, .color-item, .lab-img-wrap');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.style.width = '60px';
            cursorRing.style.height = '60px';
            cursorRing.style.background = 'rgba(198, 0, 0, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.style.width = '40px';
            cursorRing.style.height = '40px';
            cursorRing.style.background = 'transparent';
        });
    });

    // FLIP CARDS INTERACTION
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // REVEAL ON SCROLL
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .hero').forEach(el => {
        observer.observe(el);
    });

    // LOADER EXIT
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            hero.classList.add('visible');
        }, 1600);
    });
});
