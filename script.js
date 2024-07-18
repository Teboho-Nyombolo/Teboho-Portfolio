document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const navTrigger = document.querySelector('.navTrigger');
    const mainListDiv = document.querySelector('#mainListDiv');

    // Toggle navbar for smaller screens
    navTrigger.addEventListener('click', function() {
        this.classList.toggle('active');
        
        if (mainListDiv.style.height && mainListDiv.style.height !== '0px') {
            mainListDiv.style.height = '0px';
        } else {
            mainListDiv.style.height = mainListDiv.scrollHeight + 'px';
        }
    });

    // Add sticky class to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('affix');
        } else {
            nav.classList.remove('affix');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.element');
    const cursor = document.querySelector('.typing-cursor');
    const dataElements = element.getAttribute('data-elements').split(',');
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = dataElements[currentIndex];
        const displayedText = isDeleting
            ? currentText.substring(0, charIndex--)
            : currentText.substring(0, charIndex++);

        element.textContent = displayedText;
        cursor.style.display = 'inline-block'; // Ensure cursor is visible

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 500); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            currentIndex = (currentIndex + 1) % dataElements.length;
            isDeleting = false;
        }

        const typingSpeed = isDeleting ? 25 : 75; // Typing speed
        setTimeout(type, typingSpeed);
    }

    type(); // Start typing
});

// Date Function 
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').innerText = currentYear;
});

// Active
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navlinks li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove the 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

// navsDisappear
const navTrigger = document.querySelector('.navTrigger');
const mainListDiv = document.getElementById('mainListDiv');
const navLinks = document.querySelectorAll('.navlinks li a');

// Toggle the visibility of the navigation menu
navTrigger.addEventListener('click', () => {
    mainListDiv.classList.toggle('active');
    // navTrigger.classList.toggle('active');
});

// Function to close the mobile navigation menu
function closeMobileNav() {
    mainListDiv.classList.remove('active');
    navTrigger.classList.remove('active');
    while(mainListDiv.style.height && mainListDiv.style.height !== '0px'){
        mainListDiv.style.height = '0px';

    }
}

// Add event listeners to navigation links to close the menu and set active link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Close the mobile navigation
        closeMobileNav();

        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});
