import svc from "../../data/data.service";
import { userCollection} from "../../firebaseConfig"

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
    async getProjects({commit}) {
        var projList = await svc.getProjects();
        commit("updateProjects",  projList)
    },
    signInUser({commit}, signinData){
        console.log("signinCalled")
        //get the user doc from FB. and create if not exist
        // await userCollection.add({
        //     "emailId": "username",
        //     "firstName": "",
        //     "lastName" : ""
        // });
        // let allusers = db.collection("users").get();
        // allusers.then(data=>{
        //     data.forEach(d => {
        //         console.log(d);    
        //     });
            

        // })
        console.log(signinData.username)
        let p = new Promise((resolve )=> {
            try {
            userCollection
                .where('emailId', '==', signinData.username)
                .onSnapshot(snapshot => {
                    console.log(signinData.username);
                    let user = {
                            "emailId": signinData.username,
                            "firstName": "not set",
                            "lastName" : "not set"
                        };
                    if(snapshot.empty == true) {
                        userCollection.add(user).then(docref => {
                            user.id = docref.id
                            commit('SET_USER', user);
                            resolve(user);
                        });

                    } else {
                        let user = snapshot.docs[0].data();
                        user.id = snapshot.docs[0].id
                        commit('SET_USER', user);
                        resolve(user);
                    }
                });
            }
            catch(e){
                console.error(e);
            }            
        });

        return p;
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
