<template>
    <div>
            
    </div>  
</template>

<script>
import svc from "../data/data.service"
export default {
    name: "Detail",
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

</style>