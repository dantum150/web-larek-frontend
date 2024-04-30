export class AllModal {
    cardModal: Element
    modals: NodeListOf<Element>
    
    constructor() {
        this.modals = document.querySelectorAll('.modal')
        this.cardModal = this.modals[1]
    }

    modalOpen(modal: Element){
        modal.classList.add('modal_active')
    }

    modalClose() {
        // const allButtonClose = document.querySelectorAll('.modal__close')
        // allButtonClose.forEach((button, index, array)=> {    
        //     button.addEventListener('click', (event: any)=> {
        //         event.target.parentElement.parentElement.classList.remove('modal_active')
        //     })
        // })
        
        this.modals.forEach((modal, index, array) => {
            const button = modal.querySelector('.modal__close')

            if(button) {
                button.addEventListener('click', () => {
                    modal.classList.remove('modal_active')
                })
            }
        })
    }

}

// 1. Получить массив кнопок
// 2. Циклом пробежаться по массиву
// 3. Каждой кнопке обработчик события (клик)
// 4. У модалки удалять класс modal_active