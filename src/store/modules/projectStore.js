//import axios from "axios"
import _ from 'lodash'
import svc from '../../data/data.service';
//import { db } from "../../firebaseConfig"

const state = {
    project : {},
    projDetail: {},
    contributors:[],
    tasks:[]

}

const getters = {
    project:(state)=>{
        return {
            id : _.get(state,'project.id'),
            name : _.get(state,'project.name'),
            description: _.get(state,'project.description'),
            sprintSize: _.get(state,'project.sprintSize'),
            tasks: _.get(state, 'project.tasks'),
            team: _.get(state,'project.team')
        }
    },
    projectDetails:(state)=>{
        return state.project
    },
    tasks:(state)=>{
        return state.tasks
    },
    contributors:(state)=>{
        return state.contributors
    }
}

const mutations = {
    resetProjectStore: (state) => {
        state.project = {},
        state.tasks = [];
        state.contributors = [];
    },
    /***
     * Update/replace/add current project to store
     */
    updateProject: (state, project)=>{
        state.project = project
    },
    updateTasks: (state, tasks) => {
        state.tasks = tasks
    },
    updateContributors: (state, contributors) => {
        state.contributors = contributors
    }
}

const actions = {
    async getProjectDetails({commit}, params){
        let data  = await svc.getProjectData(params.projId)
        commit("updateProject", data)
    },
    async getTasks({commit}, params){
        let data  = await svc.getTasks(params.projId)
        commit("updateTasks", data)
    },
    async getContributors({commit}, params){
        let data  = await svc.getContributors(params.projId)
        commit("updateContributors", data)
    },

    async updateProject({state, dispatch}, project){
        let projId = state.project.id;

        let p = {
            name: project.name,
            desc: project.desc || '',
            size: project.sprintSize || 2,
            //team: project.team || [],
            createdBy: project.createdBy
        }
        // t.contributors = _.map(project.contributors, c=> {
        //     if(c != null) {
        //         return c.ref
        //     } else {
        //         return null
        //     }
        // })
        let proj = await svc.updateProject(projId, p)
        await dispatch('getProjectDetails', {projId: proj.id})
        //dispatch('getContributors', {projId: projId})
    },
    async leaveProject({dispatch}, projId){
        let p = {
            createdBy: null
        }
        // t.contributors = _.map(project.contributors, c=> {
        //     if(c != null) {
        //         return c.ref
        //     } else {
        //         return null
        //     }
        // })
        let proj = await svc.updateProject(projId, p)
        await dispatch('getProjectDetails', {projId: proj.id})
        //dispatch('getContributors', {projId: projId})
    },
    async updateTask({state, dispatch}, task){
        let projId = state.project.id;

        let t = {
            name: task.name,
            desc: task.desc,
            size: task.size || 1,
            reqSkill: task.reqSkill || [],
            priority: task.priority || 0,
        }
        t.dependencies = _.map(task.dependencies, d=> {
            if(d != null) {
                return d.ref
            } else {
                return null
            }
        })
        await svc.updateTask(projId, task.id,  t)
        await dispatch('getTasks', {projId: projId})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}