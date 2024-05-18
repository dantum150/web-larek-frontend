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
        const buttonElement = formElement.querySelector('.button[type=submit]') as HTMLButtonElement

        inputList.forEach((inputElement)=> {
            inputElement.addEventListener('input',()=> {    // ввод в тэг инпута
                this.toggleButtonState(inputList, buttonElement)
            } )
        })
    }

    initValidation() {
        const templates = document.querySelectorAll('template')
        templates.forEach((template)=> {
            const form = template.content.querySelector('.form') as HTMLFormElement

            if(form) {
                this.setEvenListener(form)
            }
        }) 
        // const forms = document.querySelectorAll('.form') as NodeListOf<HTMLFormElement>

        // forms.forEach((form) => {
        //     this.setEvenListener(form)
        // })
    }
}