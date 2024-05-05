import { Product } from "../buisness/productList"
import { AllModal } from "./modalUI"
import { GeneralUI } from "./GeneralUI"
export class CatalogUI extends GeneralUI {
    main: HTMLElement
    cardTemplate: HTMLTemplateElement

    constructor() {
        super()
        this.main = document.querySelector('.gallery')
        this.cardTemplate = document.querySelector('#card-catalog')
    }

    renderCatalog(products: Product[], funcClick: (productId: string) => void) {
        products.forEach((product) => {
            const card = this.createCard(product)
            card.addEventListener('click', () => {
                // 1. Сделать гет-запрос (productId) => product
                // 2. Поместить наш объект в функцию setModal
                // 3. Открытие модалки
                // this.modal.modalOpen(this.modal.cardModal)
                funcClick(product.id)      // api.get(`product/${productId}`)  => product  => setModal(product) => openModal(modal.cardModal)
            })
            this.main.append(card)
        })
    }

    // 1. кликает по карточке и получает информацию по карточке по которой произошел клик 
    // 2. 

    createCard(product: Product) {  // {id, category,title,price, description}
        const cardContent = this.cardTemplate.content as DocumentFragment
        const cardButton = cardContent.querySelector('.gallery__item')
        const cardButtonCopy = cardButton.cloneNode(true) as Element
        const category = cardButtonCopy.querySelector('.card__category')
        const title = cardButtonCopy.querySelector('.card__title')
        const price = cardButtonCopy.querySelector('.card__price')


        category.textContent = product.category
        
        category.classList.add(this.addCategoryClass(product.category))
        title.textContent = product.title
        price.textContent = this.productPrice(product.price)

        return cardButtonCopy
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
