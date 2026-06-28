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

// ===================================
// SPA Fade In/Out Navigation
// ===================================
const navLinks = document.querySelectorAll('.nav-link');
const allSections = document.querySelectorAll('.section');
const heroSection = document.querySelector('.hero');
const affiliationBar = document.querySelector('.affiliation-logos-bar');
const footerEl = document.querySelector('.footer');
const scrollTopBtnEl = document.getElementById('scrollTopBtn');

// 섹션 ID → 섹션 맵
const sectionMap = {};
allSections.forEach(sec => {
    if (sec.id) sectionMap[sec.id] = sec;
});

let currentSection = null; // null = 홈(hero + 모든 섹션)
let isTransitioning = false;
const FADE_OUT_MS = 300;
const FADE_IN_DELAY = 50; // display:block → 렌더링 대기

// 유틸: 요소의 SPA 클래스 모두 제거
function clearSpaClasses(el) {
    el.classList.remove('spa-gone', 'spa-fading-out', 'spa-fading-in', 'spa-visible');
}

// 유틸: 현재 보이는 모든 요소들 (hero + sections + footer 등)
function getVisibleElements() {
    const els = [];
    if (!heroSection.classList.contains('spa-gone')) els.push(heroSection);
    allSections.forEach(sec => {
        if (!sec.classList.contains('spa-gone')) els.push(sec);
    });
    return els;
}

function showSection(sectionId) {
    if (isTransitioning) return;
    if (sectionId === currentSection) return; // 같은 섹션 재클릭 방지
    if (sectionId === null && currentSection === null) return; // 이미 홈

    isTransitioning = true;

    // 모바일 메뉴 닫기
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');

    // ── Step 1: 현재 보이는 것들 Fade-out ──
    const visibles = getVisibleElements();
    visibles.forEach(el => {
        el.classList.add('spa-fading-out');
    });
    if (affiliationBar && !affiliationBar.classList.contains('spa-gone')) {
        affiliationBar.classList.add('spa-fading-out');
    }
    if (footerEl && !footerEl.classList.contains('spa-gone')) {
        footerEl.classList.add('spa-fading-out');
    }

    // ── Step 2: Fade-out 완료 후 → 숨기고 → 새 섹션 Fade-in ──
    setTimeout(() => {
        // 맨 위로 스크롤
        window.scrollTo({ top: 0, behavior: 'auto' });

        // 모두 숨김 (display: none)
        clearSpaClasses(heroSection);
        heroSection.classList.add('spa-gone');
        allSections.forEach(sec => {
            clearSpaClasses(sec);
            sec.classList.add('spa-gone');
        });
        if (affiliationBar) { clearSpaClasses(affiliationBar); affiliationBar.classList.add('spa-gone'); }
        if (footerEl) { clearSpaClasses(footerEl); footerEl.classList.add('spa-gone'); }

        // Active nav 업데이트
        navLinks.forEach(l => {
            l.classList.remove('active');
            if (sectionId && l.getAttribute('href') === '#' + sectionId) {
                l.classList.add('active');
            }
        });

        if (!sectionId) {
            // ── 홈으로 복귀: 모두 표시 ──
            currentSection = null;

            // Hero
            clearSpaClasses(heroSection);
            heroSection.classList.add('spa-fading-in');
            // 모든 섹션
            allSections.forEach(sec => {
                clearSpaClasses(sec);
                sec.classList.add('spa-fading-in');
            });
            // Footer, affiliation
            if (affiliationBar) { clearSpaClasses(affiliationBar); }
            if (footerEl) { clearSpaClasses(footerEl); }

            // 렌더링 대기 후 Fade-in
            setTimeout(() => {
                heroSection.classList.remove('spa-fading-in');
                heroSection.classList.add('spa-visible');
                allSections.forEach(sec => {
                    sec.classList.remove('spa-fading-in');
                    sec.classList.add('spa-visible');
                });

                // Three.js 캔버스 리사이즈
                setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 100);

                // 전환 완료 후 SPA 클래스 정리 (원래 상태 복원)
                setTimeout(() => {
                    clearSpaClasses(heroSection);
                    allSections.forEach(sec => clearSpaClasses(sec));
                    if (affiliationBar) clearSpaClasses(affiliationBar);
                    if (footerEl) clearSpaClasses(footerEl);
                    isTransitioning = false;
                }, 450);
            }, FADE_IN_DELAY);

        } else {
            // ── 특정 섹션만 표시 ──
            currentSection = sectionId;

            const target = sectionMap[sectionId];
            if (target) {
                clearSpaClasses(target);
                target.classList.add('spa-fading-in');
            }

            // Footer/affiliation: contact에서만 표시
            if (sectionId === 'contact') {
                if (affiliationBar) { clearSpaClasses(affiliationBar); affiliationBar.classList.add('spa-fading-in'); }
                if (footerEl) { clearSpaClasses(footerEl); footerEl.classList.add('spa-fading-in'); }
            }

            // 렌더링 대기 후 Fade-in
            setTimeout(() => {
                if (target) {
                    target.classList.remove('spa-fading-in');
                    target.classList.add('spa-visible');
                }
                if (sectionId === 'contact') {
                    if (affiliationBar) { affiliationBar.classList.remove('spa-fading-in'); affiliationBar.classList.add('spa-visible'); }
                    if (footerEl) { footerEl.classList.remove('spa-fading-in'); footerEl.classList.add('spa-visible'); }
                }

                // lectures 섹션이면 Three.js canvas 리사이즈 트리거
                if (sectionId === 'lectures') {
                    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 150);
                }

                // 전환 완료
                setTimeout(() => {
                    isTransitioning = false;
                }, 450);
            }, FADE_IN_DELAY);
        }

    }, FADE_OUT_MS);
}

// Nav 링크 클릭 이벤트
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const sectionId = href.replace('#', '');
        showSection(sectionId);
    });
});

// 로고(Dr. Ryu) 클릭 → 홈으로
const navBrand = document.querySelector('.nav-brand');
if (navBrand) {
    navBrand.style.cursor = 'pointer';
    navBrand.addEventListener('click', () => {
        showSection(null);
    });
}

// Hero 버튼들도 SPA 전환
document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
            showSection(href.replace('#', ''));
        }
    });
});

// Footer quick links도 SPA 전환
document.querySelectorAll('.footer a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').replace('#', '');
        showSection(sectionId);
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
// Scroll to Top Button → 홈으로 복귀
// ===================================
if (scrollTopBtnEl) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtnEl.classList.add('visible');
        } else {
            scrollTopBtnEl.classList.remove('visible');
        }
    });
    scrollTopBtnEl.addEventListener('click', () => {
        showSection(null); // 홈으로 복귀
    });
}

// ===================================
// Scroll Indicator Animation
// ===================================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        showSection('about');
    });
}

// ===================================
// Element Animations (SPA 호환)
// ===================================
const animateElements = document.querySelectorAll(
    '.research-card, .consulting-card, .expertise-item, .publication-item, .process-step'
);

// 홈(초기) 상태에서는 모두 보이도록
animateElements.forEach(element => {
    element.style.opacity = '1';
});

// ===================================
// Navbar Background on Scroll
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50 || currentSection !== null) {
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
console.log('%c🧠 HS Lab - Brain Engineering · Vision Science · Sleep Medicine', 'font-size: 20px; font-weight: bold; color: #5a6c7d;');
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