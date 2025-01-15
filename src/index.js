import {domInit, clearContent} from './domManager.js';
import './styles.css';

domInit();


(function navBarButtonEvents(){           //nav buttons click events

    const nav = document.querySelector('nav');

    nav.children[0].addEventListener('click', ()=>{

        clearContent(); 
        domInit();

    });

    nav.children[1].addEventListener('click', ()=>{

        clearContent(); 

    });

    nav.children[2].addEventListener('click', ()=>{

        clearContent(); 

    });

})();