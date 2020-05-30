//import * as axios from 'axios'
//import cfg from '../config.json'
import { userCollection, projectCollection } from "../firebaseConfig"
import _  from "lodash"
function getUser(userName){
    let p = new Promise((resolve )=> {
        try {
        userCollection
            .where('emailId', '==', userName)
            .onSnapshot(snapshot => {
                console.log(userName);
                let user = {
                        "emailId": userName,
                        "firstName": "not set",
                        "lastName" : "not set"
                    };
                if(snapshot.empty == true) {
                    userCollection.add(user).then(docref => {
                        user.id = docref.id
                        user.ref = docref.ref
                        resolve(user);
                    });

                } else {
                    user = snapshot.docs[0].data();
                    user.id = snapshot.docs[0].id
                    user.ref = snapshot.docs[0].ref
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

async function getUserDetails(id){
    let u = await userCollection.doc(id).get()
    let user = u.data();
    user.id = u.id;
    user.ref = u.ref
    return user;
}

function updateUserDetails(user){
    let p = new Promise((resolve )=> {
        try {
        var u = {
            firstName: user.firstName,
            lastName: user.lastName
        }    
        userCollection.doc(user.id)
            .update(u)
            .then(()=>{
                resolve(user);
            });
        }
        catch(e){
            console.error(e);
        }            
    });

    return p;
}

async function updateProject(projId, project){
    
    let projDocRef
    let updated = null
    if(projId == null){
        projDocRef = projectCollection.doc()
        await projDocRef.set(project)
        project.id = projDocRef.id
        console.log('added')

    } else {
        projDocRef = projectCollection.doc(projId);
        updated = await projDocRef.update(project)
    }

    return updated
}
// function updateProject(projId, project){
//     let p = new Promise(resolve => {
//         let projDocRef
//         let projPromise 
//         if(projId == null){
//             projDocRef = projectCollection.doc()
//             projPromise = projDocRef.add(project)

//         } else {
//             projDocRef = projectCollection.doc(projId);
//             projPromise = projDocRef.update(project)
//         }
//         projPromise.then((proj)=>{
//             resolve(proj);
//         })
//     })
//     return p
// }
function getProjects (userId){
    console.log(userId)
    let p = new Promise((resolve )=> {
        //get projects created by current user
        // 
        let userRef = userCollection.doc(userId)
        let promises = []
        Promise.all([
            projectCollection.where("createdBy", "==", userRef),
            projectCollection.where("contributors", "array-contains", userRef)
        ]).then((ss)=>{
            ss.forEach(s => {
                let sp = new Promise((res) => {
                    s.onSnapshot(sp => {
                        let projects = []
                        sp.forEach( p => {
                            // var existing = _.find(projects, {id : p.id})
                            // if(existing != null)
                            //     return;

                            let proj = p.data();
                            proj.id = p.id;
                            proj.ref = p.red
                            projects.push(proj);
                        })
                        res(projects)
                    }); 
                })
                promises.push(sp)
            });
            
            Promise.all(promises)
            .then((data)=>{
                //console.data(data)
                let projects = _.unionBy(...data, "id")
                console.log(projects.length)
                resolve(projects)
            })  
        })
    })
    return p;
}
function getProjectData (projId){
    console.log(projId);
    let proj = {}
    let p = new Promise(resolve => {
        projectCollection
            .doc(projId)
            .get()
            .then( p => {
                proj = p.data();
                proj.id = p.id;
                proj.ref = p.ref
                proj.createdBy
                    .get()
                        .then(u=>{
                            let c = u.data()
                            c.id = u.id;
                            c.ref = u.ref
                            proj.createdBy = c
                            resolve(proj)
                        })
                
            })
    })
    return p;
}
function getProject (projId){
    console.log(projId);
    let proj = {}
    let p = new Promise(resolve => {
        projectCollection
            .doc(projId)
            .get()
            .then( p => {
                proj = p.data();
                proj.id = p.id;
                getTasks(p.id)
                    .then(tasks => {
                        console.log(proj)
                        proj.tasks = tasks
                        resolve(proj)
                    })
            })
    })
    return p;
}

function getContributors (projId){
    console.log(projId);
    let p = new Promise(resolve => {
        let projectTaskPromies = []
        projectCollection
            .doc(projId)
            .collection('tasks')
            .onSnapshot( (s) => {
                s.forEach(t => {
                    let projTaskPromise = getTaskDependencies(t)
                    projectTaskPromies.push(projTaskPromise)
                });
                Promise.all(projectTaskPromies)
                .then((projTasks)=>{
                    resolve(projTasks)
                })
            })
    })
    return p;
}
function getTasks (projId){
    console.log(projId);
    let p = new Promise(resolve => {
        let projectTaskPromies = []
        projectCollection
            .doc(projId)
            .collection('tasks')
            .onSnapshot( (s) => {
                s.forEach(t => {
                    let projTaskPromise = getTaskDependencies(t)
                    projectTaskPromies.push(projTaskPromise)
                });
                Promise.all(projectTaskPromies)
                .then((projTasks)=>{
                    resolve(projTasks)
                })
            })
    })
    return p;
}

function getTaskDependencies(t){
    let p = new Promise((resolveTask)=>{
        let task = t.data()
        task.id = t.id;
        task.ref = t.ref
        let dependenciesPromises = []
        if(task.dependencies != null &&  task.dependencies.length > 0){
            _.forEach(task.dependencies, d=>{
                if(d!=null){
                    let depPromise = new Promise((resolveDep) => {
                        d.get()
                        .then(td=>{
                            let taskDep = td.data()
                            taskDep.id = td.id
                            taskDep.ref = td.ref
                            resolveDep(taskDep)
                        })
                    })
                    dependenciesPromises.push(depPromise)   
                } 
            })
        }
        Promise.all(dependenciesPromises)
        .then((depTasks) =>{
            task.dependencies = depTasks
            resolveTask(task)
        })
    })
    return p;
}
function updateTask(projId, taskId, task){
    let p = new Promise(resolve => {
        let taskCollRef
        let taskPromise 
        if(taskId == null){
            taskCollRef = projectCollection.doc(projId).collection('tasks').doc();
            taskPromise = taskCollRef.set(task)

        } else {
            taskCollRef = projectCollection.doc(projId).collection('tasks').doc(taskId);
            taskPromise = taskCollRef.update(task)
        }
        taskPromise.then(()=>{
            resolve();
        })
    })
    return p
}
const svc = {
    getUser,
    getUserDetails,
    updateUserDetails,
    getProjects,
    getProject,
    updateProject,
    getProjectData,
    getTasks,
    getContributors,
    updateTask
};


export default svc;