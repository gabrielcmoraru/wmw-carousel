/**
 * Section: Featured collection
 * ------------------------------------------------------------------------------
 * Featured collection configuration for complete theme support
 * - https://github.com/Shopify/theme-scripts/tree/master/packages/theme-sections
 *
 * @namespace featuredCollection
 */
import {register} from '@shopify/theme-sections';
import Swiper from 'swiper';
import $ from 'jquery';

/**
 * Featured collection constructor
 * Executes on page load as well as Theme Editor `section:load` events.
 *
 * @param {string} container - selector for the section container DOM element
 */
register('featured-collection', {

  init() {
    window.console.log('Initialising featured collection section');
    initCarousel();
  },

  publicMethod() {
    // Custom public section method
  },

  _privateMethod() {
    // Custom private section method
  },

  // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad() {

    // Do something when a section instance is loaded
    this.init();
  },

  // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
  onUnload() {
    // Do something when a section instance is unloaded
  },

  // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
  onSelect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
  onDeselect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect() {
    // Do something when a section block is selected
  },

  // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
  onBlockDeselect() {
    // Do something when a section block is deselected
  },
});

// This can be initialised in a more reusable way, but not quite relevant in this case
const initCarousel = () => {
  const carouselSelector = $('.js-carousel');
  const nextEl = $('.swiper-button__next');
  const prevEl = $('.swiper-button__prev');
  const carousel = new Swiper(carouselSelector, {
    allowTouchMove: true,
    navigation: {
      nextEl,
      prevEl,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    speed: 250,
    breakpoints: {
      // when window width is >= 480px
      480: {
        centeredSlides: false,

        spaceBetween: 20,
        slidesPerView: 'auto',
      },
    },
  });
  console.log(carousel);
};
