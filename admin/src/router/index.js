import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
import { Form } from 'element-ui'

Vue.use(VueRouter)

  const routes = [
    {
        path:'/login',
        name:'login',
        component:Login,
        meta: {isPublic : true}
    },
    {
        path: '/',
        name: 'main',
        component: Main,
        children:[
            {path:'/category/create',component:CategoryEdit},
            {path:'/category/edit/:id',component:CategoryEdit,props:true},
            {path:'/category/list',component:CategoryList},

            {path:'/item/create',component:ItemEdit},
            {path:'/item/edit/:id',component:ItemEdit,props:true},
            {path:'/item/list',component:ItemList},

            {path:'/hero/create',component:HeroEdit},
            {path:'/hero/edit/:id',component:HeroEdit,props:true},
            {path:'/hero/list',component:HeroList},

            {path:'/article/create',component:ArticleEdit},
            {path:'/article/edit/:id',component:ArticleEdit,props:true},
            {path:'/article/list',component:ArticleList},

            {path:'/ad/create',component:AdEdit},
            {path:'/ad/edit/:id',component:AdEdit,props:true},
            {path:'/ad/list',component:AdList},

            {path:'/adminuser/create',component:AdminUserEdit},
            {path:'/adminuser/edit/:id',component:AdminUserEdit,props:true},
            {path:'/adminuser/list',component:AdminUserList}
        ]
    }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
    if(!to.meta.isPublic && !localStorage.token){
        return next('/login')
    }
    next()
})

export default router
