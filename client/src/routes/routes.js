import React from 'react';

// Home
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))

// Collection
const Collection = React.lazy(() => import('../pages/Collection/Collection'))
const CollectionDetail = React.lazy(() => import('../pages/Collection/CollectionDetail'))
const CollectionFilter = React.lazy(() => import("../pages/Collection/CollectionFilter"))

// Create Account
const CreateAccount = React.lazy(() => import('../pages/CreateAccount/CreateAccount')) 

// Login
const Login = React.lazy(() => import('../pages/Login/Login')) 

// Dashboard Admin
// Admin Manager
const AdminList = React.lazy(() => import('../pages/AdminManager/AdminList'))
const AdminAccountEdit = React.lazy(() => import('../pages/AdminManager/AdminAccountEdit'))
const AdminRegisterAccount = React.lazy(() => import('../pages/AdminManager/AdminRegisterAccount'))

// Collection Manager
const ProductList = React.lazy(() => import('../pages/CollectionManager/ProductList'))
const ProductCreation = React.lazy(() => import('../pages/CollectionManager/ProductCreation'))
const ProductUpdate = React.lazy(() => import('../pages/CollectionManager/ProductUpdate'))

// Dashboard User
// Profile
const ProfileEdit = React.lazy(() => import('../pages/Profile/ProfileEdit'))

// Account Settings
const AccountSettings = React.lazy(() => import('../pages/AccountSettings/AccountSettings'))

const routes = [
    // Home
    { path: '/', element: <HomePage /> },
    
    // Collection
    { path: '/collection', element: <Collection /> },
    { path: '/collection/:id', element: <CollectionDetail />},
    { path: '/search', element: <CollectionFilter /> },
    
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
    { path: '/collection-lists', element: <ProductList /> },
    { path: '/collection/create', element: <ProductCreation /> },
    { path: '/collection/edit/:id', element: <ProductUpdate /> },

    // Dashboard User
    // Profile
    { path: '/edit/profile', element: <ProfileEdit /> },
    // Account Settings
    { path: '/edit/account', element: <AccountSettings /> }
]

export default routes