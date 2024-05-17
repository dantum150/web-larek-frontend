export class Render {
    //1. принимать в себя массив, элемент, контейнер,

    renderList<ArrayItem>(
        array: ArrayItem [], 
        element: (arrayItem: ArrayItem, index?: number) => HTMLElement ,
        container: HTMLElement,
        eventListener?: (tag: HTMLElement, arrayItem: ArrayItem) => void
    ) {
        array.forEach((arrayItem,index)=> {
            const HtmlElement = element(arrayItem, index + 1)
            
            if(eventListener) {
                eventListener(HtmlElement, arrayItem)
            }
            container.append(HtmlElement)
        })
    }

    productPrice(price:number|null) {
        return  price ? `${price} синопсов` : 'Бесценно'
    }

}



