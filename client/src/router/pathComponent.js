/*
 * @Author: your name
 * @Date: 2020-11-11 11:21:09
 * @LastEditTime: 2021-08-12 14:45:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/router/pathComponent.js
 */
import React, {  lazy } from 'react';
const LogIn = lazy(() => import('@/pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Index = lazy(() => import('@/pages/Home/pages/Index'));
const Graphql = lazy(() => import('@/pages/Graphql'));
const ScriptException = lazy(() => import('@/pages/Home/pages/ScriptException'));

const pathComponent= [
    {
        name:'graphql',
        path:'/graphql',
        component:Graphql
    },
    {
        name:'logLn',
        path:'/logLn',
        component:LogIn
    },
    {
        name:'register',
        path:'/register',
        component:Register
    },
    // 主页二级路由
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