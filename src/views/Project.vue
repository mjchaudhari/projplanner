<template>
  <div>
        
        <nav class="nav nav-bar">
            <h1 class="navbar-brand" >{{project.name}}</h1>
            <router-link class="nav-link" :to="{name: 'plan', params:{projId: project.id}}">Plan</router-link>
            <router-link class="nav-link" :to="{name: 'detail', params:{projId: project.id}}">Detail</router-link>
            <router-link class="nav-link" :to="{name: 'projects'}">Back to all projects</router-link>
        </nav>
        <h3>{{project.description}}</h3>
        <router-view></router-view>
    </div>  
</template>

<script>
import svc from "../data/data.service"

export default {
    name: "Project",
    data(){
        return {}
    }, 
    computed:{
        project(){
            return this.$store.getters.projectDetails || {};
        }
    },
    beforeCreate(){
      console.log('before create : ' + this.$route.params.projId );
    },
    created(){
        console.log(this.$route.params.projId )
        svc.getProjectData(null, this.$route.params.projId)
        .then((data)=>{
            //Update the store
            this.$store.commit('updateProject', data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    methods:{

    }
}
</script>

<style>
    .nav-bar{
        border-width: 2px;
        border-style: solid;
        border-radius: 25px 25px 55px 5px/5px 55px 25px 25px;
    }
</style>