import React from 'react';

const Login = React.lazy(() => import('../pages/Login')) 
const RegisterAccount = React.lazy(() => import('../pages/RegisterAccount')) 
const RegisterProfile = React.lazy(() => import('../pages/RegisterProfile')) 

const Home = React.lazy(() => import('../pages/HomePage'))
const Collection = React.lazy(() => import('../pages/Collection'))
//const DetailProduct = React.lazy(() => import('../pages/DetailProduct'))
const CollectionDetail = React.lazy(() => import('../pages/CollectionDetail'))

const Profile = React.lazy(() => import('../pages/Profile'))
const ProfileEdit = React.lazy(() => import('../pages/ProfileEdit'))
const AccountEdit = React.lazy(() => import('../pages/AccountEdit'))
const AdminAccountEdit = React.lazy(() => import('../pages/AdminAccountEdit'))
const AdminRegisterAccount = React.lazy(() => import('../pages/AdminRegisterAccount'))

const ProductList = React.lazy(() => import('../pages/ProductList'))
const AdminList = React.lazy(() => import('../pages/AdminList'))

const ProductCreation = React.lazy(() => import('../pages/ProductCreation'))
const ProductUpdate = React.lazy(() => import('../pages/ProductUpdate'))

const routes = [
    { path: '/', element: <Home /> },
    { path: '/collection', element: <Collection /> },
    { path: '/collection/id', element: <CollectionDetail />},
    { path: '/collectiondetail',element: <CollectionDetail /> },
    
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> },
    
    { path: '/profile', element: <Profile /> },
    { path: '/edit/profile', element: <ProfileEdit /> },
    { path: '/edit/account', element: <AccountEdit /> },

    { path: '/productList', element: <ProductList /> },
    
    { path: '/adminList', element: <AdminList /> },
    { path: '/admin/edit/account/:id', element: <AdminAccountEdit /> },
    { path: '/admin/create/account/', element: <AdminRegisterAccount /> },
    { path: '/productCreation', element: <ProductCreation /> },
    { path: '/productUpdate/:id', element: <ProductUpdate /> }
]


export default routes
