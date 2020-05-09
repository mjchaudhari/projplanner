import svc from "../../data/data.service";

const store = {
    user:{},
    projects:[]
}

const mutations = {
    SET_USER(state, user){
        state.currentUser = user;
    },
    updateProjects(state, projectsData){
        state.projects = projectsData;
    }
}

const actions = {
    async getProjects({commit}, userId) {
        var projList = await svc.getProjects(userId);
        commit("updateProjects",  projList)
    },
    async signInUser({commit}, signinData){
        let user = await svc.getUser(signinData.username)
        commit('SET_USER', user);
        return user;
    }
}
const getters = {
    projects(state){
        return state.projects
    },
    currentUser(state){
        return state.currentUser;
    }
}


export default {
    store,
    getters,
    actions,
    mutations,
}
