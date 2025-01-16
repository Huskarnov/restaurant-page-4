import {homeInit, clearContent, content, menueInit} from './domManager.js';
import './styles.css';

homeInit();
menueInit();

(function navBarButtonEvents(){           //nav buttons click events

    const nav = document.querySelector('nav');

    nav.children[0].addEventListener('click', ()=>{

        clearContent(); 
        content.children[0].style.display = 'grid';
        // homeInit();

    });

    nav.children[1].addEventListener('click', ()=>{

        clearContent(); 
        content.children[1].style.display = 'grid';
        
        console.log(content.children[1]);
    });

    nav.children[2].addEventListener('click', ()=>{

        clearContent(); 

    });

})();