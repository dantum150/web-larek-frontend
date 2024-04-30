# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```


Проектная работа: WEB-ларёк
Задачи:
-спроектировать собственную реализацию MVP-архитектуры веб-приложения;
-задокументировать спроектированную архитектуру;
-реализовать базовый код;
-реализовать на основе базового кода компоненты и модели данных приложения;
-собрать всё вместе.

Базовый код

1.Класс ProductList 

Класс ProductList представляет собой контейнер для хранения карточек товаров.
class ProductList:
    - Создает новый экземпляр ProductList.
    - @param {Array} products - Начальный набор карточек товаров. По умолчанию пустой массив.
    constructor(products = []) 
         - Список карточек товаров.
         - @type {Array}
        this.products = products;
    
     - Возвращает список всех карточек товаров в списке.
     - @returns {Array} - Список всех карточек товаров.

     getProducts() {
        return this.products
    }
    
2.Класс ProductItem

class ProductItem {
    
     Создает новый экземпляр ProductItem.

     - @param {string} name - Название товара.
     - @param {number} price - Цена товара.
     - @param {string} description - Описание товара.
     - @param {string} category - Описание категории.
     - @param {string} urlImage - Ссылка на картинку.
     
    constructor(name, price, description, category, urlImage) {
         - Название товара.
         - @type {string}
         
        this.name = name;
        
         - Цена товара.
         - @type {number}
        
        this.price = price;
        
        
         - Описание товара.
         - @type {string}
        
        this.description = description;
  
         - Описание товара.
         - @type {string}
         
        this.category = category;
    }

     - Возвращает название товара.
     - @returns {string} - Название товара.
    
    getProduct() {
        return {
            name: this.name,
            price: this.price,
            category: this.category
            ...
        };
    }
}



3.Класс Order

Класс Order представляет собой заказ, содержащий набор карточек товаров.

class Order {
    
     - Создает новый экземпляр Order.
     - @param {Array} products - Список карточек товаров, включенных в заказ. По умолчанию пустой массив.
     
    constructor(payment: string, email: string, phone: string, address string, total: number  items = []) {
       
         - Список карточек товаров в заказе.
         - @type {Array}
         
        this.items = items;
    }
     - Добавляет карточку товара в заказ.
     - @param {Object} product - Карточка товара для добавления в заказ.
     
    createOrder() {
        return {
            ... все поля этого класса
        }
    }

     - Рассчитывает общую стоимость заказа.
     - @returns {number} - Общая стоимость заказа.
     
    calculateTotal() {
        let total = 0;
        this.products.forEach(product => {
            total += product.price;
        });
        return total;
    }
}
4.Класс Cart
  Класс Cart представляет собой заказ, содержащий набор карточек товаров.
 
class Cart {
   
     - Создает новый экземпляр Cart.
     - @param {Array} products - Список карточек товаров, включенных в заказ. По умолчанию пустой массив.
     
    constructor(total: number , items = []) {
        
         - Список карточек товаров в заказе.
         - @type {Array}
       
        this.items = items;
    }
     - Добавляет карточку товара в заказ.
     - @param {Object} product - Карточка товара для добавления в заказ.
     
    getCartInfo() {
        return {
            ... все поля этого класса
        }
    }

     - Рассчитывает общую стоимость заказа.
     - @returns {number} - Общая стоимость заказа.
    
    calculateTotal() {
        let total = 0;
        this.products.forEach(product => {
            total += product.price;
        });
        return total;
    }
}

5. Catallog