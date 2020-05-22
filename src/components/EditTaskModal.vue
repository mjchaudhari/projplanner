<template>
  <Modal :classes="'mod-lg'" :title="title" @ok="ok" @cancel="cancel">
    <form  class>
      <fieldset class="">
          <div class="row">
              <div class="col-5">
                  <div class="filed-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Enter project name"
                          v-model="task.name">
                  </div>
                  <div class="filed-group ">
                      <label for="sprintSize">Size (efforts)</label>
                      <input type="number" class="form-control col-8" id="sprintSize" placeholder=""
                          v-model="task.size">
                  </div>
              </div>
              <div class="col-7">
                  <div class="filed-group">
                      <label for="desc">Description</label>
                      <textarea class="form-control" id="desc" placeholder="Enter description"
                      v-model="task.desc"></textarea>
                  </div>
              </div>
              <div class="col-12">
                <div class="dependency-header">
                  <h4>Dependencies:</h4> 
                  <!-- <div class="alert alert-dismissible alert-info">
                    <strong>Note!</strong> Ensure that there are no circular dependencies.
                  </div> -->
                  
                </div>
                <p>
                    <strong>Note!</strong> Ensure that there are no circular dependencies.
                  </p>
                <ul class="dependency-list" v-if="refTasksData.length > 0">
                  
                  <li class="dependency-list-item" v-for="t in refTasksData" :key="t.id" >
                      <span class="">
                        <input class="" type="checkbox" v-model="t.isSelected" :value="t" :id="t.id">
                        {{t.name}}
                      </span>                      
                  </li>
                </ul>
              </div>
          </div>
      </fieldset>
  </form>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import { mapActions } from 'vuex';
import _ from "lodash";
export default {
  name: 'EditTaskModal',
  components: {
    Modal
  },
  props: {
    data: Object,
    refTasks: Array
  },
  data(){
    return {
      title:"",  
      task:{},
      refTasksData:[]
    }
  },
  computed : {
    selectedDependencies(){
      let deps = _.filter( this.refTasksData, {isSelected: true})
      return deps;
    }
  },
  created(){
    this.task = this.data || {dependencies:""};
    
    if (this.task.id != null){  
      this.title = `${this.task.name}`;
    } else {
      this.title = 'Create task';
    }
    this.refTasksData = _.cloneDeep(this.refTasks)
    //Select known dependencies
    _.remove(this.refTasksData, {id: this.task.id})
    _.forEach(this.task.dependencies, (d) => {
      let td = _.find(this.refTasksData, {id : d.id})
      if(td){
        td.isSelected = true
      }
    });
  },
  methods: {
    ...mapActions(['updateTask']),
    addDependency(){
      if(this.selectedDep != null && this.selectedDep.id != this.task.id){

        let exising = _.find(this.task.dependencies, {id: this.selectedDep.id})
        if(exising == null){
          this.task.dependencies.push(this.selectedDep);
        }
      }
      this.selectedDep = null
    },
    removeDependency(id){
      //let exising = _.find(this.task.dependencies, {id: id})
      let idx = _.findIndex(this.task.dependencies, {id: id})
      if(idx >= 0) {
        this.task.dependencies.splice(idx,1)
      }
    },
    ok(){
      this.task.dependencies = this.selectedDependencies
      this.$store.dispatch("updateTask", this.task)
      .then(res=>{
        console.log(res)
        this.$emit("ok", {task: this.task});
      })
      if (this.task.id == null) {
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

  .dependency-list{
    list-style: none;
    align-content: space-between;
    height: 100px;
    overflow: auto;
  }
  .dependency-list-item{
    list-style: none;
    align-content: space-between;
  }
</style>
