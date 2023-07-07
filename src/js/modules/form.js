export function form() {
  let selectButtons = document.querySelectorAll(".product-form__item-button");
  let select = document.querySelectorAll(".product-form__sublist");
  let subitems = document.querySelectorAll(".product-form__subitem");

  for (let i = 0; i < selectButtons.length; i++) {
    selectButtons[i].addEventListener('click', function (e) {
      e.preventDefault();
      select[i].classList.toggle('product-form__sublist--active');
    })
  }
  for (const item of subitems) {
    item.addEventListener('click', function (e) {
      let el = e.target;
      while ((el = el.parentElement) && !el.classList.contains("product-form__item"));
      let elem = el.querySelector(".product-form__input");
      elem.value = e.target.textContent;
      select.forEach(element => {
        element.classList.remove('product-form__sublist--active')
      });
    });
  }
}
