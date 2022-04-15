import React from 'react';

const Login = React.lazy(() => import('../pages/Login')) 
const RegisterAccount = React.lazy(() => import('../pages/RegisterAccount')) 
const RegisterProfile = React.lazy(() => import('../pages/RegisterProfile')) 

const Home = React.lazy(() => import('../pages/HomePage'))
const Collection = React.lazy(() => import('../pages/Collection'))


const routes = [
    { path: '/', element: <Home />},
    { path: '/collection', element: <Collection /> },
    
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> }
]


export default routes