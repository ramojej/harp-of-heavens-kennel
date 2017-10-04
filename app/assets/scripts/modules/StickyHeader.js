import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.welcomeLink = $('#welcome-link');
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.welcomeLink.smoothScroll({offset: -75, speed: 500});
    }
}

export default StickyHeader;