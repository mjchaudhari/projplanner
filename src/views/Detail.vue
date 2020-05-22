<template>
    <div class="">
        
        <div class="proj-details sketchy-border">
            <div class="props-header">
                <h1 class="display-3">{{projectDetails.name}}</h1>
                <i class="material-icons icon-btn" v-on:click="editProject(projectDetails)">edit</i>
            </div>
            
            <p class="lead">{{projectDetails.desc}}</p>
            <hr class="my-2">
            <div class="props-container">
                <span>Sprint size: <strong>{{projectDetails.sprintSize}}</strong></span>
                <span>Created by: <strong>{{projectDetails.createdBy.firstName || projectDetails.createdBy.emailId}}</strong></span>
            </div>
            
        </div>
        <div class="tasks-container">
            <TaskCard :task="t" v-for="t in tasks" v-bind:key="t.id" @edit="editTask(t)"/>
            <TaskCard  @create="editTask()"/>
        </div>
        <EditProjectModal v-if="isEditProjectModalOpen" @ok="editProjectOk" @cancel="editProjectCancel" 
            :data="projectToEdit"
            >
        </EditProjectModal>
        <EditTaskModal v-if="isEditModalOpen" @ok="editTaskOk" @cancel="editTaskCancel" 
            :data="taskToEdit"
            :refTasks="tasks" >
        </EditTaskModal>
    </div>  
</template>

<script>
import _ from "lodash";
import TaskCard from "../components/TaskCard";
import EditTaskModal from "../components/EditTaskModal"
import EditProjectModal from "../components/EditProjectModal"
import { mapGetters } from 'vuex';
export default {
    name: "Detail",
    components: {
        TaskCard,
        EditTaskModal,
        EditProjectModal
    },
    data(){
        return {
            isEditModalOpen: false,
            taskToEdit: null,
            isEditProjectModalOpen: false,
            projectToEdit: null
        }
    }, 
    computed:{
        ...mapGetters(['projectDetails','tasks'])
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
        editTaskOk(){
            this.isEditModalOpen = false
            this.taskToEdit = null
        },
        editTaskCancel(){
            this.isEditModalOpen = false
            this.taskToEdit = null
        },
        editProject(p){
            this.isEditProjectModalOpen = true
            this.projectToEdit = {
                
            }
            this.projectToEdit = _.cloneDeep(p)
        },
        editProjectOk(){
            this.isEditProjectModalOpen = false
            this.projectToEdit = null
        },
        editProjectCancel(){
            this.isEditProjectModalOpen = false
            this.projectToEdit = null
        }
    }
}
</script>

<style>
    .proj-details{
        padding: 1rem;
        margin: 0.5rem;
    }
    .props-header{
        display: flex;
        flex-wrap: wrap;
        margin:5px;
        justify-content: space-between;
    }
    .props-container {
        display: flex;
        flex-wrap: wrap;
        margin:5px;
        justify-content: space-between;
     }
    .tasks-container {
        display: flex;
        flex-wrap: wrap;
        margin:5px;
     }
</style>