import React from 'react';

const Login = React.lazy(() => {import('./pages/login')}) 
const RegisterAccount = React.lazy(() => {import('./pages/RegisterAccount')}) 
const RegisterProfile = React.lazy(() => {import('./pages/RegisterProfile')}) 

const routes = [
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> }
]


export default routes