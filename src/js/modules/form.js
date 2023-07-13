export function form() {
  let productForm = document.querySelector(".product-form");
  let filterButton = document.querySelector(".product-form__filter-button");
  let filterList = document.querySelector(".product-form__filter");
  let filterSubListButton = document.querySelectorAll(".product-form__filter-item-button");
  let filterSubList = document.querySelectorAll(".product-form__filter-item-sublist");
  let selectButtons = document.querySelectorAll(".product-form__item-button");
  let select = document.querySelectorAll(".product-form__sublist");
  let subitems = document.querySelectorAll(".product-form__subitem");

  if (productForm != null) {
    for (let i = 0; i < selectButtons.length; i++) {
      selectButtons[i].addEventListener('click', function (e) {
        e.preventDefault();
        select[i].classList.toggle('product-form__sublist--active');
      })
    }

    filterButton.addEventListener('click', function (e) {
      e.preventDefault();
      filterList.classList.add('product-form__filter--active');
    })

    for (let i = 0; i < filterSubListButton.length; i++) {
      filterSubListButton[i].addEventListener('click', function (e) {
        e.preventDefault();
        filterSubList[i].classList.toggle('product-form__sublist--active');
        filterSubListButton[i].classList.toggle('product-form__filter-item-button--active');
      })
    }
  }
}
