console.log('hello');

function flipMe() {
    console.log(this);
    this.parentElement.classList.toggle('flip');
}


const skillCards = document.querySelectorAll('.skill-card');
for (const n of skillCards) {
    n.addEventListener('click', flipMe);
}

