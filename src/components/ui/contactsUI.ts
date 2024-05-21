import { Order } from "../buisness/order"
import { AllModals } from "./modalUI"

export class ContactsUI {
   contactsInputs:NodeListOf<HTMLInputElement>

    constructor(public modal: AllModals, public order: Order, onSubmit: () => void){
        this.contactsInputs = this.modal.contactsModal.querySelectorAll('.form__input')

        
        this.contactsInputs.forEach((input)=> {
            input.addEventListener('input', (event: Event)=> {

                const target = event.target as HTMLInputElement

                this.order.setParam(target.name, target.value)
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