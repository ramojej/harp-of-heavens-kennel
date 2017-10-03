import $ from 'jquery';

class TestiSlider {
    constructor() {
        this.sliderLength = $('.testimonials-slider__item').length;
        this.linkParent = $('.testimonials-slider__controls');
        this.current = 1;
        this.interval = 2000;
        this.timer;
        this.createLink();
        this.slideTesti();
        this.events();
    }

    //create the control links, the circle ones
    createLink() {
        for(var i = 1; i <= this.sliderLength; i++) {
            $(this.linkParent).append('<a href="#" class="testimonials-slider--link" data-link="'+ i +'"><a>');
        }
        $('a[data-link="1"]').addClass('active');
    }


    //rotate the testimonial texts
    slideTesti() {
        var that = this;

        that.timer = setInterval(function() {
            if(that.current !== that.sliderLength) {
                that.showTestimonial(that.current += 1);
            } else {
                that.current = 1;
                that.showTestimonial(that.current);        
            }
        }, this.interval);
    }

    events() {
        var that = this;

        $('.testimonials-slider--link').on('click', function(e) {
            e.preventDefault();
            this.current = $(this).data('link');
            clearInterval(that.timer); //resets the timer for rotation
            that.slideTesti(); //slides the texts again
            console.log(that.slideTesti)
            that.showTestimonial(this.current);
        });
    }


    showTestimonial(testiNumber) {
        $('.testimonials__slider-content .testimonials-slider__item').removeClass('active');
        $('div[data-item="'+ testiNumber +'"]').addClass('active');

        $('.testimonials-slider--link').removeClass('active');
		$('a[data-link="'+ testiNumber +'"]').addClass('active');
    }
    

    
}

export default TestiSlider;