<template>
  <div>
        
        <nav class="navbar navbar-expand ">
            <h1 class="navbar-brand" >{{project.name}}</h1>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'plan', params:{projId: projId}}">Plan</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'detail', params:{projId: projId}}">Detail</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'projects'}">Back to all projects</router-link>
                </li>
            </ul>
        </nav>
        <h3>{{project.description}}</h3>
        <router-view></router-view>
    </div>  
</template>

<script>

export default {
    name: "Project",
    data(){
        return {
            projId : this.$route.params.projId
        }
    }, 
    computed:{
        project(){
            return this.$store.getters.projectDetails || {};
        }
    },
    beforeCreate(){
      console.log('before create : ' + this.$route.params.projId );
    },
    mounted(){
        console.log(this.$route.params.projId )        
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