document.addEventListener("DOMContentLoaded", () => {
    // Critério 12: JavaScript Objects
    const menuConfig = {
        openClass: 'open',
        storageKey: 'fitlifeMenuState',
        messagePrefix: 'Menu '
    };

    // Critério 13: JavaScript Arrays and Array Methods
    const navLinks = [
        { href: 'index.html', text: 'Home' },
        { href: 'about.html', text: 'About' },
        { href: 'services.html', text: 'Services' },
        { href: 'plans.html', text: 'Plans' },
        { href: 'contact.html', text: 'Contact' }
    ];

    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburgerBtn && mobileMenu) {
        // Critério 15: JavaScript localStorage - Load initial state
        function loadMenuState() {
            const savedState = localStorage.getItem(menuConfig.storageKey);
            if (savedState === 'open') {
                mobileMenu.classList.add(menuConfig.openClass);
            }
        }

        // Critério 9: JavaScript Functions - Toggle function with conditional
        function toggleMenu() {
            const isOpen = mobileMenu.classList.contains(menuConfig.openClass);
            mobileMenu.classList.toggle(menuConfig.openClass);
            const newState = mobileMenu.classList.contains(menuConfig.openClass) ? 'open' : 'closed';

            // Critério 11: JavaScript Conditional Branching
            if (newState === 'open') {
                // Critério 14: JavaScript Template Literals
                const message = `${menuConfig.messagePrefix}opened successfully!`;
                console.log(message); // Para demo; poderia ser alert(`${message}`);
            } else {
                const message = `${menuConfig.messagePrefix}closed.`;
                console.log(message);
            }

            // Save to localStorage
            localStorage.setItem(menuConfig.storageKey, newState);
        }

        // Critério 9: Another function - Close on outside click
        function closeMenuOnClickOutside(event) {
            if (!mobileMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                mobileMenu.classList.remove(menuConfig.openClass);
                localStorage.setItem(menuConfig.storageKey, 'closed');
            }
        }

        // Event listeners (Critério 10: DOM Manipulation)
        hamburgerBtn.addEventListener("click", toggleMenu);

        // Use array method to add listeners to links
        navLinks.forEach((linkData, index) => {
            const link = mobileMenu.querySelector(`a[href="${linkData.href}"]`);
            if (link) {
                // Critério 13: Array method (forEach)
                link.addEventListener("click", () => {
                    mobileMenu.classList.remove(menuConfig.openClass);
                    localStorage.setItem(menuConfig.storageKey, 'closed');
                });
                // Exemplo de map para data attribute (demo)
                const mappedText = navLinks.map(item => item.text).join(', ');
                console.log(`Nav items: ${mappedText}`); // Template literal extra
            }
        });

        // Outside click listener
        document.addEventListener("click", closeMenuOnClickOutside);

        // Load state on init
        loadMenuState();
    }
});