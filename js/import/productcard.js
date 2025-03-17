import createElement from '../../libs/assets/create-element.js';
import escapeHtml from '../../libs/assets/escape-html.js';

export default class ProductCard {
    constructor(product) {
        this.product = product;
        this.render();
        this.addEventListeners();
    }

    render() {
        this.elem = createElement(`<div class="card">
            <div class="card__top">
                <img 
                    src="/img/product/${this.product.image}"
                    class="card__image"
                    alt="product"
                />
                <span class="card__price">€${this.product.price.toFixed(2)}</span>
            </div>
            <div class="card__body">
                <div class="card__title">${escapeHtml(this.product.name)}</div>
                <button type ="button" class="card__button">
                    <img src="/img/icon/plus-icon.svg" alt="icon" />
                </button>
            </div>
	    </div>`);
    }

    addEventListeners() {
        this.elem.onclick = (event) => this.onClick(event);
    }

    onClick(event) {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
            detail: this.product.id,
            bubbles: true
        }));
    }
}