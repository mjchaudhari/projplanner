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
                                v-model="project.description"></textarea>
                            </div>
                            <div class="right">
                                <button type="button" class="btn btn-primary " @click="saveProjDetail">Save details</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="tasks-container">
            <TaskCard :task="t" v-for="t in project.tasks" v-bind:key="t.id" @edit="editTask(t)"/>
            <TaskCard  @create="editTask()"/>
        </div>
        <EditTaskModal v-if="isEditModalOpen" @ok="ok" @cancel="cancel" :data="taskToEdit" ></EditTaskModal>
    </div>  
</template>

<script>
import _ from "lodash";
import TaskCard from "../components/TaskCard";
import EditTaskModal from "../components/EditTaskModal"
export default {
    name: "Detail",
    components: {
        TaskCard,
        EditTaskModal
    },
    data(){
        return {
            isEditModalOpen: false,
            taskToEdit: null
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
    created(){
        console.log(this.$route.params.projId )
    },
    methods:{
        saveProjDetail(){

        },
        editTask(t){
            this.isEditModalOpen = true
            this.taskToEdit = _.cloneDeep(t)
        },
        ok(){
            this.isEditModalOpen = false
            this.taskToEdit = null
        },
        cancel(){
            this.isEditModalOpen = false
            this.taskToEdit = null
        }
    }
}
</script>

<style>
    .tasks-container {
        display: flex;
        flex-wrap: wrap;
        margin:5px;
     }
</style>