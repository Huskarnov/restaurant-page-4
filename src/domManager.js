export {homeInit, menueInit,contactInit, clearContent,content};



const mealArray = [
    {   name: 'Steakito',
        price: 15,
        pictureUrl: 'https://i.ibb.co/wcZVXtY/steakist.png'
    },
    {   name: 'Tamales',
        price: 19,
        pictureUrl: 'https://i.ibb.co/9NXTXWF/tamales.png'
    },
    {   name: 'Fry bread',
        price: 17,
        pictureUrl: 'https://i.ibb.co/WzBwgP8/frybread.png'
    },
    {   name: 'Gentada',
        price: 20,
        pictureUrl: 'https://i.ibb.co/tLxGr7S/gentada.png'
    },
    {   name: 'Gentito',
        price: 15,
        pictureUrl: 'https://i.ibb.co/BtKBTn6/gentito.png'
    },
    {   name: 'Romana',
        price: 12,
        pictureUrl: 'https://i.ibb.co/9VpKDjR/romana.png'
    },
    
];


const content = document.querySelector('#content');



const homeInit = function(){ //populate home page

    document.body.style.fontFamily  = "'Rye'";
    document.body.style.backgroundImage = `url(https://i.ibb.co/ZxZk4yt/restaurant-Bg.png)`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    
    // ---------------------------------------NAV
    // const nav = document.querySelector('nav');

    // ---------------------------------------CONTENT

    const homeDiv = document.createElement('div');



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



    homeDiv.appendChild(contentLeft);
    homeDiv.appendChild(contentRight);

    contentLeft.appendChild(contentLeftParagraph);
    contentLeft.appendChild(contentLeftButton);

    contentRight.appendChild(contentRightMeal1);
    contentRight.appendChild(contentRightMeal2);
    contentRight.appendChild(contentRightMeal3);
    contentRight.appendChild(contentRightMeal4);
    contentRight.appendChild(contentRightMeal5);
    contentRight.appendChild(contentRightMeal6);

    // styles //


    homeDiv.style.display = 'grid';
    homeDiv.style.gridTemplateColumns = '2fr 3fr';

    ////
    contentLeft.style.cssText = 'align-items: center; padding: calc(4.5rem + 3vh); display: flex; flex-direction : column; gap: 5rem';

    contentLeftParagraph.innerHTML = 'Live the food experience of the old cowboys, enjoy your western meals while listening to the live country music band';
    contentLeftParagraph.style.cssText = 'text-shadow:0 0 5px white;user-select: none;font-size : calc(4.5rem + 0.5vw); text-align:center';

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

    content.appendChild(homeDiv);

}

;

// https://i.ibb.co/wcZVXtY/steakist.png
// https://i.ibb.co/9NXTXWF/tamales.png
// https://i.ibb.co/WzBwgP8/frybread.png
// https://i.ibb.co/tLxGr7S/gentada.png
// https://i.ibb.co/BtKBTn6/gentito.png
// https://i.ibb.co/FhxB8m5/greenchilestew.png
// https://i.ibb.co/9VpKDjR/romana.png
//https://i.ibb.co/ZxZk4yt/restaurant-Bg.png



const menueInit = function(){ //populate menue

    const menuDiv = document.createElement('div');

    menuDiv.style.cssText = 'display:none; padding: 50px; gap: 1%';
    menuDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr)';

    for(let i = 0; i < mealArray.length; i++){ //create meal cards and append them to menueDiv

        const mealCard = document.createElement('div');
        const mealCardPicture = document.createElement('img');
        const mealCardName = document.createElement('h3');
        const mealCardPrice = document.createElement('p');

        mealCard.appendChild(mealCardPicture);
        mealCard.appendChild(mealCardName);
        mealCard.appendChild(mealCardPrice);

        //style

        mealCard.style.cssText = 'gap: 1%;display:flex; flex-direction:column; align-items:center';
        mealCardPicture.src = mealArray[i].pictureUrl;

        mealCardName.innerHTML = mealArray[i].name;
        mealCardName.style.cssText = 'font-size: calc(3.5rem + 1vw);text-shadow:0 0 5px white';

        mealCardPrice.innerHTML = `${mealArray[i].price} $`;
        mealCardPrice.style.cssText = 'font-size :calc(2.5rem + 1vw);text-shadow:0 0 5px white';

        menuDiv.appendChild(mealCard);
    };


    content.appendChild(menuDiv);

};

const contactInit = function(){

    const contactDiv = document.createElement('div');

    contactDiv.style.cssText = 'display:none;flex-direction:column; align-items:center;justify-content:center';

    const contactTitle = document.createElement('h1');
    const contactForm = document.createElement('form');
    const contactFormTextArea = document.createElement('textarea');
    const contactFormButton = document.createElement('button');

    contactTitle.innerHTML = 'Get in touch';
    contactTitle.style.cssText = 'text-shadow:0 0 5px white;user-select: none;font-size : calc(4.5rem + 0.5vw)';

    contactForm.style.cssText = 'gap: 1rem;display:flex; flex-direction:column; align-items:center;width: calc(30rem + 10vw);border: none; height:calc(30rem + 10vh)';
    
    contactFormTextArea.style.cssText ='color: white;font-size : calc(1.5rem + 0.5vw);background-color:#80473b62;outline:none;border-radius: 1rem;border: 1rem ridge #813d2e; width: 80%; height: 80%';

    contactFormButton.innerHTML = 'Submit';
    contactFormButton.style.cssText ='border-radius: 15px;padding: 1rem 5rem;font-size: 2rem;color:white;background-color:#000000';

    contactFormButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if((contactFormTextArea.value !='')){
        alert('Thank you! We will get back at you as soon as possible');
        contactFormTextArea.value = '';
        };
    });

    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactForm);
    contactForm.appendChild(contactFormTextArea);
    contactForm.appendChild(contactFormButton);

    content.appendChild(contactDiv);

};







const clearContent = function(){ 

    const contentChildren = content.children;
    
    for( let i = 0; i <= contentChildren.length - 1; i++){
    contentChildren[i].style.display = 'none';
    };

};