/* eslint-disable import/extensions */
import Count from './cont.js';
import { SlideNav } from './slide.js';

const slide = new SlideNav('.Slide', '.slide-wraper');
slide.init();
slide.addControl();
Count();
