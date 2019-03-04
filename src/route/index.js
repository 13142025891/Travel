import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import City from '../components/city/City.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        component: Home
    },{
        path:"/city",
        name:"City",
        component:City
    }]
})