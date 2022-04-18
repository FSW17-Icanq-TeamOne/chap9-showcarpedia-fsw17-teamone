import React from 'react';

const Login = React.lazy(() => import('../pages/login')) 
const RegisterAccount = React.lazy(() => import('../pages/RegisterAccount')) 
const RegisterProfile = React.lazy(() => import('../pages/RegisterProfile')) 

const Home = React.lazy(() => import('../pages/HomePage'))
const Collection = React.lazy(() => import('../pages/Collection'))
//const DetailProduct = React.lazy(() => import('../pages/DetailProduct'))
const CollectionDetail = React.lazy(() => import('../pages/CollectionDetail'))

const Profile = React.lazy(() => import('../pages/Profile'))
const ProfileEdit = React.lazy(() => import('../pages/ProfileEdit'))

const routes = [
    { path: '/', element: <Home />},
    { path: '/collection', element: <Collection /> },
    { path: '/collection/id', element: <CollectionDetail />},
    { path: '/collectiondetail',element: <CollectionDetail /> },
    
    { path: '/login', element: <Login /> },
    { path: '/registerAccount', element: <RegisterAccount /> },
    { path: '/registerProfile', element: <RegisterProfile /> },
    
    { path: '/profile', element: <Profile />},
    { path: '/edit/profile', element: <ProfileEdit />}
]


export default routes
