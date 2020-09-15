import {carouselModel} from "../model/model.mjs";

class Carousel extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('main-carousel-template');
        template.innerHTML = carouselModel;
        this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
    }

    slider() {
        const shadowDom = document.querySelector('main-carousel').shadowRoot;
        const firstSlide = shadowDom.querySelector('.carousel-item:first-child');
        const activeSlide = shadowDom.querySelector('.show');
        const nextSlide = activeSlide.nextElementSibling;
        const lastSlide = shadowDom.querySelector('.carousel-inner').lastElementChild;
        activeSlide
            ?
            nextSlide ?
            (activeSlide.classList.remove('show'), nextSlide.classList.add('show')) :
            (firstSlide.classList.add('show'), lastSlide.classList.remove('show')) :
            alert('unexpected error');
    }
}

window.customElements.define('main-carousel', Carousel);
window.onload = setInterval(Carousel.prototype.slider, 2000);