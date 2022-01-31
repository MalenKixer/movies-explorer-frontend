import { Navigate } from 'react-router-dom'
import React from 'react';

const ProtectedRoute = React.memo(({component: Component, ...props}) =>{
    return(
        <>
        {props.loggedIn ? <Component {...props}/> : <Navigate to="/sign-in"/>}
        </>
    )
})

export default ProtectedRoute;