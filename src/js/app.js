//import * as flsFunctions from './modules/functions.js'
import './modules/ibg.js'
import './modules/burger.js'
import './modules/swiper.js'
import './modules/spoiler.js'
import './modules/popup.js'
import './modules/scroll.js'
import './modules/dynamicAdapt.js'


document.addEventListener('click', function (e) {
  if (e.target.classList.contains("plus-btn")) {
    ++e.target.parentElement.querySelector("input").value;
  } else if (e.target.classList.contains("minus-btn") & e.target.parentElement.querySelector("input").value != 1) {
    --e.target.parentElement.querySelector("input").value;
  }
});

flsFunctions.isWebp();


