import React from 'react'; 

class FormValidator extends React.Component {
    constructor(props){
       super(props);
       this._form = props.form;
       this._inputSelector = props.validationConfig.inputSelector;
       this._submitButtonSelector = props.validationConfig.submitButtonSelector;
       this._inactiveButtonClass = props.validationConfig.inactiveButtonClass;
       this._inputErrorClass = props.validationConfig.inputErrorClass;
       this._errorClass = props.validationConfig.errorClass;
       this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
       this._submitButton = this._form.querySelector(this._submitButtonSelector);
    }
    _showInputError(inputElement){
       const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
       errorElement.classList.add(this._errorClass);
       errorElement.textContent = inputElement.validationMessage;
       inputElement.classList.add(this._inputErrorClass);
    }
    _hideInputError(inputElement){ 
       const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
       errorElement.classList.remove(this._errorClass);
       errorElement.textContent = '';
       inputElement.classList.remove(this._inputErrorClass);
    }
    clearPopupInputs(){
       this._inputList.forEach((inputElement) =>{
          inputElement.value = '';
          this._hideInputError(inputElement);
       })
       this._toggleButtonState();
    }
    _hasInputValidity(){
       return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
       })
    }
    _checkInputValidity(inputElement){
       if(!inputElement.validity.valid){
          this._showInputError(inputElement);
       } else {
          this._hideInputError(inputElement);
       }
    }
    _toggleButtonState(){ 
       if(this._hasInputValidity()){
          this._submitButton.classList.add(this._inactiveButtonClass);
          this._submitButton.setAttribute('disabled', 'true');
       } else {
          this._submitButton.classList.remove(this._inactiveButtonClass);
          this._submitButton.removeAttribute('disabled', 'true');
       }
    }
    _setEventListeners(){
       this._toggleButtonState();
       this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
       })
    })
    }
    enableValidation(){
       this._setEventListeners()
    }
    render(){
        return(
            this.enableValidation()
        )
      }
 }

export default FormValidator;