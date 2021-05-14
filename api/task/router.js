const express = require("express");
const Tasks = require("./model");

const router = express.Router();

//ENDPOINTS

//[POST] New Task

router.post("/", (req, res, next)=>{

    const newTask = req.body;

    if (newTask.task_description){
        if (newTask.task_completed === 1 || newTask.task_completed === 0){
            if (newTask.project_id){
                Tasks.createNewTask(newTask)
                .then((createdTask)=>{
                    res.status(200).json(createdTask[0]);
                })
                .catch((err)=>{
                    next(err);
                })
            } else {
                res.status(400).json({message: "project_id is required"});
            }
        } else {
            res.status(400).json({message: "task_completed is required"});
        }
    } else {
        res.status(400).json({message: "task_description is required"});
    }
});

//[GET] All Tasks

router.get("/", (req, res, next)=>{
    Tasks.getAllTasks()
    .then((allTasks)=>{
        res.status(200).json(allTasks);
    })
    .catch((err)=>{
        next(err);
    })
});

//[GET] Task By ID

router.get("/:id", (req, res, next)=>{

    const { id } = req.params;

    Tasks.getTaskById(id)
    .then((specificTask)=>{
        res.status(200).json(specificTask[0]);
    })
    .catch((err)=>{
        next(err);
    })
});


module.exports = router;