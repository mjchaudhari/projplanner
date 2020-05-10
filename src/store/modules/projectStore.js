//import axios from "axios"
import _ from 'lodash'
import svc from '../../data/data.service';

const state = {
    project : {}
}

const getters = {
    projectDetails:(state)=>{
        return {
            id : _.get(state,'project.id'),
            name : _.get(state,'project.name'),
            description: _.get(state,'project.description'),
            sprintSize: _.get(state,'project.sprintSize'),
            tasks: _.get(state, 'tasks'),
            team: _.get(state,'project.team')
        }
    },
}

const mutations = {
    /***
     * Update/replace/add current project to store
     */
    updateProject: (state, project)=>{
        state.project = project
    },

}

const actions = {
    async getProjectData({commit}, params){
        var data  = await svc.getProjectData(params.projId)
        commit("updateProject", data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}