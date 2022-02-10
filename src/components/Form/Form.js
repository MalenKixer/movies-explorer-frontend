import './Form.css';
import React from 'react';

const Form = React.memo((props) =>{
   const formClassName = `${props.name}__form`;
   const fieldsetClassName = `${props.name}__set`;
   const titleClassName = `${props.name}__title`;
   const buttonClassName = `${props.name}__button`;
   function handleSubmit(evt){
      evt.preventDefault();
      props.onSubmit();
   }
   return(
      <form className={`form ${formClassName}`} name={props.name} onSubmit={handleSubmit} noValidate>
         <h2 className={`form__title ${titleClassName}`}>{props.title}</h2>
         <fieldset className={`form__set ${fieldsetClassName}`}>
            {props.children}
         </fieldset>
         <button className={`form__button ${buttonClassName} ${!props.isValid && 'form__button_disabled'}`} type="submit" name="submit" >{props.button}</button>
      </form>
    )
})

export default Form;