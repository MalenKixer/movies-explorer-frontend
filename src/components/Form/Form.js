import './Form.css';
import React from 'react';
import FormValidator from '../FormValidator/FormValidator';
import { validationFormConfig } from '../../utils/const'
import { useNavigate } from 'react-router-dom';

const Form = React.memo((props) =>{
   const[errorMessage, setErrorMessage] = React.useState('');
   const formClassName = `${props.name}__form`;
   const fieldsetClassName = `${props.name}__set`;
   const titleClassName = `${props.name}__title`;
   const buttonClassName = `${props.name}__button`;
   const formValidation = new FormValidator(validationFormConfig);
   const history = useNavigate();
   React.useEffect(() => {
      formValidation.enableValidation();
   }, [])
   function handleSubmit(){
      props.onSubmit();
      setErrorMessage(props.errorMessage);
   }
   React.useEffect(() => {
      setErrorMessage(props.errorMessage);
   }, [props.errorMessage])
   React.useEffect(() => {
      if(history){
         setErrorMessage('');
      }
   }, [history])
    return(
      <form className={`form ${formClassName}`} name={props.name} onSubmit={handleSubmit} noValidate >
         <h2 className={`form__title ${titleClassName}`}>{props.title}</h2>
         <fieldset className={`form__set ${fieldsetClassName}`}>
            {props.children}
         </fieldset>
         <span className={`form__input-error form__submit-error ${errorMessage !== '' && 'form__input-error_active'}`}>{errorMessage}</span>
         <button className={`form__button ${buttonClassName}`} type="submit" name="submit" >{props.button}</button>
      </form>
    )
})

export default Form;