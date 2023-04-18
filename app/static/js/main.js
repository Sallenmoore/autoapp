import * as autojs from './autojs/base.js';
import * as autowidgets from './autojs/widgets.js';

//===My document.ready() handler...
document.addEventListener("DOMContentLoaded", () => {
  //=== Initialize widgets
  console.log(autojs);
  var mm = new autowidgets.MobileMenu();

  //=== do some code stuff...

  //--Set up events
  bindEvents();
});

//===This function handles event binding for anything on the page
//===Bind to existing functions, not anonymous functions

function bindEvents() {

}

//===Then everything below this is all of the other declared functions...

