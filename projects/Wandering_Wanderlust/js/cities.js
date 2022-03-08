document.addEventListener('DOMContentLoaded', function(event) {

    //CITIES FILTER EVENT
    const filters = ['Culture', 'Cuisine', 'Cityscape', 'Nature', 'Nightlife'];

    for (let i=0; i<filters.length; i++) {
        let addFiltOpt = document.createElement('option');
        addFiltOpt.innerText = filters[i];
        document.querySelector('#city-filter').appendChild(addFiltOpt);
        addFiltOpt.value = filters[i].toLowerCase();
    };

    function filterMe() {
        console.log('filterMe is working');
        let selectedFilter = this.value;

        document.querySelectorAll('.ww-main-attract-card').forEach(n => {
            
            if (n.classList.contains(selectedFilter) || selectedFilter === 'all') {
                n.style.display = 'block';
                console.log(n.classList);
            } else {
                n.style.display = 'none';
            }
        });
    };

    document.querySelector('#city-filter').addEventListener('change', filterMe);

    
});


