document.addEventListener('DOMContentLoaded', function(event) {

    function toggleMe(e) {
        e.preventDefault();
    
        document.querySelector('.right-nav-list').classList.toggle('nav-toggle');

    }
    
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', toggleMe);














});