const validationFormConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type-error",
  errorClass: "form__input-error_active",
};
const ShortMoviesDuration = 40;
const LengthMoviesWidth = {
  maxWidth: 12,
  middleWidth: 8,
  minWidth: 5,
};
const QuantityOfAddMovies = {
  forMaxWidth: 3,
  forMiddleWidth: 2,
  forMinWidth: 1,
};
const BASE_URL = "http://localhost"; 

export {
  validationFormConfig,
  ShortMoviesDuration,
  LengthMoviesWidth,
  QuantityOfAddMovies,
  BASE_URL,
};
export const message = {
    auth: {
      fail: "Что-то пошло не так! Попробуйте ещё раз.",
      succes: "Вы успешно зарегистрировались!"
    }
  }
