import $ from 'jquery';

class TestiSlider {
    constructor() {
        this.sliderLength = $('.testimonials-slider__item').length;
        this.linkParent = $('.testimonials-slider__controls');
        this.current = 1;
        this.interval = 2500;
        this.timer;
        this.createLink();
    }

    //create the control links, the circle ones
    createLink() {
        for(var i = 1; i <= this.sliderLength; i++) {
            $(this.linkParent).append('<a href="#" class="testimonials-slider--link" data-link="'+ i +'"><a>');
        }
        $('a[data-link="1"]').addClass('active');
    }

    slideTesti() {
        
    }
    

    
}

export default TestiSlider;