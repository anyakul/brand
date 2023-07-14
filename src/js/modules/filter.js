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
}
