// RANDOM CARD SECTION
const magicMe = async() => {

    let randomUrl = `https://thecocktaildb.com/api/json/v1/1/random.php`;
    const randomResponse = await fetch(randomUrl);
    const randomData = await randomResponse.json();
    console.log(randomData);

    // RANDOM FRONT CARD
    const randomFrontCard = document.querySelector('.random-front-wrapper');

    randomFrontCard.style.backgroundImage = `url('${randomData.drinks[0].strDrinkThumb}')`;

    // FOR RANDOM FRONT AND BACK CARD
    const randomAlcoholTypes = document.querySelectorAll('.random-alc-type');
    const randomCocktailNames = document.querySelectorAll('.random-cocktail-name');
    const randomGlassTypes = document.querySelectorAll('.random-glass-type-name');

    randomAlcoholTypes.forEach(n => {
        n.innerText = randomData.drinks[0].strAlcoholic.toLowerCase();
    });

    randomCocktailNames.forEach(n => {
        n.innerText = randomData.drinks[0].strDrink;
    });

    randomGlassTypes.forEach(n => {
        n.innerText = randomData.drinks[0].strGlass.toLowerCase();
    });

    const randomGlassIcons = document.querySelectorAll('.random-glass-icon');

    randomGlassIcons.forEach(n => {
        n.className = 'random-glass-icon';
    });

    // UPDATE GLASS ICON
    if (randomData.drinks[0].strGlass.toLowerCase() === 'champagne flute') {
        randomGlassIcons.forEach(n => {
            n.classList.add('fas', 'fa-glass-cheers')
        });
    } else if(randomData.drinks[0].strGlass.toLowerCase() === 'wine glass') {
        randomGlassIcons.forEach(n => {
            n.classList.add('fas', 'fa-wine-glass')
        });
    } else if(randomData.drinks[0].strGlass.toLowerCase() === 'cocktail glass') {
        randomGlassIcons.forEach(n => {
            n.classList.add('fas', 'fa-cocktail')
        });
    } else if (randomData.drinks[0].strGlass.toLowerCase() === 'coffee mug' || randomData.drinks[0].strGlass.toLowerCase() === 'irish coffee cup') {
        randomGlassIcons.forEach(n => {
            n.classList.add('fas', 'fa-coffee')
        });
    } else{
        randomGlassIcons.forEach(n => {
            n.classList.add('fas', 'fa-glass-whiskey')
        });
    };
    
    // FOR RANDOM BACK CARD
    const randomBackPic = document.querySelector('.random-back-pic');
    randomBackPic.src = `${randomData.drinks[0].strDrinkThumb}`
    
    const randomInstruct = document.querySelector('.random-instruction');
    randomInstruct.innerText = randomData.drinks[0].strInstructions;

    const ingredientItems = document.querySelectorAll('.ingredient-list-item');


    // ingredientItems.forEach(n => {
    //     let strMeasure = `strMeasure${n+1}`;
    //     let strIngredient = `strIngredient${n+1}`;
    //     n.innerText = `${randomData.drinks[0].strMeasure} - ${randomData.drinks[0].strIngredient}`
    // });

    for(let i=0; i<ingredientItems.length; i++) {
        let strMeasure = `strMeasure${i+1}`;
        console.log(`I am ${strMeasure}`);
        
        let strIngredient = `strIngredient${i+1}`;
        console.log(`I am ${strIngredient}`);

        let strMeasureData = randomData.drinks[0].strMeasure;
        console.log(`I am the full string ${strMeasureData}`);
        
        let strIngredientData = randomData.drinks[0].strIngredient;
        console.log(`I am the full string ${strIngredientData}`);

        ingredientItems[i].innerText = `${strMeasureData} - ${strIngredientData}`;

        
    }


}
magicMe();

document.querySelector('.random-button').addEventListener('click', magicMe);








const displayRandom = () => {
    document.querySelector('.random-section').classList.toggle('display');   
    
    document.querySelector('#magic i').classList.toggle('fa-magic');

    document.querySelector('.search i').classList.toggle('fa-search');

    // document.querySelector('.search i').classList.toggle('fa-times');

    // document.querySelector('.fa-times').addEventListener('click', displayRandom);
}

document.querySelector('#magic').addEventListener('click', displayRandom);

document.querySelector('.random-close').addEventListener('click', displayRandom);


// const displaySearch = () => {
//     document.querySelector('.search-section').classList.toggle('display');   
    
//     document.querySelector('#magic i').classList.toggle('fa-magic');

//     document.querySelector('.search i').classList.toggle('fa-search');

//     document.querySelector('.search i').classList.toggle('fa-times');
// }

// document.querySelector('#search').addEventListener('click', displaySearch);






// 2. FLIPPING SKILL CARDS
function flipRandom() {
    console.log(this);
    this.classList.toggle('flip');
}
document.querySelector('.random-cards-container').addEventListener('click', flipRandom);







// https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg



// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// Filter by Glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass

// Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v1/1/random.php