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

        this.modal.contactsModal.addEventListener('submit', (event)=> {
                event.preventDefault()
                onSubmit()
        })
    }       
}