import './Form.css';
import React from 'react';
// import FormValidator from '../FormValidator/FormValidator';
// import { validationFormConfig } from '../../utils/const';

const Form = React.memo((props) =>{
   const formClassName = `${props.name}__form`;
   const fieldsetClassName = `${props.name}__set`;
   const titleClassName = `${props.name}__title`;
   const buttonClassName = `${props.name}__button`;
   function handleSubmit(evt){
      evt.preventDefault();
      props.onSubmit();
      this.reset();
   }
   return(
      <form className={`form ${formClassName}`} name='form' onSubmit={handleSubmit}>
         <h2 className={`form__title ${titleClassName}`}>{props.title}</h2>
         <fieldset className={`form__set ${fieldsetClassName}`}>{props.children}</fieldset>
         <button className={`form__button ${buttonClassName}`} type="submit" name="submit" >{props.button}</button>
         {/* <FormValidator validationConfig={validationFormConfig} form={document.forms.form}></FormValidator> */}
      </form>
    )
})

export default Form;