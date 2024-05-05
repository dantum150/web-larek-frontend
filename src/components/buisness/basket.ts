import { Product } from "./productList";

export class Basket  {
    basketItems: Product []
    selectedProduct: Product
    constructor() {
        this.basketItems = []   // {id price title p category}
    }

    addBasket(){
        const foundBasketItem = this.basketItems.find((product) => product.id === this.selectedProduct.id)

        if(!foundBasketItem) {
            this.basketItems.push(this.selectedProduct)
            return this.selectedProduct
        }
        return this.selectedProduct
    }

    removeBasket(productID: string){
        this.basketItems = this.basketItems.filter((product) => {
           return product.id !== productID
        })  
    }
}

    

