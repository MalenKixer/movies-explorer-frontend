import { Navigate } from 'react-router-dom'
import React from 'react';

const ProtectedRoute = React.memo(({component: Component, ...props}) =>{
    return(
        <>
        {props.loggedIn ? <Component {...props}/> : <Navigate to="/"/>}
        {console.log(props.loggedIn)}
        </>
    )
})

export default ProtectedRoute;