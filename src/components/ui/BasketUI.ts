// 1. Метод, который на основе массива товаров (basketItems) 
// будет создавать html => список всех добавленных товаров

// 2. Метод, берущий кнопку "добавить в корзину" и наделяющий кнопку функций addBasket

// 3. Метод, берущий кнопку "ведра" и наделяющий кнопку функций removeBasket
import { AllModal } from "./modalUI";
import { Basket } from "../buisness/basket";
import { Product } from "../buisness/productList";
import { Render } from "./render";

export class BasketUi extends Render {
    addProductButton: Element
    basketList: HTMLElement
    basketCounter: Element
    totalPrice:Element
    orderButton: HTMLButtonElement


    constructor(public modal: AllModal, public basket: Basket) {
        super()
        this.basketList = this.modal.basketModal.querySelector('.basket__list')
        this.addProductButton = this.modal.cardModal.querySelector('.card__button')
        this.basketCounter = document.querySelector('.header__basket-counter')
        this.totalPrice = this.modal.basketModal.querySelector('.basket__price')
        this.orderButton = this.modal.basketModal.querySelector('.basket__button')
        console.log(this.orderButton)

        this.addProductButton.addEventListener('click', ()=> {
            const product = this.basket.addBasket()
            if(product) {
                const basketItem = this.createBasketItems(product, this.basket.basketItems.length)
                this.basketList.append(basketItem)
                this.initBasket()
            }
        })
        this.orderButton.addEventListener('click',()=>{
            this.modal.modalOpen(this.modal.orderModal)
        })
    }

      

    // 1. Кликаем по кнопке "Добавить в корзину":
        // a.Нужный продукт добавлять в массив basketItems
        // b.Аппендить добавленный в массив продукт в ul

renderBasketItems(){
        this.basketList.innerHTML = ''
        this.renderList(this.basket.basketItems,(arrayItem, index: number) => this.createBasketItems(arrayItem, index),this.basketList )

}

createBasketItems(product:Product, index: number) {
    const contentBasketItems = (document.querySelector('#card-basket') as HTMLTemplateElement).content as DocumentFragment
    const basketItem = contentBasketItems.querySelector('.basket__item')
    const basketItemCopy = basketItem.cloneNode(true) as HTMLElement
    const basketIndex = basketItemCopy.querySelector('.basket__item-index')
    const basketCardTitle = basketItemCopy.querySelector('.card__title')
    const basketCardPrice = basketItemCopy.querySelector('.card__price')
    const basketItemDelete = basketItemCopy.querySelector('.basket__item-delete')


    basketIndex.textContent = `${index}`
    basketCardTitle.textContent = product.title
    basketCardPrice.textContent = `${product.price || 0} синопсов`  
    basketItemDelete.addEventListener('click', ()=> {
        this.basket.removeBasket(product.id)
        this.initBasket()
    })

    return basketItemCopy
}

    changeBasketCounter(){
        this.basketCounter.textContent = `${this.basket.showBasketCounter()}`
    }

    showCalculateTotalPrice(){
        this.totalPrice.textContent = `${this.basket.calculateTotalPrice()} синапсов`
    }

    resetBasket() {
        this.basket.cleanBasket()
        this.initBasket()
    }
    
    toggleDisableButton(){
        if(this.basket.basketItems.length === 0){
            this.orderButton.disabled = true
        }
        else{
            this.orderButton.disabled = false
        }
    }

    initBasket() {
        this.renderBasketItems()
        this.changeBasketCounter()
        this.toggleDisableButton()
        this.showCalculateTotalPrice()
    }

    // 1. basketItems.length > 0   => кнопка активна, без аттрибута disable
    // 2. basketItems.length === 0  => кнопка неактивна, с аттрибутом disable

}