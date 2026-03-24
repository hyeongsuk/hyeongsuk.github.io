// ===================================
// Language Switching Functionality
// ===================================
let currentLang = localStorage.getItem('language') || 'ko';

// Change language function
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang-btn') === lang) {
            btn.classList.add('active');
        }
    });
    
    console.log(`✅ Language changed to: ${lang === 'ko' ? '한국어' : 'English'}`);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    changeLanguage(currentLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-btn');
            changeLanguage(lang);
        });
    });
});

// ===================================
// Navigation Menu Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Smooth Scrolling & Active Nav Link
// ===================================
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Publications - no filter needed (vertical scroll layout)
// ===================================

// ===================================
// Contact Form Handler
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:hyeongsuk.ryu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message (optional)
        alert('메일 클라이언트가 열립니다. 메일을 확인하고 전송해주세요.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Scroll Indicator Animation
// ===================================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.research-card, .consulting-card, .expertise-item, .publication-item, .process-step'
);

animateElements.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ===================================
// Navbar Background on Scroll
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===================================
// Academic Links Handling
// ===================================
const academicLinks = document.querySelectorAll('.academic-link, .social-icon');

academicLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            alert('학술 프로필 링크를 설정해주세요.\n\n예시:\n- Google Scholar\n- ResearchGate\n- ORCID\n- LinkedIn');
        }
    });
});

// ===================================
// Publication Links Handling
// ===================================
const pubLinks = document.querySelectorAll('.pub-link');

pubLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            const linkText = link.textContent.trim();
            alert(`${linkText} 링크를 설정해주세요.\n\n각 논문의 실제 링크로 업데이트하시면 됩니다.`);
        }
    });
});

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🧠 Dr. Ryu - 뇌공학·시과학·수면의학 연구자', 'font-size: 20px; font-weight: bold; color: #5a6c7d;');
console.log('%c웹사이트에 방문해주셔서 감사합니다!', 'font-size: 14px; color: #7f8c8d;');
console.log('%c컨설팅 문의: hyeongsuk.ryu@gmail.com', 'font-size: 12px; color: #2c3e50;');

// ===================================
// Dynamic Year Update
// ===================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear && footerYear.textContent.includes('2026')) {
    footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
}

// ===================================
// Email Link Update Helper
// ===================================
// Function to update all email links
function updateEmailLinks(newEmail) {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${newEmail}`;
        if (link.textContent.includes('@')) {
            link.textContent = newEmail;
        }
    });
    
    const emailTexts = document.querySelectorAll('.footer-section p');
    emailTexts.forEach(p => {
        if (p.innerHTML.includes('hyeongsuk.ryu@gmail.com')) {
            p.innerHTML = p.innerHTML.replace('hyeongsuk.ryu@gmail.com', newEmail);
        }
    });
    
    console.log(`✅ 이메일이 ${newEmail}로 업데이트되었습니다.`);
}

// Usage: updateEmailLinks('hyeongsuk.ryu@gmail.com');

// ===================================
// Performance Optimization
// ===================================
// Lazy load images if any are added later
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}