// 1. BURGER NAV. SEE MAIN.JS

// 2. FLIPPING SKILL CARDS

function flipMe() {
    console.log(this);
    this.classList.toggle('flip');
}

const cardContainers = document.querySelectorAll('.card-container');
for (const n of cardContainers) {
    n.addEventListener('click', flipMe);
}

// 3. HERO STYLING ON HOVER
const heroText = document.querySelector('.hero-text-container');

const colorChange = () => {
    heroText.style.color = "rgba(65, 65, 65,1)";
}
heroText.addEventListener('mouseover', colorChange);

const revertColor = () => {
    heroText.style.color = "white"; 
}
heroText.addEventListener('mouseleave', revertColor); 

// 4. COMING SOON PROJECT
const showAndHide = () => {
    document.querySelector('.coming-soon-modal').classList.toggle('visible');
}
const comingSoonBtn = document.querySelector('.coming-soon-button');
comingSoonBtn.addEventListener('click', showAndHide);
