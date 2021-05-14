const db = require("../../data/dbConfig");

//Create New Task With New Task

async function createNewTask(newTask){

    const newTaskID= await db("tasks")
            .insert(newTask)

    return getTaskById(newTaskID)
}

//Get All Tasks 

function getAllTasks(){
    return db("tasks")
}

//Get Task By Task ID

function getTaskById(taskId){
    return db("tasks")
            .where("task_id", taskId)
}


module.exports = {
    createNewTask, getAllTasks, getTaskById
}