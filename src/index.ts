import { Api, ApiListResponse  } from './components/base/api';
import { ProductList } from './components/buisness/productList';
import './scss/styles.scss';
import { Product } from './components/buisness/productList';
import { CatalogUI } from './components/ui/catalogUI';
import { AllModal } from './components/ui/modalUI';
import { BasketUi } from './components/ui/BasketUI';
import { Basket } from './components/buisness/basket';
import { Order } from './components/buisness/order';
import { OrderUI } from './components/ui/OrderUI';
import { ContactsUI } from './components/ui/contactsUI';
import { LocalStorage } from './components/base/localstorage';
import { Validation } from './components/base/validation';
const api = new Api('https://larek-api.nomoreparties.co/api/weblarek/')

const productList = new ProductList()
const modal = new AllModal()
const storage = new LocalStorage()
const basket = new Basket(storage)
const order = new Order(basket)
const orderUI = new OrderUI(modal, order)
const basketUi = new BasketUi(modal, basket)
const validation = new Validation(order)

validation.initValidation()
basketUi.initBasket()
modal.modalClose()  
const contactsUI  = new ContactsUI(modal, order, onSubmit)
const catalog = new CatalogUI()
// 1. Сделать гет-запрос (productId) => product
// 2. Поместить объект в функцию setModal
// 3. Открытие модалки
function funcClick(id:string){
    api.get(`product/${id}`).then((product:Product)=>  {
        basket.selectedProduct = product
        modal.setModal(product)
        modal.modalOpen(modal.cardModal)
    })
}




// 1. делает post-запрос
// 2. if запрос успешен => внутри успешной модалки разместить стоимость (найти тэг со стоимостью)

// 3. успешную модалку нужно будет показать
//https://larek-api.nomoreparties.co/api/weblarek/order
function onSubmit() {
    api.post(`order`, order.returnOrder()).then((order: {id: string, total: number})=> {
        const orderDiscription = modal.successModal.querySelector('.order-success__description')
        orderDiscription.textContent =  `Списано ${order.total} синапсов`
        modal.modalOpen(modal.successModal)
        basketUi.resetBasket()
    }).catch()
    
}

// post (url, )
// 1. Получить все карточки с бэкенда
// 2. В классе ProductList мы сохраняем массив с бэкенда
// 3. Из класса ProductList мы должны будем передать массив карточек в 
// класс CatalogUI, где будет фунция renderCatalog => отрисовка карточек
// 4. Создать класс CatalogUI, gallery: main, renderCatalog: ( products) =>
api.get('product').then((productsResponse: ApiListResponse<Product>) => {
    productList.products = productsResponse.items
    catalog.renderCatalog(productList.products,funcClick)
}).catch(() => console.log('ошибка'))


console.log(modal)


const basketButton = document.querySelector('.header__basket')
    basketButton.addEventListener('click', ()=> {
    modal.modalOpen(modal.basketModal)

})

api.get('product/412bcf81-7e75-4e70-bdb9-d3c73c9803b7').then((product: Product) => {
    console.log(product)
})
// fetch('https://larek-api.nomoreparties.co/api/weblarek/product/412bcf81-7e75-4e70-bdb9-d3c73c9803b7').then((res)=>{
//     console.log(res.json())
    
// })

