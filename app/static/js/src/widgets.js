//==== Loader
// Usage:
//   <div id="loading-container-id"></div>
//   <script>
//     new Loader('loading-container-id');
//   </script>
export class Loader {
  constructor() {
    let load_anim = document.createElement('div');
    load_anim.classList.add('loader');
    this.loader = document.createElement('div');
    this.loader.classList.add('is-loading');
    this.loader.classList.add('is-hidden');
    this.loader.appendChild(load_anim);
  }
  remove() {
    this.loader.classList.add('is-hidden');
  }
  show(parent_id) {
    this.loader.classList.remove('is-hidden');
    if (parent_id) {
      get_object_by_id(parent_id).insertBefore(this.loader, get_object_by_id(parent_id).firstChild);
    } else {
      document.body.insertBefore(this.loader, document.body.firstChild);
    }
  }
}
//==== Mobile Menu
// Usage:
//   <div class="burger" id="burger"></div>
//   <div class="slideout-menu" id="slideout-menu">
//     <ul>
//       <li class=""><a href="#">Home</a></li>
//     </ul>
//   </div>
export class MobileMenu {
  constructor(menu_toggle_id = "burger") {
    //#nav-links
    var slideout_menu = get_element_by_id("slideout-menu");

    var menu_button = get_element_by_id(menu_toggle_id);

    menu_button.addEventListener("click", () => {
      menu_button.classList.toggle("is-active");
      menuclose_button.classList.toggle("is-active");
      slideout_menu.classList.toggle("menu-open");
    });

    let close_menu = document.createElement("div");
    close_menu.classList.add("close-modal");
    close_menu.innerHTML = "<iconify-icon icon='material-symbols:close'></iconify-icon>";

    close_menu.addEventListener('click', function (e) {
      menu_button.classList.toggle("is-active");
      menuclose_button.classList.toggle("is-active");
      slideout_menu.classList.toggle("menu-open");
    });
    slideout_menu.insertBefore(close_modal, slideout_menu.firstChild);
  }
}

//==== Modals
// Usage:
//   <div class="open-modal" target="modal1"></div>
//   <div class="modal" id="modal1"></div>
//
get_objects_by_class('open-modal').forEach((modal_trigger) => {
  let modal = get_object_by_id(modal_trigger.dataset.target);

  modal_trigger.addEventListener('click', function (e) {
    modal.classList.add("is-active");
  });

  let close_modal = document.createElement("div");
  close_modal.classList.add("close-modal");
  close_modal.innerHTML = "<iconify-icon icon='material-symbols:close'></iconify-icon>";
  modal.querySelector(".modal__content").appendChild(close_modal);

  close_modal.addEventListener('click', function (e) {
    modal.classList.remove("is-active");
  });
});

//==== Tabs
// Usage: 
//   <ul class="tabs__list">
//      <li class="tab" data-target="tab1">Tab 1</li>
//   </ul>
//   <div class="tab-panel" id="tab1"></div>
//
export class Tab {
  constructor(tab_id = "tabs__list") {
    get_objects_by_class(tab_id).forEach((tabs) => {
      tabs.querySelectorAll("li").forEach((tab_button) => {

        var target = tab_button.dataset.target;
        if (target) {
          tab_button.addEventListener("click", () => {

            get_objects_by_class("tab-panel").forEach((panel) => {
              if (panel.id == target) {
                show(panel);
                panel.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth',
                  inline: 'start'
                });
                tab_button.classList.add("is-active");
              } else {
                hide(panel);
                tab_button.classList.remove("is-active");
              }
            });
          });
        }
      });
    });
  }
}
//==== Tooltips
export class Tooltip { }
//==== Tags
export class Tag { }
//==== Popovers
export class Popover { }
//==== Dropdowns
export class DropDown { }
//==== Collapsibles
export class Collapsible { }
//==== Accordions
export class Accordion { }
//==== Carousels
export class Carousel { }

//==== Progress Bar
export class ProgressBar { }

//==== Toasts
//Usage:
//  new Toasted("Hello World", 3000, "toast", "center");
export class Toasted {
  constructor(msg, duration = 3000, cn = "toast", position = "center") {
    Toastify({
      text: msg,
      duration: duration,
      className: cn,
      position: position,
      offset: { x: 0, y: 50 },
    }).showToast();
  }
}

//==== Animations

