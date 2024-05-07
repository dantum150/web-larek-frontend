
export class Order {
    payment: string
    adress: string
    email: string
    phone: string

    constructor(){
        this.payment = ''
        this.adress = ''
        this.email = ''
        this.phone = ''
    }

    setPayment(payment: string) {
        this.payment = payment
    }
}