import { Navigate, useNavigate } from 'react-router-dom'
import { api } from '../../utils/MainApi';
import React from 'react';

const ProtectedRoute = React.memo(({component: Component, ...props}) =>{ 
    const history = useNavigate();
    const [loggedIn, setLoggedIn] = React.useState(true);
    React.useEffect(() => {
        api.checkToken()
        .then(() => {
            setLoggedIn(true);
        })
        .catch((err) => {
            setLoggedIn(false);
            history('/');
            console.log(`Ошибка: ${err}`);
          })
    })
    return(
        <>
        {loggedIn ? <Component {...props}/> : <Navigate to="/"/>}
        </>
    )
})

export default ProtectedRoute;