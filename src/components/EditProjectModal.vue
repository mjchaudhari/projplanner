<template>
  <Modal :classes="'mod-md'" :title="title" @ok="ok" @cancel="cancel">
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
                      <label for="sprintSize">Sprint length</label>
                      <input type="number" class="form-control col-8" id="sprintSize" placeholder=""
                          v-model="project.sprintSize">
                  </div>
              </div>
              <div class="col-7">
                  <div class="filed-group">
                      <label for="desc">Description</label>
                      <textarea class="form-control" id="desc" placeholder="Enter description"
                      v-model="project.desc"></textarea>
                  </div>
              </div>
          </div>
      </fieldset>
  </form>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import { mapActions, mapGetters } from 'vuex';
//import _ from "lodash";
export default {
  name: 'EditProjectModal',
  components: {
    Modal
  },
  props: {
    data: Object
    
  },
  data(){
    return {
      title:"",  
      project:{},
    }
  },
  computed : {
    ...mapGetters(['currentUser'])
  },
  created(){
    this.project = this.data || {};
    
    if (this.project.id != null){  
      this.title = `${this.project.name}`;
    } else {
      this.title = 'Create Project';
    }
  },
  methods: {
    ...mapActions(['updateProject']),
    ok(){
      
      let creator = this.project.createdBy || this.currentUser
      this.project.createdBy = creator.ref
      this.$store.dispatch("updateProject", this.project)
      .then(res=>{
        console.log(res)
        this.$emit("ok", {project: this.project});
      })
      if (this.project.id == null) {
        //creating new
      } else {
        //update
      }  
    },
    cancel(){
      this.$emit("cancel");
    }
  }
}
</script>

<style>
  .dependency-header{
    margin:5px;
    display: flex;
    align-content: space-between;
  }
  .div-inline-wrap{
    margin:5px;
    display: inline-flex;
  }
  .dependency-list-wrap{
    max-height: 50px;
    
  }
  .dependency-list{
    list-style: none;
    align-content: space-between;

  }
  .dependency-list-item{
    list-style: none;
    align-content: space-between;
  }
</style>
