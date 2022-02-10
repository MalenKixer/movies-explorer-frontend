export class FormValidator {
   constructor(validationConfig){
      this._inputSelector = validationConfig.inputSelector;
      this._submitButtonSelector = validationConfig.submitButtonSelector;
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
      this._inputErrorClass = validationConfig.inputErrorClass;
      this._errorClass = validationConfig.errorClass;
   }
   _showInputError(inputElement, formElement){
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = inputElement.validationMessage;
      inputElement.classList.add(this._inputErrorClass);
   }
   _hideInputError(inputElement, formElement){ 
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
      inputElement.classList.remove(this._inputErrorClass);
   }
   _hasInputValidity(formElement){
      const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
      return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      })
   }
   _checkInputValidity(inputElement, formElement){
      if(!inputElement.validity.valid){
         this._showInputError(inputElement, formElement);
      } else {
         this._hideInputError(inputElement, formElement);
      }
   }
   _toggleButtonState(formElement){ 
      const submitButton = formElement.querySelector(this._submitButtonSelector);
      if(this._hasInputValidity(formElement)){
         submitButton.classList.add(this._inactiveButtonClass);
         submitButton.setAttribute('disabled', 'true');
      } else {
         submitButton.classList.remove(this._inactiveButtonClass);
         submitButton.removeAttribute('disabled', 'true');
      }
   }
   _setEventListeners(formElement){
      this._toggleButtonState(formElement);
      const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
      inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', () => {
         this._checkInputValidity(inputElement, formElement);
         this._toggleButtonState(formElement);
      })
   })
   }
   enableValidation(){
      const formList = Array.from(document.querySelectorAll('.form'));
      formList.forEach((formElement) => {
         formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            formElement.reset()
         })
      this._setEventListeners(formElement);
      })
   }
}

export default FormValidator;