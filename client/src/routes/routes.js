import React from 'react';

// Home
const HomePage = React.lazy(() => import('../pages/HomePage'))

// Collection
const Collection = React.lazy(() => import('../pages/Collection'))
const CollectionDetail = React.lazy(() => import('../pages/CollectionDetail'))

// Create Account
const CreateAccount = React.lazy(() => import('../pages/RegisterAccount')) 
// const RegisterProfile = React.lazy(() => import('../pages/RegisterProfile')) 

// Login
const Login = React.lazy(() => import('../pages/Login')) 

// Dashboard Admin
// Admin Manager
const AdminList = React.lazy(() => import('../pages/AdminList'))
const AdminAccountEdit = React.lazy(() => import('../pages/AdminAccountEdit'))
const AdminRegisterAccount = React.lazy(() => import('../pages/AdminRegisterAccount'))

// Collection Manager
const ProductList = React.lazy(() => import('../pages/ProductList'))
const ProductCreation = React.lazy(() => import('../pages/ProductCreation'))
const ProductUpdate = React.lazy(() => import('../pages/ProductUpdate'))

// Dashboard User
// Profile
const ProfileEdit = React.lazy(() => import('../pages/ProfileEdit'))

// Account Settings
const AccountEdit = React.lazy(() => import('../pages/AccountEdit'))

const routes = [
    // Home
    { path: '/', element: <HomePage /> },
    
    // Collection
    { path: '/collection', element: <Collection /> },
    { path: '/collection/:id', element: <CollectionDetail />},
    
    // Create Account
    { path: '/create-account', element: <CreateAccount /> },

    // Login
    { path: '/login', element: <Login /> },

    // Dashboard Admin
    // Admin Manager
    { path: '/admin-lists', element: <AdminList /> },
    { path: '/admin/edit/account/:id', element: <AdminAccountEdit /> },
    { path: '/admin/create/account', element: <AdminRegisterAccount /> },
    
    // Collection Manager
    { path: '/product-lists', element: <ProductList /> },
    { path: '/collection/create', element: <ProductCreation /> },
    { path: '/collection/edit/:id', element: <ProductUpdate /> },

    // Dashboard User
    // Profile
    { path: '/edit/profile', element: <ProfileEdit /> },
    // Account Settings
    { path: '/edit/account', element: <AccountEdit /> }
]

export default routes