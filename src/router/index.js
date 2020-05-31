import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from "../views/Projects";
import Project from "../views/Project";
import Plan from "../views/Plan"
import Detail from "../views/Detail";

import store from "../store"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:userId/projects',
    name: 'projects',
    component: Projects,
    beforeEnter: (to, from,  next) =>{
        //Get all projects of this user
        Promise.all([
          store.dispatch('getUserDetails', to.params.userId),
          store.dispatch('getProjects', to.params.userId )
        ])
        .then (()=>{
          console.log("proejcts updated in store")
          next();
        })
        .catch(()=>{
          next();
        })
    }
  },
  {
    //name:'project',
    path:'/:userId/:projId',
    component: Project,
    beforeEnter: (to, from, next) =>{
        let projId = to.params.projId;
        Promise.all([
          store.dispatch('getProjectDetails', { projId }),
          store.dispatch('getTasks', { projId })
        ])
        .then (()=>{
          console.log("proejcts getched in store")
          next();
        })
        .catch(()=>{
          next();
        })
    },
    children:[{
          name:'plan',
          path:'/',
          component: Plan,
      },{
          name: "detail",
          path:'detail',
          component: Detail
    }]
}];


const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  routes
})

export default router
