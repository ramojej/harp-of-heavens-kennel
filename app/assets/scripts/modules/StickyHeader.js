import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.welcomeLink = $('#welcome-link');
        this.headerTriggerElement = $('.row--kv');
        this.addSmoothScrolling();
        this.createHeaderWaypoint();
        
    }

    addSmoothScrolling() {
        this.welcomeLink.smoothScroll({offset: -75, speed: 500});
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if(direction == 'down') {
                    that.siteHeader.addClass('site-header--sticky');
                } else {
                    that.siteHeader.removeClass('site-header--sticky');
                }
            }
        });
    }

}

export default StickyHeader;