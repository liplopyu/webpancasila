// --- UI & DARK MODE UPDATE ---

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DARK MODE LOGIC ---
    const themeSwitch = document.getElementById('checkbox');
    
    // Fungsi untuk menerapkan tema
    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            if (themeSwitch) themeSwitch.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            if (themeSwitch) themeSwitch.checked = false;
        }
    };

    // Cek tema yang tersimpan saat halaman dimuat
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    applyTheme(savedTheme);

    // Listener untuk toggle switch
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            let theme = 'light-mode';
            if (this.checked) {
                theme = 'dark-mode';
            }
            applyTheme(theme);
            localStorage.setItem('theme', theme);
        });
    }

    // --- 2. NAVIGATION LOGIC (HAMBURGER) ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    // (Fungsionalitas menu mobile bisa ditambahkan di sini jika diperlukan)


    // --- 3. ON-SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, {
            threshold: 0.1
        });
        revealElements.forEach(el => observer.observe(el));
    }


    // --- 4. MATERI ACCORDION LOGIC ---
    if (document.querySelector('.materi-list')) {
        const accordions = document.querySelectorAll('.materi-accordion');

        accordions.forEach(accordion => {
            const card = accordion.querySelector('.materi-card');
            const content = accordion.querySelector('.materi-content');

            card.addEventListener('click', () => {
                const isActive = card.classList.contains('active');
                
                document.querySelectorAll('.materi-card.active').forEach(activeCard => {
                    if (activeCard !== card) {
                        activeCard.classList.remove('active');
                        activeCard.nextElementSibling.style.maxHeight = null;
                    }
                });

                if (isActive) {
                    card.classList.remove('active');
                    content.style.maxHeight = null;
                } else {
                    card.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }

});