import {homeInit,menueInit, contactInit, clearContent, content, } from './domManager.js';
import './styles.css';

homeInit();
menueInit();
contactInit();
(function navBarButtonEvents(){           //nav buttons click events

    const nav = document.querySelector('nav');

    nav.children[1].addEventListener('click', ()=>{

        clearContent(); 
        content.children[0].style.display = 'grid';

    });

    nav.children[2].addEventListener('click', ()=>{

        clearContent(); 
        content.children[1].style.display = 'grid';
        
    });

    nav.children[3].addEventListener('click', ()=>{

        clearContent(); 
        content.children[2].style.display = 'flex';

    });

})();

