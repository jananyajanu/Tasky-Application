// var  state={
//     taskList: [
//         {
//             imageUrl:"",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl:"",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl:"",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl:"",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl:"",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl:"",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         }
//     ]
// };

const state={
    taskList:[],
};

//DOM operations
const taskContents=document.querySelector("task__contents");
const taskModal=document.querySelector("task_modal_body");

// console.log(taskContents);
// console.log(taskModal);

const htmlTaskContent=({id, title, description, type, url}) => ();