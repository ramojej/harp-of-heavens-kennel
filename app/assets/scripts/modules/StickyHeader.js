import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.welcomeLink = $('#welcome-link');
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.welcomeLink.smoothScroll();
    }
}

export default StickyHeader;