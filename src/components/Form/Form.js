import "./Form.css";
import React, { useCallback } from "react";
import FormValidator from "../../utils/Auth/utilsFunctions/FormValidator";
import { validationFormConfig } from "../../utils/const";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMessageError } from "../../Redux/actions/message";

const Form = React.memo((props) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.message.messageError);
  const formClassName = `${props.name}__form`;
  const fieldsetClassName = `${props.name}__set`;
  const titleClassName = `${props.name}__title`;
  const buttonClassName = `${props.name}__button`;
  const formValidation = new FormValidator(validationFormConfig);
  const history = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableDispatch = useCallback(dispatch, []);
  const setErrorMessage = useCallback(
    (messageError) => {
      stableDispatch(setMessageError(messageError));
    },
    [stableDispatch]
  );
  function handleSubmit() {
    props.onSubmit();
  }
  React.useEffect(() => {
    formValidation.enableValidation();
  }, []);
  React.useEffect(() => {
    setErrorMessage(errorMessage);
  }, [setErrorMessage, errorMessage]);
  React.useEffect(() => {
    if (history) {
      setErrorMessage("");
    }
  }, [history, setErrorMessage]);
  return (
    <form
      className={`form ${formClassName}`}
      name={props.name}
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className={`form__title ${titleClassName}`}>{props.title}</h2>
      <fieldset className={`form__set ${fieldsetClassName}`}>
        {props.children}
      </fieldset>
      <span
        className={`form__input-error form__submit-error ${
          errorMessage !== "" && "form__input-error_active"
        }`}
      >
        {errorMessage}
      </span>
      <button
        className={`form__button ${buttonClassName}`}
        type="submit"
        name="submit"
      >
        {props.button}
      </button>
    </form>
  );
});

export default Form;
