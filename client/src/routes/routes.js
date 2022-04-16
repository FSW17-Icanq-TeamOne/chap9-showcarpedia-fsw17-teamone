import React from 'react';

const Login = React.lazy(() => import('../pages/Login')) 
const RegisterAccount = React.lazy(() => import('../pages/RegisterAccount')) 
const RegisterProfile = React.lazy(() => import('../pages/RegisterProfile')) 

const Home = React.lazy(() => import('../pages/Home'))
const Collection = React.lazy(() => import('../pages/Collection'))

const Profile = React.lazy(() => import('../pages/Profile'))


const routes = [
    { path: '/', element: <Home />},
    { path: '/collection', element: <Collection /> },
    
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> },

    { path: '/profile', element: <Profile /> }
]


export default routes