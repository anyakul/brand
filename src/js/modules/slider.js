import Swiper, { Navigation, Pagination } from 'swiper';


export function slider() {
  Swiper.use([Navigation, Pagination]);
  var swiper = new Swiper('.good__container', {
    spaceBetween: 30,
    slidesPerView: 1,
    direction: 'horizontal',
    clicable: true,
    loop: true,
    navigation: {
      prevEl: '.good__prev',
      nextEl: '.good__next',
      clickable: true,
    },
  });
}
