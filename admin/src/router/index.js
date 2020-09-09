import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
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
        {path:'/hero/list',component:HeroList}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
