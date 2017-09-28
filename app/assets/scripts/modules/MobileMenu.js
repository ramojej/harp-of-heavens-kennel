import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.burger-container');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.siteHeader.toggleClass('menu-opened');
    }
}

export default MobileMenu;