<template>
    <div class="">
        <div class="alert alert-dismissible alert-primary">
            <form  class>
                <fieldset class="">
                    <div class="row">
                        <div class="col-5">
                            <div class="filed-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter project name"
                                    v-model="project.name">
                            </div>
                            <div class="filed-group ">
                                <label for="sprintSize">Sprint Size</label>
                                <input type="number" class="form-control col-3" id="sprintSize" placeholder=""
                                    v-model="project.sprintSize">
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="filed-group">
                                <label for="desc">Description</label>
                                <textarea class="form-control" id="desc" placeholder="Enter description"
                                v-model="project.name"></textarea>
                            </div>
                            <div class="right">
                                <button type="button" class="btn btn-primary " @click="saveProjDetail">Save details</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <div>
            <div class="card border-secondary mb-3" style="max-width: 20rem;" v-for="t in project.team" v-bind:key="t.id">
                <div class="card-header">{{t.name}}</div>
                <div class="card-body">
                    <p/>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <pre>{{project}}</pre>
    </div>  
</template>

<script>
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
    },
    methods:{
        saveProjDetail(){

        }
    }
}
</script>

<style>

</style>