import React from 'react';

const Login = React.lazy(() => import('../pages/Login')) 
const RegisterAccount = React.lazy(() => import('../pages/RegisterAccount')) 
const RegisterProfile = React.lazy(() => import('../pages/RegisterProfile')) 

const Collection = React.lazy(() => import('../pages/Collection'))


const routes = [
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> },

    { path: '/collection', element: <Collection /> }
]


export default routes