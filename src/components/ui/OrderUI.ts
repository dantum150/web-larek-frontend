import { Order } from "../buisness/order";
import { AllModal } from "./modalUI";


export class OrderUI {
   orderButtons: NodeListOf<HTMLButtonElement>
   inputAdress: Element

   payments = {
      'card': 'online',
      'cash': 'received'
   }
   constructor(public modal: AllModal, public order: Order){
      this.orderButtons = this.modal.orderModal.querySelectorAll('.button_alt')
      this.inputAdress = this.modal.orderModal.querySelector('.form__input')
      
      this.orderButtons.forEach((button) => {
         button.addEventListener('click', (event: any) => {

            const name = event.target.name  // 'card' || 'cash' || 'more'
            //@ts-ignore

            let payment = this.payments[name] 

            this.order.setParam('payment', payment )

            this.selectButton(event.target)
         })
      })

      this.inputAdress.addEventListener('input', (event: any)=> {
         this.order.setParam('adress',event.target.value)
      })

      this.modal.orderModal.addEventListener('submit', (event)=>{
         event.preventDefault()
         this.modal.modalOpen(this.modal.contactsModal)
      })
   }

   selectButton(button: HTMLButtonElement) {
         this.orderButtons.forEach((orderButton )=> {
            if(orderButton.classList.contains('button_alt-active')) {
               orderButton.classList.remove('button_alt-active')
            }
         })
         button.classList.add('button_alt-active')
   }
}
