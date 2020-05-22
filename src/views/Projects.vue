<template>
  <div div="col-md-12">
      <h1>Projects</h1>
        <i class="material-icons icon-btn" v-on:click="editProject">edit</i> Create project
        <div class="col-md-12 row"  >
            <div class="col-md-4" v-for="p in projects" v-bind:key="p.id">
                <div class="card border-info mb-3" >
                    <div class="card-body" >
                        <h4 class="card-title">{{p.name}}</h4>
                        <p class="card-text">{{p.description}}</p>
                        <router-link :key="p.id" class="" :to="{name: 'plan', params:{projId: p.id} }">
                            {{p.name}}
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
            'projects'
            ]),
        projects() {
            return this.$store.getters.projects
        }
        
    },
    created(){
        
    },
    mounted(){
        //this.getProjects();
        console.log(this.projects);
    },
    methods:{
        ...mapActions([
            'getProjects'
        ]),
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