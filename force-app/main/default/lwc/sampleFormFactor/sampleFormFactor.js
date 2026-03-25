import { LightningElement } from 'lwc';

export default class SampleFormFactor extends LightningElement {
    activeMenuItem = null;

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('SampleFormFactor component initialized');
    }

    handleMenuClick(event) {
        event.preventDefault();
        const clickedLink = event.target;
        const menuItem = clickedLink.getAttribute('data-item');

        // Remove underline from previously active menu item
        const allLinks = this.template.querySelectorAll('.menu-list a');
        allLinks.forEach((link) => {
            link.classList.remove('active');
        });

        // Add underline to clicked menu item
        clickedLink.classList.add('active');
        this.activeMenuItem = menuItem;

        console.log('Menu item clicked:', menuItem);
    }

    handleProfileClick() {
        console.log('Profile avatar clicked');
    }
}
