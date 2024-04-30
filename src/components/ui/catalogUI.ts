import { Product } from "../buisness/productList"
import { AllModal } from "./modalUI"
export class CatalogUI {
    main: HTMLElement
    cardTemplate: HTMLTemplateElement
    modal: AllModal

    constructor(modal: AllModal) {
        this.main = document.querySelector('.gallery')
        this.cardTemplate = document.querySelector('#card-catalog')
        this.modal = modal
    }

    renderCatalog(products: Product[]) {
        products.forEach((product) => {
            const card = this.createCard(product)
            card.addEventListener('click', () => {
                console.log(123)
                this.modal.modalOpen(this.modal.cardModal)
            })
            this.main.append(card)
        })
    }

    createCard(product: Product) {
        const cardContent = this.cardTemplate.content.cloneNode(true) as HTMLButtonElement
        const category = cardContent.querySelector('.card__category')
        const title = cardContent.querySelector('.card__title')
        const price = cardContent.querySelector('.card__price')


        category.textContent = product.category

        category.classList.add(this.addCategoryClass(product.category))
        title.textContent = product.title
        price.textContent = `${product.price} синопсов`

        return cardContent
    }

    

    addCategoryClass(category: string) {
        if(category === 'другое'){
            return 'card__category_other'
        } else if(category === 'софт-скил') {
            return 'card__category_soft'
        }
        else if(category === 'хард-скил') {
            return 'card__category_hard'
        }
        else if(category === 'кнопка') {
            return 'card__category_button'
        }
        else if(category === 'дополнительное') {
            return 'card__category_additinal'
        }
        else {
            return ' '
        }
        
    }
}
