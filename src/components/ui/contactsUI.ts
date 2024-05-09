import { Order } from "../buisness/order"
import { AllModal } from "./modalUI"

export class ContactsUI {
   contactsInput:NodeListOf<HTMLInputElement>

    constructor(public modal: AllModal, public order: Order){
        this.contactsInput = this.modal.contactsModal.querySelectorAll('.form__input')
        this.contactsInput.forEach((input)=> {
            input.addEventListener('input', (event: any)=> {
                this.order.setParam(event.target.name, event.target.value)
            })
        })
    }





}