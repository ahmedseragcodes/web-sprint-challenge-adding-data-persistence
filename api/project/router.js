const express = require("express");
const Projects = require("./model");

const router = express.Router();

//ENDPOINTS

//[GET] All Projects Resources By Project Id

router.get("/:project_id/resources", (req, res, next)=>{

    const projectId = req.params.project_id;

    Projects.getAllProjectsResources(projectId)
    .then((projectsResources)=>{
        res.status(200).json(projectsResources);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})

//[POST] New Project

router.post("/", (req, res, next)=>{

    const newProject = req.body;

    if (newProject.project_name){
        if (newProject.project_completed === 1 || newProject.project_completed === 0){
            Projects.createNewProject(newProject)
            .then((newlyMadeProject)=>{
                res.status(200).json(newlyMadeProject[0]);
            })
            .catch((err)=>{
                next(err);
            })
        } else {
            res.status(400).json({message: "project_completed is required"});
        }
    } else {
        res.status(400).json({message: "project_name is required"});
    }
})

//[GET] All Projects

router.get("/", (req, res, next)=>{
    Projects.getAllProjects()
    .then((allProjects)=>{
        res.status(200).json(allProjects);
    })
    .catch((err)=>{
        next(err);
    })
})

//[GET] Project By ID

router.get("/:id", (req, res, next)=>{

    const { id }=req.params;

    Projects.getProjectById(id)
    .then((specificProject)=>{
        res.status(200).json(specificProject[0]);
    })
    .catch((err)=>{
        next(err);
    })
})


module.exports = router;