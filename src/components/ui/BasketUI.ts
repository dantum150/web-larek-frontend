// 1. Метод, который на основе массива товаров (basketItems) 
// будет создавать html => список всех добавленных товаров

// 2. Метод, берущий кнопку "добавить в корзину" и наделяющий кнопку функций addBasket

// 3. Метод, берущий кнопку "ведра" и наделяющий кнопку функций removeBasket
import { AllModal } from "./modalUI";
import { Basket } from "../buisness/basket";
import { Product } from "../buisness/productList";

export class BasketUi {
    addProductButton: Element
    basketList: Element
    basketCounter: Element
    totalPrice:Element
    orderButton: Element


    constructor(public modal: AllModal, public basket: Basket) {
        this.basketList = this.modal.basketModal.querySelector('.basket__list')
        this.addProductButton = this.modal.cardModal.querySelector('.card__button')
        this.basketCounter = document.querySelector('.header__basket-counter')
        this.totalPrice = this.modal.basketModal.querySelector('.basket__price')
        this.orderButton = this.modal.basketModal.querySelector('.basket__button')


        this.addProductButton.addEventListener('click', ()=> {
            const product = this.basket.addBasket()
            if(product) {
                const basketItem = this.createBasketItems(product, this.basket.basketItems.length)
                this.basketList.append(basketItem)
                this.changeBasketCounter()
                this.showCalculateTotalPrice()
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
        this.basket.basketItems.forEach((product, index)=>{
        const basketItem = this.createBasketItems(product, index + 1)
        this.basketList.append(basketItem) 
     })
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
        this.renderBasketItems()
        this.changeBasketCounter()
        this.showCalculateTotalPrice()
    })

    return basketItemCopy
}

    changeBasketCounter(){
        this.basketCounter.textContent = `${this.basket.showBasketCounter()}`
}

    showCalculateTotalPrice(){
        this.totalPrice.textContent = `${this.basket.calculateTotalPrice()} синопсов`
    }



}
    