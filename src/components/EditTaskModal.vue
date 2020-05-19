<template>
  <Modal :title="title" @ok="ok" @cancel="cancel">
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
          </div>
      </fieldset>
  </form>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import { mapActions } from 'vuex';
export default {
  name: 'EditTaskModal',
  components: {
    Modal
  },
  props: {
    data: Object
  },
  data(){
    return {
      title:"",  
      task:{}
    }
  },
  computed : {
    // task() {
    //   return this.data;
    // }
  },
  created(){
    this.task = this.data || {};
    
    if (this.task.id != null){  
      this.title = `Edit ${this.task.name}`;
    } else {
      this.title = 'Create task';
    }
  },
  methods: {
    ...mapActions(['updateTask']),
    ok(){
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

</style>
