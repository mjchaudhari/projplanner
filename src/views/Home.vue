<template>
  <div>
      <div class="jumbotron">
          <h1 class="display-3">Project planner</h1>
          <p class="lead">Simple Gnatt charting to speculate how log it will take to deliver the project</p>
          <p></p>
      </div>
      <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4 col-sm-offset-4 center">
              <form >
                <fieldset class="center">
                    <div class="form-group form-group-lg">
                        <input type="email" class="form-control input-lg center-input"  id="email" aria-describedby="emailHelp" 
                            placeholder="Enter email" v-model="emailId">
                        <small id="emailHelp" class="form-text text-muted">We'll never email you nor share it with anyone else.</small>
                    </div>
                    
                </fieldset>
              </form>
              <button class="btn btn-info btn-lg center" v-on:click="signIn" >Go to your projects</button>

          </div>
          <div class="col-sm-4"></div>
      </div>
    </div>  
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    ...mapState({
      currentUser: state=> state.user
      })
  },
  data: ()=>{
    return {
      emailId : ""
    }
  },
  mounted() {
    this.resetUserStore()
    this.resetProjectStore()
  },
  methods:{
      ...mapActions(['signInUser', 'getProjects']),
      ...mapMutations(['resetUserStore', 'resetProjectStore']),

      signIn(){
        if(this.emailId != null && this.emailId != "") {
            this.$store.dispatch("signInUser", {username: this.emailId})
            .then(data=>{
              console.log(data)
              if(data != null){
                this.$router.push({name : "projects", params: { userId: data.id }})
              }

            })
            .catch(() => {
              console.error("failed")
            })
           }
      }
  }
}
</script>

<style scoped>
  .center {
    text-align : center;
    margin : 0 auto;
  }
  .center-input{
    margin : 0 auto;
  }
  .sized-50 {
    width: 50%;
  }
</style>