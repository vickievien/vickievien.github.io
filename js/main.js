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



    const cursor1 = document.querySelector('.cursor1');
    const cursor2 = document.querySelector('.cursor2');
    const cursor3 = document.querySelector('.cursor3');
    document.addEventListener('mousemove', function(e) {
        // cursor1.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
        cursor1.style.display = 'block';
        cursor1.style.left = `${e.clientX - 10}px`;
        cursor1.style.top = `${e.clientY - 10}px`;
        cursor2.style.display = 'block';
        cursor2.style.left = `${e.clientX - 17.5}px`;
        cursor2.style.top = `${e.clientY - 17.5}px`;
        cursor3.style.display = 'block';
        cursor3.style.left = `${e.clientX - 15}px`;
        cursor3.style.top = `${e.clientY - 15}px`;
    });



    
});

