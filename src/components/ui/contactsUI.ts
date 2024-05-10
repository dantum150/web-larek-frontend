import { Order } from "../buisness/order"
import { AllModal } from "./modalUI"

export class ContactsUI {
   contactsInput:NodeListOf<HTMLInputElement>

    constructor(public modal: AllModal, public order: Order, onSubmit: () => void){
        this.contactsInput = this.modal.contactsModal.querySelectorAll('.form__input')

        
        this.contactsInput.forEach((input)=> {
            input.addEventListener('input', (event: any)=> {
                this.order.setParam(event.target.name, event.target.value)
            })
        })
            
        // 1. Получить тэг формы (модалки = form)
        // 2. На полученную форму надо обработчик события submit
        // 3. Submit => console.log(returnOrder)

            this.modal.contactsModal.addEventListener('submit', (event)=> {
                event.preventDefault()
                
                onSubmit()
            })
        
    }       

        



}