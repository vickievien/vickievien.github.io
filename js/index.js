console.log('hello');

function flipMe() {
    console.log(this);
    this.classList.toggle('flip');
}


const cardContainers = document.querySelectorAll('.card-container');
for (const n of cardContainers) {
    n.addEventListener('click', flipMe);
}

