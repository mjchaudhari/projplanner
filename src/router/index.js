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
    path: './:userId/projects',
    name: 'projects',
    component: Projects,
    beforeEnter: (to, from,  next) =>{
        //Get all projects of this user

        store.dispatch('getProjects' )
        .then (()=>{
          console.log("proejcts getched in store")
          next();
        })
        .catch(()=>{
          next();
        })
    }
  },
  {
    //name:'project',
    path:'/:projId',
    component: Project,
    beforeEnter: (to, from, next) =>{
        let projId = to.params.projId;
        let userId = 'default';
        store.dispatch('getProjectData', {userId ,projId })
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
  routes
})

export default router
