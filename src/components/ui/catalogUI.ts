import { Product } from "../buisness/productList"
import { AllModal } from "./modalUI"
import { Render } from "./render"

export class CatalogUI extends Render {
    main: HTMLElement
    cardTemplate: HTMLTemplateElement

    constructor() {
        super()
        this.main = document.querySelector('.gallery')
        this.cardTemplate = document.querySelector('#card-catalog')
    }
    
    renderCatalog(products: Product[], funcClick: (productId: string) => void) {
        this.renderList<Product>(
            products,
            (arrayItem) => this.createCard(arrayItem),
            this.main,
            (card: HTMLButtonElement, product: Product) => this.addCardClick(card, product, funcClick )
        ) 
    }

    addCardClick(card: HTMLButtonElement, product: Product, callback: (id: string) => void) {
        card.addEventListener('click', () => {
            callback(product.id)
        })
    }


    // 1. кликает по карточке и получает информацию по карточке по которой произошел клик 

    createCard(product: Product) {  // {id, category,title,price, description}
        const cardContent = this.cardTemplate.content as DocumentFragment
        const cardButton = cardContent.querySelector('.gallery__item')
        const cardButtonCopy = cardButton.cloneNode(true) as HTMLElement
        const category = cardButtonCopy.querySelector('.card__category')
        const title = cardButtonCopy.querySelector('.card__title')
        const price = cardButtonCopy.querySelector('.card__price')
        const image = cardButtonCopy.querySelector('.card__image') as HTMLImageElement

        // 1. Создание строки
        // 2. Внутрь строчки вставить javascript
        // 3.  `   ${}`

        category.textContent = product.category
        image.src = `../images/cards/${product.image}`

        category.classList.add(this.getCategoryClass(product.category))
        title.textContent = product.title
        price.textContent = this.productPrice(product.price)

        return cardButtonCopy
    }
}
