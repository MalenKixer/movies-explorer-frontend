import "./More.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoreMovies } from "../../Redux/actions/movies";

const More = React.memo(() => {
  const dispatch = useDispatch();
  const addButton = useSelector((state) => state.interactive.buttonMore);
  function onClick() {
    dispatch(setMoreMovies(true));
  }
  return (
    <section className="more">
      <button
        className={addButton ? "more__button" : "more__button_disabled"}
        name="submit"
        type="submit"
        onClick={onClick}
      >
        Ещё
      </button>
    </section>
  );
});

export default More;
