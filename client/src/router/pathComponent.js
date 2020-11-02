import React, {  lazy } from 'react';
const LogIn = lazy(() => import('@/pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));

const pathComponent= [
    // 主页
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'logLn',
        path:'/log-in',
        component:LogIn
    },
    {
        name:'register',
        path:'/register',
        component:Register
    },

   
]

const routePaths=pathComponent.reduce((acc,next)=>{
    acc={
        ...acc,
        [next.name]: next.path
    }
    return acc;
},{})
export  { 
    pathComponent,
    routePaths,
};