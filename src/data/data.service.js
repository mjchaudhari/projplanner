//import * as axios from 'axios'
//import cfg from '../config.json'

const data = {
    "id":"default",
    "name": "SCO",
    "descrition": "",
    "lastUpdated":"",
    "sprintSize":2,
    "team":[{
            "name": "Mahesh",
            "role":"dev",
            "pic": "",
            "skills" : [
                "javascript", "Jenkins", "API", "design"
            ],
            "workArea" : ["basket", "checkout", "cashPayment", "olc", "Jenkins", "giftcardSale"]
        },{
            "name": "Victor",
            "role":"dev",
            "pic": "",
            "skills" : [
                "javascript", "cardPayment", "API", "design", "Dynatrace", "GiftcardPayment"
            ],
            "workArea" : ["checkout", "cashPayment", "olc", "Jenkins"]
        },{
            "name": "Vivek",
            "role":"dev",
            "pic": "",
            "skills" : [
                "javascript", "cardPayment","css", "checkout"
            ],
            "workArea" : ["checkout", "cashPayment", "olc", "Jenkins"]
        },{
            "name": "Arya",
            "role":"dev",
            "pic": "",
            "skills" : [
                "javascript","API","DeviceService", "voucherPayment", "checkout", "receipts"
            ],
            "workArea" : ["checkout", "cashPayment" ]
        }
    ],
    "Skills required":[],
    "issues":[
        {
            "id":1,
            "name":"Setup",
            "type":"container",
            "desc":"SCO project",
            "size":1,
            "dev":"Mahesh",
            "parent":0,
            "dependencies":[],
            "children":[
                {
                    "id":2,
                    "name":"Gitlab Repository Setup",
                    "desc":"Create gitlab repository",
                    "type":"task",
                    "size":1,
                    "dev":"Mahesh",
                    "parent":"1",
                    "dependencies":[]
                },
                {
                    "id":4,
                    "name":"scaffolding",
                    "desc":"Create initial project structure, initial routing, reference scripts and styles ",
                    "type":"task",
                    "size":8,
                    "dev":"Mahesh",
                    "parent":"1",
                    "dependencies":[2]
                },
                {
                    "id":3,
                    "name":"Build setup",
                    "desc":"Write build job",
                    "type":"task",
                    "size":3,
                    "dev":"Mahesh",
                    "parent":"1",
                    "dependencies":[4,6]
                }
            ]
        },
        {
            "id":5,
            "name":"components",
            "desc":"Reusable components",
            "type":"container",
            "size":0,
            "dev":"",
            "dependencies":[],
            "parent":"",
            "children":[
                {
                    "id":6,
                    "name":"Virtual keyboard",
                    "desc":"Build virtual keyboard",
                    "type":"task",
                    "size":13,
                    "dev":"Mahesh",
                    "parent":"5",
                    "dependencies":[]
                }, {
                    "id":7,
                    "name":"Line item component",
                    "desc":"line item component",
                    "type":"task",
                    "size":5,
                    "dev":"Victo",
                    "parent":"5",
                    "dependencies":[3]
                },{
                    "id":8,
                    "name":"Number inpout directive",
                    "desc":"",
                    "type":"task",
                    "size":5,
                    "dev":"Vivek",
                    "parent":"5",
                    "dependencies":[3]
                },
                {
                    "id":9,
                    "name":"InputValidator",
                    "desc":"",
                    "type":"task",
                    "size":8,
                    "dev":"Mahesh",
                    "parent":"5",
                    "dependencies":[3]
                },{
                    "id":10,
                    "name":"Item search service",
                    "desc":"",
                    "type":"task",
                    "size":8,
                    "dev":"Mahesh",
                    "parent":"5",
                    "dependencies":[6,9]
                }
            ]
        }
    ]

}
function getProjects (){
  
    return new Promise((resolve)=>{
        setTimeout(() => {
            let retVal =  [{    
                id: "default",
                name: "Default",
                descrition: "POC for SCO using angularjs js "
            }, {    
                id: "2",
                name: "SCO-Vue",
                descrition: "POC for SCO using Vue js "
            }];
            resolve(retVal);
        }, 50);
    })
}
function getProjectData (userId, projId){
    console.log(userId + projId);
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(data);
            resolve(data);
        }, 50);
    });
    //const url = `./data.json`;
    // return axios.get(url)
    //     .then(function(data){
    //         console.log("data");
    //         return data.data;
    //     })
    //     .catch(function(e){
    //         console.log(e);
    //     });

}
const svc = {
    getProjects,
    getProjectData
};


export default svc;