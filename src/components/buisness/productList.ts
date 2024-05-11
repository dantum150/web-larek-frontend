export interface Product {
  id: string
  description: string
  image: string
  title: string
  category:string
  price: number
}


export class ProductList {
    products: Product[] = []

    constructor(products:Product[] = []) {
        this.products = products
    }

    getProducts() {
        return this.products 
    }
}
