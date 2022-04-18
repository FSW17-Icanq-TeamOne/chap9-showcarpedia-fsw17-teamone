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

const ProductList = React.lazy(() => import('../pages/ProductList'))
const AdminList = React.lazy(() => import('../pages/AdminList'))

const routes = [
    { path: '/', element: <Home />},
    { path: '/collection', element: <Collection /> },
    { path: '/collection/id', element: <CollectionDetail />},
    
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> },

    { path: '/collection', element: <Collection /> },
    { path: '/collectiondetail',element: <CollectionDetail /> },
    
    { path: '/profile', element: <Profile />},
    { path: '/edit/profile', element: <ProfileEdit />},

    { path: '/productList', element: <ProductList />},
    { path: '/adminList', element: <AdminList />}
]


export default routes
