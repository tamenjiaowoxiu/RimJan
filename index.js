import Vue from 'vue'
import VueRouter from 'vue-router'

import Search from "../components/Search";
import Login2 from "../components/Login2";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Blogs from "../components/Blogs";
import NotFound from "../views/NotFound";
import Content from '../components/Content'
import Main from '../components/Main'
import Login from '../components/Login'
import Sousuo from '../components/Sousuo'
import Optest from "../components/Optest";
import UserList from '../views/user/List'
import UserProfile from '../views/user/Profile'
import Users from "../components/Users";
import Advertisement from "../components/Advertisement";
import header from "../components/Header";
// 安装路由，要用一个就导入，导完就用它，用什么插件就.use
Vue.use(VueRouter);

//挂载路由导航守卫


//配置导出路由

const router = new VueRouter({
  // history是不带#号的，默认是带#号的
  // mode:"history",

  routes:[
    {
      path:'/search',
      component:Search
    },
    {
      path:'/login2',
      component:Login2
    },
    {
      path:'/Blogs/:id?',
      name: 'Blogs',
      props: true,
      component:Blogs
    },
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/blog',
      component:Blog
    },
    {
      path:'/advertisement',
      component:Advertisement
    },
    {
      path:'/optest',
      component:Optest
    },
    {
      //路由路径 类似于@RequestMapping
      path: '/content',
      name: 'content',
      //跳转的组件
      component:Content
    },
    {
      path: '/main',
      name: 'main',
      props: true,
      component: () => import('@/components/Main.vue'),
      meta: {
        index: 1,
        isShow: true
      }
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path:'/login',
      name:'login',
      component: Login,
      children:[{
        path: '/header',
        name: 'header',
        props: true,
        component: header, //嵌套路由
      }]
    },
    // {
    //   path:'/header',
    //   name:'header',
    //   component: header,
    //   children:[
    //     {
    //       path: '/user',
    //       component: Users
    //     }
    //   ]
    // },
    //user绑定了login中的name，现在的问题是如何既分开路由跳转又让他们之间有绑定关系
    //原本问题是，因为login那个提交按钮会直接进入到用户界面（编程式导航）
    //最好的流程是，将路由守卫放到全局，当未登录的时候就强制登录，如果登录的话就一切正常。
    //首先模拟一下进入的流程
    //1.先图标链接个人中心，如果没有登录状态的话则会跳转到登录状态并提示您未登录。
    //2.登录完后将登录时的用户名和密码绑定到个人中心页中。
    //问题如果想直接进入'/user/:name'是不行的，如何
    {
      path: '/user/:name?',
      name: 'user',
      props: true,
      component: Users, //嵌套路由
      children: [
        {//还要加参数就后面接/:name就好
          path: '/user/profile/:id',
          name: 'UserProfile',//要对应
          component:UserProfile,
          props: true
        },
        {path:'/user/list',component:UserList},
      ]

    },
    {
      path: '/login',
      name: 'login',
      component:Login //嵌套路由
    },
    {
      path:'/sousuo',
      name: 'sousuo',
      component:Sousuo
    },
    {
      path:'/goHome',
      redirect:'/main'
    },
    {
      path:'/goSousuo',
      redirect:'/sousuo'
    },
    {
      path:'*',
      component:NotFound
    }
  ]
});
router.beforeEach((to,from,next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next（） 放行   next（‘/login’）  强制跳转。
  if (to.path === '/main') return next();
  if (to.path === '/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login');
  // if (tokenStr && to.path === '/user') return next('/user/:name')
  if (tokenStr) return next();
  // if (to.path === '/main') return next('/login')
})

export default router
