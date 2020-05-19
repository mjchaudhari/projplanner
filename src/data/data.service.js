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
                        resolve(user);
                    });

                } else {
                    user = snapshot.docs[0].data();
                    user.id = snapshot.docs[0].id
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
function getProjects (userId){
    console.log(userId)
    let p = new Promise((resolve )=> {
        //get projects created by current user
        let userRef = userCollection.doc(userId)
        projectCollection
            .where("contributors", "array-contains", userRef)
            .onSnapshot( (s) => {
                let projects = [];
                s.forEach(p => {
                    let proj = p.data();
                    proj.id = p.id;
                    projects.push(proj);
                });
                resolve(projects);
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
                getProjectTasks(p.id)
                    .then(tasks => {
                        console.log(proj)
                        proj.tasks = tasks
                        resolve(proj)
                    })
            })
    })
    return p;
}
function getProjectTasks (projId){
    console.log(projId);
    let p = new Promise(resolve => {
        projectCollection
            .doc(projId)
            .collection('tasks')
            .onSnapshot( (s) => {
                let tasks = []
                s.forEach(t => {
                    let task = t.data();
                    task.id = t.id;
                    task.dependenciesRef = task.dependencies;
                    task.dependencies = _.map( task.dependencies, (t)=> {
                        if(t == null) return
                        return t.id
                    })
                    tasks.push(task);
                });
                resolve(tasks);
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
    getProjects,
    getProjectData,
    updateTask
};


export default svc;