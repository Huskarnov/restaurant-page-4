

export {domInit, clearContent};

// import restaurantBg from './assets/restaurantBg.png';

// import meal1 from './assets/mealpics/frybread.png';
// import meal2 from './assets/mealpics/gentada.png';
// import meal3 from './assets/mealpics/gentito.png';
// import meal4 from './assets/mealpics/greenchilestew.png';
// import meal5 from './assets/mealpics/romana.png';
// import meal6 from './assets/mealpics/steakist.png';




const content = document.querySelector('#content');


const domInit = function(){ //populate home page

    document.body.style.fontFamily  = "'Rye'";
    document.body.style.backgroundImage = `url(https://i.ibb.co/ZxZk4yt/restaurant-Bg.png)`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    
    
    // ---------------------------------------NAV
    const nav = document.querySelector('nav');

    // ---------------------------------------CONTENT

    const contentLeft = document.createElement('div');
    const contentLeftParagraph = document.createElement('p');
    const contentLeftButton = document.createElement('button');

    const contentRight = document.createElement('div');
    const contentRightMeal1 = document.createElement('img')
    const contentRightMeal2 = document.createElement('img')
    const contentRightMeal3 = document.createElement('img')
    const contentRightMeal4 = document.createElement('img')
    const contentRightMeal5 = document.createElement('img')
    const contentRightMeal6 = document.createElement('img')

    content.appendChild(contentLeft);
    content.appendChild(contentRight);

    contentLeft.appendChild(contentLeftParagraph);
    contentLeft.appendChild(contentLeftButton);

    contentRight.appendChild(contentRightMeal1);
    contentRight.appendChild(contentRightMeal2);
    contentRight.appendChild(contentRightMeal3);
    contentRight.appendChild(contentRightMeal4);
    contentRight.appendChild(contentRightMeal5);
    contentRight.appendChild(contentRightMeal6);

    // styles //


    content.style.display = 'grid';
    content.style.gridTemplateColumns = '2fr 3fr';

    ////
    contentLeft.style.cssText = 'padding: calc(4.5rem + 3vh); display: flex; flex-direction : column; gap: 5rem';
    contentLeft.style.alignItems  = 'center';

    contentLeftParagraph.innerHTML = 'Live the food experience of the old cowboys, enjoy your western meals while listening to the live country music band';
    contentLeftParagraph.style.cssText = 'user-select: none;font-size : calc(4.5rem + 0.5vw); text-align:center';
    contentLeftParagraph.style.textShadow = '0 0 5px white ';

    contentLeftButton.innerHTML = 'Reserve now !!'
    contentLeftButton.style.cssText = ' padding: calc(0.8rem + 0.5vw) calc(5.5rem + 2vw);font-size: calc(2.5rem + 0.5vw); border-radius: 15rem; background-color : #813d2e; color:white';
    ////
    contentRight.style.cssText = 'padding: calc(4.5rem + 3vh);justify-content: center;gap: calc(4.5rem + 0.5vw);display:flex; flex-wrap: wrap';

    const mealStyle = 'height: calc(19rem + 3.5vw); width 20rem;border-radius: 5rem; box-shadow: 0 0 2rem black';
    contentRightMeal1.src = 'https://i.ibb.co/FhxB8m5/greenchilestew.png';
    contentRightMeal1.style.cssText = mealStyle;

    contentRightMeal2.src = 'https://i.ibb.co/BtKBTn6/gentito.png';
    contentRightMeal2.style.cssText = mealStyle;

    contentRightMeal3.src = 'https://i.ibb.co/tLxGr7S/gentada.png';
    contentRightMeal3.style.cssText = mealStyle;

    contentRightMeal4.src = 'https://i.ibb.co/WzBwgP8/frybread.png';
    contentRightMeal4.style.cssText = mealStyle;

    contentRightMeal5.src = 'https://i.ibb.co/9NXTXWF/tamales.png';
    contentRightMeal5.style.cssText = mealStyle;

    contentRightMeal6.src = 'https://i.ibb.co/wcZVXtY/steakist.png';
    contentRightMeal6.style.cssText = mealStyle;

};

// https://i.ibb.co/wcZVXtY/steakist.png
// https://i.ibb.co/9NXTXWF/tamales.png
// https://i.ibb.co/WzBwgP8/frybread.png
// https://i.ibb.co/tLxGr7S/gentada.png
// https://i.ibb.co/BtKBTn6/gentito.png
// https://i.ibb.co/FhxB8m5/greenchilestew.png
// https://i.ibb.co/9VpKDjR/romana.png
//https://i.ibb.co/ZxZk4yt/restaurant-Bg.png

const menueInit = function(){ //populate menue

    content.style.display.gridTemplateColumns = 'repeat(auto-fit,minmax(300px, 1fr))';



};









const clearContent = function(){ 

    const contentChildren = content.children;
    
    // for( let i = 0; i <= contentChildren.length - 1; i++){
    // contentChildren[i].style.display = 'none';
    // };

    while(contentChildren.length){
        content.removeChild(contentChildren[0]);
    }
};