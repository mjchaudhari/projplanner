<template>
    <div>
        <form >
            <fieldset>
                <div class="filed-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter project name"
                        v-model="project.name">
                </div>
                <div class="filed-group">
                    <label for="desc">Description</label>
                    <textarea class="form-control" id="desc" placeholder="Enter description"
                    v-model="project.name"></textarea>
                </div>
                <div class="filed-group">
                    <label for="sprintSize">Sprint Size</label>
                    <input type="number" class="form-control" id="sprintSize" placeholder=""
                        v-model="project.sprintSize">
                </div>
            </fieldset>
        </form>
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
        svc.getProjectData(this.$route.params.projId)
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