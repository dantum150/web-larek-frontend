import { Product } from "../buisness/productList"

export class AllModal {
    modals: NodeListOf<Element>
    cardModal: Element
    basketModal: Element
    
    constructor() {
        this.modals = document.querySelectorAll('.modal')
        this.cardModal = this.modals[1]
        this.basketModal = this.modals[2]
    }

    setModal(product:Product) {
        const categoryModal = this.cardModal.querySelector('.card__category')
        const titleModal = this.cardModal.querySelector('.card__title')
        const textModal = this.cardModal.querySelector('.card__text')
        const priceModal = this.cardModal.querySelector('.card__price')

        categoryModal.textContent = product.category
        titleModal.textContent = product.title
        textModal.textContent = product.description
        priceModal.textContent =  `${product.price} синопсов`      
    }

    modalOpen(modal: Element){
        modal.classList.add('modal_active')
    }
    
    modalClose() {  
        this.modals.forEach((modal, index, array) => {
            const button = modal.querySelector('.modal__close')

            if(button) {
                button.addEventListener('click', () => {
                    modal.classList.remove('modal_active')
                })
            }
        })
    }
}

    






// 1. Получить массив кнопок
// 2. Циклом пробежаться по массиву
// 3. Каждой кнопке обработчик события (клик)
// 4. У модалки удалять класс modal_active