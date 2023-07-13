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

  const productsSwiper = new Swiper('.products', {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.pagination__button-next',
      prevEl: '.pagination__button-prev',
    },
    pagination: {
      el: '.pagination__list',
      clickable: true,
      type: 'custom',
      dynamicBullets: true,
      dynamicMainBullets: 5,
      dynamicBullets: true,
      dynamicMainBullets: 5,
      renderCustom: function (swiper, current, total) {
        var paginationHtml = '';
        for (var i = 1; i <= total; i++) {
          if (i == current) {
            paginationHtml += `<li class="pagination__item pagination__item--active">${i}</li>`
          } else if (i > current - 6 && i < current + 6) {
            paginationHtml += `<li class="pagination__item">${i}</li>`
          } else if (i == total - 1) {
            paginationHtml += `<li class="pagination__item pagination__item--dot">...</li>`
          } else if (i == 1) {
            paginationHtml += `<li class="pagination__item pagination__item--dot">...</li>`
          } else if (i == total) {
            paginationHtml += `<li class="pagination__item">${i}</li>`
          }
        }
        return paginationHtml
      },
      hashNavigation: {
        watchState: true,
      },
    }
  });
}
