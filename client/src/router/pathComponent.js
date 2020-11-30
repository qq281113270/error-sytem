import React, {  lazy } from 'react';
const LogIn = lazy(() => import('@/pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Index = lazy(() => import('@/pages/Home/pages/Index'));
const ScriptException = lazy(() => import('@/pages/Home/pages/ScriptException'));

const pathComponent= [
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
    // 主页
    {
        name:'home',
        path:'/',
        component:Home,
        children:[
            {
                name:'home',
                path:'/index',
                component:Index,
            },
            {
                name:'scriptException',
                path:'/script-exception',
                component:ScriptException,
            }
        ]
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