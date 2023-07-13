import * as slider from './modules/slider.js';
import * as form from './modules/form.js';
import * as header from './modules/header.js';
import Swiper, { Navigation, Pagination } from 'swiper';

header.header();
slider.slider();
form.form();

// инициализация копии слайдера
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
