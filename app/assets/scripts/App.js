import $ from 'jquery';
import AnimateOnScroll from './modules/AnimateOnScroll';
import StickyHeader from './modules/StickyHeader';
import MobileMenu from './modules/MobileMenu';
import TestiSlider from './modules/TestiSlider';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var testiSlider = new TestiSlider();
new AnimateOnScroll($('.dog-listings__col'), "70%", "animated fadeInLeft");
new AnimateOnScroll($('.welcome--dog'), "60%", "animated fadeInUp");
new AnimateOnScroll($('.dog-house'), "20%", "animated lightSpeedIn");