import React from 'react';

const Login = React.lazy(() => import('../pages/login')) 
const RegisterAccount = React.lazy(() => import('../pages/RegisterAccount')) 
const RegisterProfile = React.lazy(() => import('../pages/RegisterProfile')) 

const Collection = React.lazy(() => import('../pages/Collection'))
//const DetailProduct = React.lazy(() => import('../pages/DetailProduct'))
const CollectionDetail = React.lazy(() => import('../pages/CollectionDetail'))

const routes = [
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> },

    { path: '/collection', element: <Collection /> },
    { path: '/collectiondetail',element: <CollectionDetail /> }
]


export default routes
