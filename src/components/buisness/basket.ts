import { Product } from "./productList";

export class Basket {
    basketItems: Product []
    constructor() {
        this.basketItems = []
    }

    addBasket(product:Product){
        this.basketItems.push(product)
    }

    removeBasket(product:Product){
        this.basketItems.filter
    }
}