export function mobileMenu() {
  let menuButton = document.querySelector(".header-button-burger")
  let menu = document.querySelector(".header")

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('header-active')
  })
}
