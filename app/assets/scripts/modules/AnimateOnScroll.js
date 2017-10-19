import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class AnimateOnScroll {
    constructor(els, offset, animation) {
        this.itemsToAnimate = els;
        this.offsetPercentage = offset;
        this.animation = animation;
        this.hideInitially();
        this.countUp();
        this.createWaypoints();
        this.addDelay();
    }

    //hide items at page load
    hideInitially() {
        $('.dog-listings__col, .welcome--dog').addClass('hide');
    }

    countUp() {
        $('.stats--num').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
            countNum: countTo
            },
        
            {
            duration: 3000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }

            });
        });
    }



    createWaypoints() {
        var that = this;
        
        this.itemsToAnimate.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass(that.animation);
                },
                offset: that.offsetPercentage
            });
        });
    }

    addDelay() {
        $('.dog-listings__col').eq(0).css({
            'animation-delay': '1s',
            '-webkit-animation-delay': '1s',
            '-moz-animation-delay': '1s'
        });
        $('.dog-listings__col').eq(1).css({
            'animation-delay': '0.5s',
            '-webkit-animation-delay': '0.5s',
            '-moz-animation-delay': '0.5s'
        });
    }
}

export default AnimateOnScroll;