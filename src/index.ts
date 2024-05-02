import { Api, ApiListResponse  } from './components/base/api';
import { ProductList } from './components/buisness/productList';
import './scss/styles.scss';
import { Product } from './components/buisness/productList';
import { CatalogUI } from './components/ui/catalogUI';
import { AllModal } from './components/ui/modalUI';

const api = new Api('https://larek-api.nomoreparties.co/api/weblarek/')
const productList = new ProductList()
const modal = new AllModal()
modal.modalClose()  

const catalog = new CatalogUI(modal)
// 1. Получить все карточки с бэкенда
// 2. В классе ProductList мы сохраняем массив с бэкенда
// 3. Из класса ProductList мы должны будем передать массив карточек в 
// класс CatalogUI, где будет фунция renderCatalog => отрисовка карточек
// 4. Создать класс CatalogUI, gallery: main, renderCatalog: ( products) =>
api.get('product').then((productsResponse: ApiListResponse<Product>) => {
    productList.products = productsResponse.items
    catalog.renderCatalog(productList.products)
}).catch(() => console.log('ошибка'))


console.log(modal)


const basketButton = document.querySelector('.header__basket')
basketButton.addEventListener('click', ()=> {
modal.modalOpen(modal.basketModal)

})