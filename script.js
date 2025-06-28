// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.achievement-card, .project-card, .hobby-card, .section-header');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const typedNameElement = document.querySelector('#typed-name');
    if (typedNameElement) {
        const nameText = 'Bharath Shetty';
        setTimeout(() => {
            typeWriter(typedNameElement, nameText, 80);
        }, 800);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effect for social links
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
});

// Add click animation for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add floating animation to profile image
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
        setInterval(() => {
            profileImage.style.transform = 'translateY(-10px) scale(1.02)';
            setTimeout(() => {
                profileImage.style.transform = 'translateY(0) scale(1)';
            }, 1000);
        }, 3000);
    }
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite linear;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Language Translation System
let currentLanguage = 'english';

const translations = {
    kannada: {
        // Navigation
        'Home': 'ಮುಖ್ಯ',
        'About': 'ನನ್ನ ಬಗ್ಗೆ',
        'Achievements': 'ಸಾಧನೆಗಳು',
        'Projects': 'ಯೋಜನೆಗಳು',
        'Hobbies': 'ಹವ್ಯಾಸಗಳು',
        'Contact': 'ಸಂಪರ್ಕ',
        
        // Hero Section
        'Hello, I\'m Bharath Shetty': 'ನಮಸ್ಕಾರ, ನಾನು ಭರತ್ ಶೆಟ್ಟಿ',
        'The person your frontend calls when it needs help': 'ನಿಮ್ಮ ಫ್ರಂಟ್‌ಎಂಡ್ ಸಹಾಯಕ್ಕಾಗಿ ಕರೆಯುವ ವ್ಯಕ್ತಿ',
        'Backend developer who lives in the land of APIs, databases, and mysterious logs that say "everything\'s fine" right before production crashes.': 'API ಗಳು, ಡೇಟಾಬೇಸ್‌ಗಳು ಮತ್ತು ನಿಗೂಢ ಲಾಗ್‌ಗಳ ಲೋಕದಲ್ಲಿ ವಾಸಿಸುವ ಬ್ಯಾಕ್‌ಎಂಡ್ ಡೆವಲಪರ್.',
        'Learn More': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
        'Get In Touch': 'ಸಂಪರ್ಕಿಸಿ',
        
        // About Section
        'About Me': 'ನನ್ನ ಬಗ್ಗೆ',
        'Get to know me better': 'ನನ್ನನ್ನು ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ',
        'Backend Developer': 'ಬ್ಯಾಕ್‌ಎಂಡ್ ಡೆವಲಪರ್',
        'APIs • Databases • Cloud': 'API • ಡೇಟಾಬೇಸ್ • ಕ್ಲೌಡ್',
        
        // About Me Content
        '🧠 About Me': '🧠 ನನ್ನ ಬಗ್ಗೆ',
        'Hi, I\'m Bharath — the person your frontend calls when it needs help.': 'ನಮಸ್ಕಾರ, ನಾನು ಭರತ್ — ನಿಮ್ಮ ಫ್ರಂಟ್‌ಎಂಡ್ ಸಹಾಯಕ್ಕಾಗಿ ಕರೆಯುವ ವ್ಯಕ್ತಿ.',
        'I\'m a backend developer, which means I live in the land of APIs, databases, and mysterious logs that say "everything\'s fine" right before production crashes.': 'ನಾನು ಬ್ಯಾಕ್‌ಎಂಡ್ ಡೆವಲಪರ್, ಇದರರ್ಥ ನಾನು API ಗಳು, ಡೇಟಾಬೇಸ್‌ಗಳು ಮತ್ತು ನಿಗೂಢ ಲಾಗ್‌ಗಳ ಲೋಕದಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ.',
        'When I\'m not debugging why an if(true) block didn\'t execute, I\'m probably architecting systems that actually scale, optimizing performance, or making sure your cat photo uploads are stored securely (and redundantly) in the cloud.': 'if(true) ಬ್ಲಾಕ್ ಏಕೆ ಎಕ್ಸಿಕ್ಯೂಟ್ ಆಗಲಿಲ್ಲ ಎಂದು ಡೀಬಗ್ ಮಾಡದಿರುವಾಗ, ನಾನು ನಿಜವಾಗಿಯೂ ಸ್ಕೇಲ್ ಆಗುವ ಸಿಸ್ಟಮ್‌ಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸುತ್ತಿದ್ದೇನೆ.',
        
        // What I Do Section
        '🛠️ What I Do': '🛠️ ನಾನು ಏನು ಮಾಡುತ್ತೇನೆ',
        'API Design:': 'API ವಿನ್ಯಾಸ:',
        'I make endpoints so clean, REST feels refreshed.': 'ನಾನು ಎಂಡ್‌ಪಾಯಿಂಟ್‌ಗಳನ್ನು ತುಂಬಾ ಸ್ವಚ್ಛವಾಗಿ ಮಾಡುತ್ತೇನೆ, REST ಫ್ರೆಶ್ ಆಗುತ್ತದೆ.',
        'Database Whispering:': 'ಡೇಟಾಬೇಸ್ ವಿಸ್ಪರಿಂಗ್:',
        'PostgreSQL, MySQL, MongoDB — I speak fluent JOIN.': 'PostgreSQL, MySQL, MongoDB — ನಾನು ನಿರರ್ಗಳವಾಗಿ JOIN ಮಾತನಾಡುತ್ತೇನೆ.',
        'Cloud Stuff:': 'ಕ್ಲೌಡ್ ವಿಷಯಗಳು:',
        'AWS, GCP, Docker – if it has a dashboard, I\'ve broken it at least once.': 'AWS, GCP, Docker – ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಇದ್ದರೆ, ನಾನು ಅದನ್ನು ಕನಿಷ್ಠ ಒಮ್ಮೆಯಾದರೂ ಒಡೆದಿದ್ದೇನೆ.',
        'IoT & Real-Time:': 'IoT ಮತ್ತು ರಿಯಲ್-ಟೈಮ್:',
        'I\'ve made machines talk to servers faster than you can say "latency".': 'ನೀವು "ಲೇಟೆನ್ಸಿ" ಎಂದು ಹೇಳುವುದಕ್ಕಿಂತ ವೇಗವಾಗಿ ನಾನು ಯಂತ್ರಗಳನ್ನು ಸರ್ವರ್‌ಗಳೊಂದಿಗೆ ಮಾತನಾಡಿಸಿದ್ದೇನೆ.',
        'Writing Code That Works™:': 'ಕೆಲಸ ಮಾಡುವ ಕೋಡ್ ಬರೆಯುವುದು™:',
        'With unit tests that occasionally pass and logs that occasionally help.': 'ಕೆಲವೊಮ್ಮೆ ಪಾಸ್ ಆಗುವ ಯೂನಿಟ್ ಟೆಸ್ಟ್‌ಗಳು ಮತ್ತು ಕೆಲವೊಮ್ಮೆ ಸಹಾಯ ಮಾಡುವ ಲಾಗ್‌ಗಳೊಂದಿಗೆ.',
        
        // Philosophy Section
        '🚀 My Philosophy': '🚀 ನನ್ನ ತತ್ವಶಾಸ್ತ್ರ',
        'Write code like nobody\'s watching.': 'ಯಾರೂ ನೋಡುತ್ತಿಲ್ಲ ಎಂಬಂತೆ ಕೋಡ್ ಬರೆಯಿರಿ.',
        'Push to prod like everybody is.': 'ಎಲ್ಲರೂ ನೋಡುತ್ತಿದ್ದಾರೆ ಎಂಬಂತೆ ಪ್ರೊಡ್‌ಗೆ ಪುಶ್ ಮಾಡಿ.',
        
        // Debugging Section
        '🐞 Debugging Style': '🐞 ಡೀಬಗಿಂಗ್ ಸ್ಟೈಲ್',
        'I don\'t make bugs. I create unexpected features that foster exploration.': 'ನಾನು ಬಗ್‌ಗಳನ್ನು ಮಾಡುವುದಿಲ್ಲ. ನಾನು ಅನ್ವೇಷಣೆಯನ್ನು ಉತ್ತೇಜಿಸುವ ಅನಿರೀಕ್ಷಿತ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇನೆ.',
        
        // Work With Me Section
        '🤝 Work With Me': '🤝 ನನ್ನೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಿ',
        'Whether you\'re building a scalable system, integrating with some overly enthusiastic third-party API, or just want someone to tell you your microservices aren\'t really "micro" — I\'m your guy.': 'ನೀವು ಸ್ಕೇಲೆಬಲ್ ಸಿಸ್ಟಂ ನಿರ್ಮಿಸುತ್ತಿದ್ದರೂ, ಅತಿ ಉತ್ಸಾಹಭರಿತ ಥರ್ಡ್-ಪಾರ್ಟಿ API ಯೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತಿದ್ದರೂ — ನಾನು ನಿಮ್ಮ ವ್ಯಕ್ತಿ.',
        
        // Achievements
        'Achievements': 'ಸಾಧನೆಗಳು',
        'Milestones I\'m proud of': 'ನಾನು ಹೆಮ್ಮೆಪಡುವ ಮೈಲಿಗಲ್ಲುಗಳು',
        'Production Zero-Downtime': 'ಪ್ರೊಡಕ್ಷನ್ ಶೂನ್ಯ-ಡೌನ್‌ಟೈಮ್',
        'API Performance Optimization': 'API ಕಾರ್ಯಕ್ಷಮತೆ ಹೆಚ್ಚಳ',
        'Cloud Architecture Master': 'ಕ್ಲೌಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್ ಮಾಸ್ಟರ್',
        'Bug Whisperer Certification': 'ಬಗ್ ವಿಸ್ಪರರ್ ಪ್ರಮಾಣಪತ್ರ',
        
        // Projects
        'Projects': 'ಯೋಜನೆಗಳು',
        'Some cool stuff I\'ve built': 'ನಾನು ನಿರ್ಮಿಸಿದ ಕೆಲವು ಅದ್ಭುತ ವಸ್ತುಗಳು',
        'Know Your Leader': 'ನಿಮ್ಮ ನಾಯಕನನ್ನು ತಿಳಿಯಿರಿ',
        'Pataki Angadi Crackers': 'ಪಟಾಕಿ ಅಂಗಡಿ ಕ್ರಾಕರ್ಸ್',
        'More Backend Magic': 'ಇನ್ನಷ್ಟು ಬ್ಯಾಕ್‌ಎಂಡ್ ಮ್ಯಾಜಿಕ್',
        
        // Hobbies
        'Hobbies & Interests': 'ಹವ್ಯಾಸಗಳು ಮತ್ತು ಆಸಕ್ತಿಗಳು',
        'What I love to do in my free time': 'ನನ್ನ ಬಿಡುವಿನ ವೇಳೆಯಲ್ಲಿ ನಾನು ಮಾಡಲು ಇಷ್ಟಪಡುವುದು',
        'Badminton': 'ಬ್ಯಾಡ್ಮಿಂಟನ್',
        'IPL & RCB Support': 'IPL ಮತ್ತು RCB ಬೆಂಬಲ',
        'Peak Conquering': 'ಶಿಖರ ವಿಜಯ',
        'Side Project Collecting': 'ಸೈಡ್ ಪ್ರಾಜೆಕ್ಟ್ ಸಂಗ್ರಹ',
        'Political Discussions': 'ರಾಜಕೀಯ ಚರ್ಚೆಗಳು',
        'Database Optimization': 'ಡೇಟಾಬೇಸ್ ಹೆಚ್ಚಳ',
        
        // Contact
        'Let\'s Connect': 'ಸಂಪರ್ಕಿಸೋಣ',
        'Find me on social media or send me a message': 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ನನ್ನನ್ನು ಹುಡುಕಿ ಅಥವಾ ಸಂದೇಶ ಕಳುಹಿಸಿ',
        'LinkedIn': 'ಲಿಂಕ್ಡ್‌ಇನ್',
        'GitHub': 'ಗಿಟ್‌ಹಬ್',
        'Twitter': 'ಟ್ವಿಟರ್',
        'Instagram': 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್',
        'Email': 'ಇಮೇಲ್',
        
        // Footer
        '© 2024 Bharath Shetty. Made with ❤️ and way too much caffeine.': '© 2024 ಭರತ್ ಶೆಟ್ಟಿ. ❤️ ಮತ್ತು ಅತಿ ಹೆಚ್ಚು ಕ್ಯಾಫೀನ್‌ನೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.'
    },
    
    english: {
        // This will store the original English text for reverting back
    }
};

function translateToKannada() {
    if (currentLanguage === 'kannada') return;
    
    currentLanguage = 'kannada';
    
    // Update active states
    document.getElementById('name-kannada').classList.add('active');
    document.getElementById('name-english').classList.remove('active');
    
    // Translate navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const text = link.textContent.trim();
        if (translations.kannada[text]) {
            if (!link.dataset.originalText) {
                link.dataset.originalText = text;
            }
            link.textContent = translations.kannada[text];
        }
    });
    
    // Translate section titles and subtitles
    translateElement('.section-title');
    translateElement('.section-subtitle');
    translateElement('.hero-title');
    translateElement('.hero-subtitle');
    translateElement('.hero-description');
    translateElement('.btn-primary');
    translateElement('.btn-secondary');
    
    // Translate achievement titles and project titles
    translateElement('.achievement-card h3');
    translateElement('.project-card h3');
    translateElement('.hobby-card h3');
    
    // Translate about section content
    translateElement('.about-text h3');
    translateElement('.about-text li');
    translateElement('.about-text strong');
    translateAboutSection();
    
    // Translate contact info and social links
    translateElement('.info-item span');
    translateElement('.social-link span');
    
    // Translate footer
    translateElement('.footer p');
    
    // Show notification
    showTranslationNotification('ಕನ್ನಡಕ್ಕೆ ಅನುವಾದಿಸಲಾಗಿದೆ');
}

function translateToEnglish() {
    if (currentLanguage === 'english') return;
    
    currentLanguage = 'english';
    
    // Update active states
    document.getElementById('name-english').classList.add('active');
    document.getElementById('name-kannada').classList.remove('active');
    
    // Revert navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.dataset.originalText) {
            link.textContent = link.dataset.originalText;
        }
    });
    
    // Revert all translated elements
    revertElement('.section-title');
    revertElement('.section-subtitle');
    revertElement('.hero-title');
    revertElement('.hero-subtitle');
    revertElement('.hero-description');
    revertElement('.btn-primary');
    revertElement('.btn-secondary');
    
    // Revert achievement titles and project titles
    revertElement('.achievement-card h3');
    revertElement('.project-card h3');
    revertElement('.hobby-card h3');
    
    // Revert about section content
    revertElement('.about-text h3');
    revertElement('.about-text li');
    revertElement('.about-text strong');
    revertAboutSection();
    
    // Revert contact info and social links
    revertElement('.info-item span');
    revertElement('.social-link span');
    
    // Revert footer
    revertElement('.footer p');
    
    // Show notification
    showTranslationNotification('Translated to English');
}

function translateElement(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent.trim();
        if (translations.kannada[text]) {
            if (!element.dataset.originalText) {
                element.dataset.originalText = text;
            }
            element.textContent = translations.kannada[text];
        }
    });
}

function translateAboutSection() {
    const aboutTexts = document.querySelectorAll('.about-text p');
    
    aboutTexts.forEach(paragraph => {
        if (!paragraph.dataset.originalHtml) {
            paragraph.dataset.originalHtml = paragraph.innerHTML;
        }
        
        let html = paragraph.innerHTML;
        
        // Handle mixed content paragraphs by translating individual text parts
        Object.keys(translations.kannada).forEach(englishText => {
            if (html.includes(englishText)) {
                html = html.replace(englishText, translations.kannada[englishText]);
            }
        });
        
        paragraph.innerHTML = html;
    });
}

function revertElement(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (element.dataset.originalText) {
            element.textContent = element.dataset.originalText;
        }
    });
}

function revertAboutSection() {
    const aboutTexts = document.querySelectorAll('.about-text p');
    
    aboutTexts.forEach(paragraph => {
        if (paragraph.dataset.originalHtml) {
            paragraph.innerHTML = paragraph.dataset.originalHtml;
        }
    });
}

function showTranslationNotification(message) {
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'translation-notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Set default active language
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name-english').classList.add('active');
}); 