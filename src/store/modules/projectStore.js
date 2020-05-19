//import axios from "axios"
import _ from 'lodash'
import svc from '../../data/data.service';
import { db } from "../../firebaseConfig"

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
            tasks: _.get(state, 'project.tasks'),
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

    updateTask: (state, task) => {
        let t = _.find(state.task, {id : task.id})
        if(t != null){
            t = task;
        } else {
            state.tasks.push(task)
        }
    }
}

const actions = {
    async getProjectData({commit}, params){
        let data  = await svc.getProjectData(params.projId)
        commit("updateProject", data)
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
        t.dependencies = _.map(task.dependenciesRef, d=> {
            if(d != null) {
                return db.doc(d.path) 
            } else {
                return null
            }
        })
        await svc.updateTask(projId, task.id,  t)
        dispatch('getProjectData', {projId: projId})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}