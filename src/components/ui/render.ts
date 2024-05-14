export class Render {
    //1. принимать в себя массив, элемент, контейнер,

    renderList<ArrayItem>(
        array: ArrayItem [], 
        element: (arrayItem: ArrayItem, index?: number) => HTMLElement ,
        container: HTMLElement,
        eventListener?: {event: string, callback: () => void, args: any[]}
    ) {
        array.forEach((arrayItem,index)=> {
            const HtmlElement = element(arrayItem, index + 1)
            if(eventListener) {
                HtmlElement.addEventListener(eventListener.event, eventListener.callback)
            }
            container.append(HtmlElement)
        })
    }
}