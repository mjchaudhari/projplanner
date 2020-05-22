<template>
  <div class="card border-secondary mb-3 task-size" >
    <div v-if="task!=null" class="card-header">
      {{task.name}} 
      &nbsp;&nbsp;
      <span class="badge badge-primary">{{task.size}}</span>      
      <i class="material-icons icon-btn floating-icon right" v-on:click="edit">create</i>
      
    </div>
    <div class="card-body">
      <div v-if="task!=null">
        <p class="card-text">{{task.desc}}</p>
        <h6 v-if="task.dependencies.length > 0">Dependencies</h6>
        <ul v-if="task.dependencies.length > 0">
          <li  v-for="(d, index) in task.dependencies" :key="index">
            <span v-if="d != null">{{d.name}}</span>
          </li>
        </ul>
      </div>
      <div v-if="task==null" class="card-create">
        <i class="material-icons md-36 icon-btn icon-large card-center" v-on:click="create">add_circle</i>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'TaskCard',
  props: {
    task: Object
  },
  data(){
    return {}
  },
  mounted(){
  },
  methods:{
    edit(){
      this.$emit("edit")
    },
    create(){
      this.$emit("create")
    }
  }
}
</script>

<style>
  .task-size {
    min-width: 20rem;
    max-width: 20rem;
    margin: 5px;
    min-height: 220px;
    max-height: 220px;
  }
</style>