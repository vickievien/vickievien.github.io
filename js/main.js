document.addEventListener('DOMContentLoaded', function(event) {

    // BURGER TOGGLE NAVIGATION
    function toggleMe(e) {
        e.preventDefault();

        console.log('I work');
        
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(n => {
            n.classList.toggle('nav-toggle');
        });

        // document.querySelector('.right-nav-list').classList.toggle('.nav-toggle');
    }
    
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', toggleMe);














});