import { Product } from "../buisness/productList"
import { GeneralUI } from "./GeneralUI"
export class AllModal extends GeneralUI  {
    modal: Element
    modals: NodeListOf<Element>
    cardModal: Element
    basketModal: Element
    orderModal: Element
    contactsModal: Element
    successModal: Element
    
    constructor() {
        super() 
        this.modal = document.querySelector('#modal-container')
        this.modals = document.querySelectorAll('.modal')
        this.cardModal = (document.querySelector('#card-preview') as HTMLTemplateElement).content.querySelector('.card_full')
        this.basketModal = (document.querySelector('#basket') as HTMLTemplateElement).content.querySelector('.basket')
        this.orderModal = (document.querySelector('#order') as HTMLTemplateElement).content.querySelector('.form')   
        this.contactsModal = (document.querySelector('#contacts') as HTMLTemplateElement).content.querySelector('.form')   
        this.successModal = (document.querySelector ('#success') as HTMLTemplateElement).content.querySelector('.order-success')
         
    }

    setModal(product:Product) {
        const categoryModal = this.cardModal.querySelector('.card__category')
        const titleModal = this.cardModal.querySelector('.card__title')
        const textModal = this.cardModal.querySelector('.card__text')
        const priceModal = this.cardModal.querySelector('.card__price')

        categoryModal.textContent = product.category
        titleModal.textContent = product.title
        textModal.textContent = product.description
        priceModal.textContent = this.productPrice(product.price)
    }

   
    modalOpen(modal: Element){
        const modalContent = this.modal.querySelector('.modal__content')
        modalContent.innerHTML = ''
        modalContent.append(modal)
        this.modal.classList.add('modal_active')
    }
    
    modalClose() {  
        const button = this.modal.querySelector('.modal__close')
        button.addEventListener('click', () => {
            this.modal.classList.remove('modal_active')
          })
    }
}

    






// 1. Получить массив кнопок
// 2. Циклом пробежаться по массиву
// 3. Каждой кнопке обработчик события (клик)
// 4. У модалки удалять класс modal_active