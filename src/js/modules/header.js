export function header() {
  let headerButton = document.querySelector(".menu__button");
  let headerMenu = document.querySelector(".menu__submenu");

  headerButton.addEventListener('click', function (e) {
    e.preventDefault();
    headerMenu.classList.toggle('active');
  })
}
