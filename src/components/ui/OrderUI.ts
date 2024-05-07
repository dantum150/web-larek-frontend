import { Order } from "../buisness/order";
import { AllModal } from "./modalUI";


class OrderUI {
   orderButtons: NodeList
   constructor(public modal: AllModal, public order: Order){
      this.orderButtons = this.modal.orderModal.querySelectorAll('.button_alt')

      this.orderButtons.forEach((button) => {
         button.addEventListener('click', (event: any) => {
            let payment = ''

            if(event.target.name === 'card') {
               payment = 'online'
            }
            else if (event.target.name === 'cash') {
               payment = 'received'
            }
            else {
               payment = ''
            }

            this.order.setPayment(payment)
         })
      })
   }
}
