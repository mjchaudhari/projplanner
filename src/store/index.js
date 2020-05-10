import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./modules/userStore";
import projectStore from  './modules/projectStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userStore,
        projectStore
    }
})