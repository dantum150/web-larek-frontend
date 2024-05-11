export class Validation {
    hasInvalidInput(inputList: HTMLInputElement[]){
        return inputList.some((inputElement)=> {
            return !inputElement.value
        })
    }

    toggleButtonState(inputList: HTMLInputElement[], buttonElement: HTMLButtonElement){
if(this.hasInvalidInput(inputList)) {
    buttonElement.disabled = true; 
}
else{
    buttonElement.disabled = false;
}
    }

    setEvenListener(formElement:HTMLFormElement) {
        const inputList = Array.from(formElement.querySelectorAll('.form__input')) as HTMLInputElement[]
        const buttonElement = formElement.querySelector('.button') as HTMLButtonElement

        inputList.forEach((inputElement)=> {
            inputElement.addEventListener('input',()=> {
                this.toggleButtonState(inputList, buttonElement)
            } )
        })
    }

    initValidation() {
        const forms = document.querySelectorAll('.form') as NodeListOf<HTMLFormElement>

        forms.forEach((form) => {
            this.setEvenListener(form)
        })
    }
}