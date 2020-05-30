<template>
  <div div="col-md-12">
        <nav class="navbar navbar-expand ">
            <h1 class="navbar-brand" >Projects</h1>
            {{currentUser.fisrtName || currentUser.emailId}}
            
        </nav>
        <a class="icon-btn floating-icon bottom-right">
            <i class="material-icons  " v-on:click="createProject()">edit</i>
            <small>Create Project</small>
        </a>
        <div class="col-md-12 row"  >
            <div class="col-md-4" v-for="p in projects" v-bind:key="p.id">
                <div class="card border-default mb-3" >
                    <div class="card-header">
                        <h4 class="card-title">{{p.name}}</h4>
                        &nbsp;&nbsp;
                        <!-- <i class="material-icons icon-btn floating-icon right" v-on:click="leaveProj(p.id)">delete</i>                     -->
                    </div>
                    <div class="card-body" >
                        <p class="card-text">{{p.desc}}</p>
                        <router-link :key="p.id" class="" :to="{name: 'plan', params:{projId: p.id} }">
                            <i class="material-icons "> visibility</i> 
                        </router-link>
                        
                    </div>
                </div>
          </div> 
      </div> 
      <EditProjectModal 
        v-if="isEditProjectModalOpen" 
        @ok="editProjectOk" 
        @cancel="editProjectCancel" 
        :data="projectToEdit">
      </EditProjectModal>
  </div>  
</template>
<script>
//import svc from "../data/data.service";
import { mapActions, mapGetters } from 'vuex';
import _ from "lodash";
import EditProjectModal from "../components/EditProjectModal"
export default {
  name: "Projects",
  components:{
      EditProjectModal
  },
  data:()=>{
      return {
          title: "Projects",
            isEditProjectModalOpen: false,
            projectToEdit: {}
      }
    },
    computed:{
        ...mapGetters([
            'currentUser',
            'projects'
        ])
        
        
    },
    created(){
        
    },
    mounted(){
        //this.getProjects();
        console.log(this.projects);
    },
    methods:{
        ...mapActions([
            'getProjects',
            'leaveProject'
        ]),
        createProject(p){
            this.isEditProjectModalOpen = true
            this.projectToEdit = {
                
            }
            this.projectToEdit = _.cloneDeep(p)
        },
        editProjectOk(){
            this.isEditProjectModalOpen = false
            this.projectToEdit = null
            this.getProjects() 
        },
        editProjectCancel(){
            this.isEditProjectModalOpen = false
            this.projectToEdit = null
        },
        leaveProj(id){
            this.leaveProject(id)
        }        
    }
}
</script>