

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);  

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();




(() => {
  document.querySelector('.client-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    e.currentTarget.reset();
  });
  
})();


/*
// Закріплення верхнього header
const { height: pageHeaderHeight } = document.querySelector('.page-header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;

// Перекриття фіксованого header
document.querySelector('.backdrop-block').style.top = `${-pageHeaderHeight}px`;
*/


(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');

  const menuBtnClose = document.querySelector('[data-menu-button-close]');

  const mobilMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {

    const expanted = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;


    menuBtnRef.classList.toggle('is-open');

    mobilMenuRef.classList.toggle('is-open');

    menuBtnRef.setAttribute('aria-expanded', !expanted);
  });


 menuBtnClose.addEventListener('click', () => {

    const expanted = menuBtnRef.getAttribute('aria-expanded') === 'false' || true;

    mobilMenuRef.classList.toggle('is-open');

    menuBtnRef.setAttribute('aria-expanded', !expanted);
  });
})();

