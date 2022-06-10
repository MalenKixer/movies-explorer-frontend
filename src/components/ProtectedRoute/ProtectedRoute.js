import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../utils/Api/MainApi";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setloggedIn } from "../../Redux/actions/auth";

const ProtectedRoute = React.memo(({ component: Component, ...props }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  function setLoggedIn(value){
      dispatch(setloggedIn(value))
  }
  React.useEffect(() => {
    api
      .checkToken()
      .then((tok) => {
        setLoggedIn(true);
        console.log(tok)
      })
      .catch((err) => {
        setLoggedIn(false);
        history("/");
        console.log(`Ошибка: ${err}`);
      });
  }, []);
  return <>{loggedIn ? <Component {...props} /> : <Navigate to="/" />}</>;
});

export default ProtectedRoute;
