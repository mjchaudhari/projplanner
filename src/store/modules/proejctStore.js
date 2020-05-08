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
            team: _.get(state,'project.team')
        }
    },
    projectIssues:(state)=>{
        return _.get(state, 'project.issues');
    }
}

const mutations = {
    /***
     * Update/replace/add current project to store
     */
    updateProject: (state, project)=>{
        state.project = project
    },

    /**
     * Update/replace issues of current project to store
     */
    updateIsseues: (state,issues)=>{
        state.project.issues = issues;
    }
}

const actions = {
    async getProjectData({commit}, userId, projId){
        var data  = await svc.getProjectData(userId, projId)
        commit("updateProject", data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}