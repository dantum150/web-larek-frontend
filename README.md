https://github.com/dantum150/web-larek-frontend.git

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
- src/scss/styles.scss — корневой файл стилей
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

Реализация Проекта Web-ларёк. 
Используемый стек: 
-TypeScript, HTML, SCSS 
-Для сборки используется Web pack.  
-Инструменты линтинга и форматирования не подключены

Задачи:
-спроектировать собственную реализацию MVP-архитектуры веб-приложения;
-задокументировать спроектированную архитектуру;
-реализовать базовый код;
-реализовать на основе базового кода компоненты и модели данных приложения;
-собрать всё вместе.

Функциональные требования (требования описывающие принцип работы интернет-магазина)
Требоавния будут касаться следующего:
-Главной страницы 
-Просмотр товаров 
-Оформление товара
-Требование ко всем страницам 

Cписок вопросов, которые по заданию должна раскрывать документация
1. Из каких основных частей состоит архитектура проекта? (Это могут быть данные, отображения, экраны и так далее.)
2. Зачем нужны эти части, какие функции они выполняют?
3. Как части взаимодействуют?
4. Какие данные используются в приложении? Можете записать конкретные типы данных или интерфейсов, пояснив их функции.
5. Из каких компонентов состоит приложение?
6. Как реализованы процессы в приложении? Через события или как-то иначе, например: с помощью единого контроллера или promise-based flow, как в готовом кейсе в предыдущем спринте.

1. Из каких основных частей состоит архитектура проекта?

Данный проект состоит(в ключевой папке components) из:

Папки base (базовый компонет отвечающий за внутренюю логику, (запросы на сервер(связь с backend), сохрание данных и тд.))
-api.ts (работа с сервером, включающая функции по get и post запросу)
-events.ts (данный файл включает взаимодесйтие с обработчиками(сохрание обработчиков, удаление, прослушивание))
-localstorage.ts (сохранение данных, которые сохраняются при перезагрузке страницы или закрытии и повторном открытии браузера.)
-validation.ts (работа с валидацией, проходит все формы и в каждой форме находит характерные инпуты и кнопки и создает функционал в приводе в инпуты кнопка меняется )

Папки buisness (данные приложения, работа с этими данными(хранение, удаление, обработка и тд. ))
-basket.ts (реализация данных адресованых в корзину)
-order.ts (работа направленая с заказом)
-productList.ts (работа с продуктом)

Папки Ui (работа с HTML, пользовательский интрефейс)
-BasketUI.ts
-catalogUI.ts
-contacts.ts
-GeneralUI.ts
-modalUI.ts
-OrderUI.ts

2. Зачем нужны эти части, какие функции они выполняют?
Систематизация работы по каждой из частей архитиктуры 
<!-- Функциии классов описываются ниже -->


3. Как части взаимодействуют?

Идет взаимодейсвтие классов (один класс может попасть в другой класс )
Пример: BasketUI 
сonstructor(public modal: AllModal, public basket: Basket) принемает класс modal и класс basket. 
BasketUi может взаимодействиать между двумя классами потому что мы их занесли в конструктор. 
Может реализовываться вызов функции из одного класса в рамках дургого класса.

4. Какие данные используются в приложении? Можете записать конкретные типы данных или интерфейсов, пояснив их функции.

-Объекты продуктов 
-Объекты заказа 

Все то что идет во взаимодейсвтии с backend и есть необходимые данные (работа с продуктами и заказами)

5. Из каких компонентов состоит приложение?

три основных типов компоентов: 
-внутрення(глубинная) логинка
-данные приложения
-отрисовка данных (пользовательский интерфейс)

6. Как реализованы процессы в приложении?

-взаимосвязь с бэкендом 
-устанвока и удуаление обработчиков 
-сохранение и получать данные из локального хранилища 

Класс Api

Поле baseUrl
Нужно для сохранние базовой части URL, чтобы не дублировать URL при кажорм новом запросе (Пример: для работы с продуктами ссылаемся на URL с продуктами, для работы с заказом на URL с закзами ).
Берется основной URL(базовый), который не изменчив(по отношению к элементам из backend), а get и post запрос указываем (в конце) для той или иной задачи в рамках проекта.

Поле options 
Это объект настроек запроса в частности поле method со значением типа запроса (get, post, delete), headers и поле body в которе попдает объект заказа, который мы должны отправить на сервер

Конструктор (приравнивается к одноименным ключам, чтобы делать фетч запросы)
Включает в себя два парметра (baseURL типа string, options типа RequestInit)

Класс EventEmitter (включает себя взаимодейсвтие с обработчиками)
Поле _events  
Map (вклчает реализауию ключа в любом значенни(функции в качестве ключа, массив в качестве ключа и тд))
-Установливает обработчик на события
-Снимает обработчик событий
-Инициирует событие с данными 
-Прослушивает события 
-Сбрасывает все обработчики
-Делает коллбэк триггер

Класс LocalStorage 
Класс реализующий хранение какие-либо пользовательских настройк клиента, служебную информацию, различные изменения состояния в процессе взаимодействия со страницей, например, данные заполненных полей формы, чтобы они не удалялись после обновления веб-страницы.
В данном проекте это реализуется в модальных окнах включающие в себя способе оплаты(онлайн или при получении ), инпуты(адрес доставки, email, телефон)

Конструктор(отсутсвует)


Класс Validation 
Реалзиация валидации форм  (в частности работа с полями адреса, email, телефона)
Навешивание на кнопку disabled в случае отсутсвия в массиве корзины продуктов

Конструктор 
Включает в себя параметр order с типом Order (для мониторинга поля payment)

Класс Basket (работа с данными массива корзины)

Поле basketItems (товары которые были добавлены в массив корзины )
Поле selectedProduct (направленое добавление товара в корзину, происходит сохрание из backend объекта (push объекта в массив))

Осуществялется работа по:
-добавлению данных в корзину,за счет функции addBasket()
-удаление данных из корзины, за счет функции removeBasket()
-установка счетчика в лого-html о колличестве товаров в массиве корзины за счет функции  showBasketCounter()
-подсчет общей суммы за все товары положеные в массив корзины за счет функции calculateTotalPrice()
-очистка всего массиыва корзины по окончания покупки(офрмления заказа) за счет функции cleanBasket()

Конструктор включает в себя работу с двумя параметрами (modal типа Allmodal, basket типа Basket)

Класс Order осуществляет работу с заказаом товара(ов)
Включает поля:
-оплты (payment)
-адреса (address)
-email (email)
-телефона (phone)

Констурктор представляет функцию, которая наполянет поля пустыми стркоами, которые в последстии покупки будут пополняться.

В классе реализуется функция setParam() направленная на получения ключа, который будет (payment, address, email, phone) и прировнять к этому ключу то значение которое мы указали. 

В классе реализуется функция returnOrder(),которая возвращет сформированный объект заказа.


Класс ProductList 
Реализует массив продуктов (хранит инфомрацию о массиве)
Функция getProducts() которая позволяет получить массив продуктов.
Констуктор функции осуществляет поплнение в поле products (продуктов из backend).

В частности стоит отметить использование interface способ типизации объектов (описание того что есть в объекте)

Класс BasketUi

Поле addProductButton (добавление товара)
Поле basketList (работа со списком товара в корзине)
Поле basketCounter (работа с тележкой)
Поле totalPrice (общая сумма)
Поле orderButton (офрмление заказов )

Конструктор (включает в себя работу с параметрами modal типа Allmodal, basket типа Basket)
получаем следующий ряд тегов для дальнейшегов заимодействия:
-тега <ul> списка товаров добавленых в корзину ('.basket__list')
-тега <button> кнопки добавления товара в массив-товаров коризны ('.card__button')
-тега <span> иконка продуктовой тележки(корзины) ('.header__basket-counter')
-тега <span>  вывод суммы (указнных в массиве корзины) ('.basket__price')
-тега <button> кнопка офомрления в корзине ('.basket__button')

Включает в себя функции:

renderBasketItems() отрисовка товара в корзине 
-очищение модального окна (для корзины)
-на основе массива товаров создается отдельный элемент и добавляет в тег UL

createBasketItems() создание товара в корзине 
-приводим теги к переменным 
-создается путем компанации

changeBasketCounter() счетчик товаров в корзине
за счет конкатенации опирается на вызов функции showBasketCounter() показывающая колличество товаров в корзине

showCalculateTotalPrice()
Ведет подсчет суммы опирается на вызов функции calculateTotalPrice()

resetBasket()
Очщение корзины после оформления заказала 
с вызовом функции cleanBasket() и initBasket() (компанующи в себя перечисленные выши функции для общего вызова)

toggleDisableButton()
Реализация неакивной кнопки за счет проверки на наличие товара в корзине. 
Навешивание disabled в случае если массив корзины равен 0

Класс CatalogUI работа с карточками в мэйне.
Поле main представляет с собой пустое поле куда будет подгружаться карточки
Поле cardTemplate тег тепмлейт из котрого выгружаем карточки 

Конструктор 
Направлен на присовение тега к переменной 
-тега <main> главного поля показа товаров ('.gallery')
-тега<template> описывающий модальное окно ('#card-catalog')

renderCatalog (отрисовка катлога)  осуществляет работу с переменными (products: Product[], funcClick: (productId: string) => void)
Ключевой момент что в данной функции вызывается funcClick(product.id), который осуществляет get запрос для полученя объекта

createCard() (отрисовка картчоки)
-присваивает к тегам переменные
-которые буду заполнять модальное окно содержимом (id,category,title,price, description)

addCategoryClass() проверка категории карточки

Класс ContactsUI работа с контактами 
Поле contactsInput
Конструктор
включает работу с перменными (public modal: AllModal, public order: Order, onSubmit: () => void)
-присваивает к тегам переменные (все инпуты)
-осуществляется функционал из класса EventEmitter (в рамках обработчика)
-реализуется preventDefault() в связи с тем что есть событие submit которая перезагружает страницу (с preventDefault() это событие отменяется)


Класс OrderUI
Реализация работы заказа (модального окна включающего взаимодейсвтие выбора способа оплаты и адреса доставки)
Поле orderButtons
Поле inputAdress
Конструктор 
-присваивает к тегам переменные
-добалвляется обработчик на кнопку заказа 
-присваиваем event.target (осуществление события по клике на кнопку)
-setParam() также используется в качестве компанации ключей-значений 
-selectButton() функция направленная на работу активной кнопки 

Класс Render 
принемает в себя массив, элемент, контейнер, (направлена реализация работы с )
Конструктор отсутсвует