import { Product } from "../buisness/productList"
import { Render } from "./render"
export class AllModals extends Render {
    modal: Element
    modalContent: HTMLElement
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
        this.modalContent = this.modal.querySelector('.modal__content')
    }

    setModal(product:Product) {
        const categoryModal = this.cardModal.querySelector('.card__category')
        const titleModal = this.cardModal.querySelector('.card__title')
        const textModal = this.cardModal.querySelector('.card__text')
        const priceModal = this.cardModal.querySelector('.card__price')
        const buttonModal = this.cardModal.querySelector('.card__button') as HTMLButtonElement

        categoryModal.textContent = product.category

        categoryModal.classList.add(this.getCategoryClass(product.category))

        titleModal.textContent = product.title
        textModal.textContent = product.description
        priceModal.textContent = this.setProductPrice(product.price)

        buttonModal.disabled = !(!!product.price)
        

    }

   
    openModal(modal: Element){
        this.modalContent.innerHTML = ''
        this.modalContent.append(modal)
        this.modal.classList.add('modal_active')
    }
    
    setCloseListeners() {  
      
        this.modal.addEventListener('click', (event: Event)=> {

            const target = event.target as HTMLDivElement
    
            if(target.classList.contains('modal') || target.classList.contains('modal__close')) {
               this.modal.classList.remove('modal_active') 
            }
        })
    }
}



    






// 1. Получить массив кнопок
// 2. Циклом пробежаться по массиву
// 3. Каждой кнопке обработчик события (клик)
// 4. У модалки удалять класс modal_active