// 1. BURGER NAV
document.addEventListener('DOMContentLoaded', function(event) {

    function toggleMe(e) {
        e.preventDefault();
        document.querySelector('.burger i').classList.toggle('fa-bars');

        document.querySelector('.burger i').classList.toggle('fa-times');

        document.querySelector('.right-nav-list').classList.toggle('nav-toggle');

        const navItems = document.querySelectorAll('.nav-item');
        for (const n of navItems) {
            n.classList.toggle('nav-toggle');
        }

    }
    
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', toggleMe);


    // const navLinks = document.querySelectorAll('.nav-item');

    // navLinks.forEach(n => {
    //     n.addEventListener('click', toggleMe);
    // });
    
});

// 2-5. SEE INDEX.JS