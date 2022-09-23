import lax from 'lax.js';
import Alpine from 'alpinejs';

import "./../css/glitchAndTwerk.scss";

window.Alpine = Alpine;
 
Alpine.start();

window.onload = function () {
    lax.init()
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    lax.addElements('.first-element', {
      scrollY: {  
        opacity: [
          [0, 500],
          [1, 0]
        ]
      }
    });
    lax.addElements('.second-element', {
      scrollY: {  
        opacity: [
          [200, 600],
          [0, 1]
        ]
      }
    })
    lax.addElements('.third-element', {
      scrollY: {  
        opacity: [
          [500, 900],
          [0, 1]
        ]
      }
    })
  }