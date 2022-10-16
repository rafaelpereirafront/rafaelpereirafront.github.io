/* eslint-disable import/extensions */
import { SlideNav } from './slide.js';
import initDrop from './drop.js';

const slide = new SlideNav('.Slide', '.slide-wraper');
slide.init();
slide.addArrow('.leftArrow', '.rightArrow');
slide.addControl();
slide.activePrevSlide();
initDrop();
