
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


    setParam(key:string, value: string) { // key: payment, address, email, phone
        //@ts-ignore
        this[key] = value
    }
    
}