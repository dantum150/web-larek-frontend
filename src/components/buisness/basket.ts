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
        return false
    }

    removeBasket(productID: string){
        this.basketItems = this.basketItems.filter((product) => {
           return product.id !== productID
        })  
    }
    
    showBasketCounter(){
      return this.basketItems.length
    }

    calculateTotalPrice(){
        let total = 0
        this.basketItems.forEach((product:Product)=> {
          total = product.price+total
        })
        return total
    }

}
// 1. Basket => получить количество товаров в корзине
// 2. BasketUi => Берём спан и подставляем в него количество товаров в корзине
    
