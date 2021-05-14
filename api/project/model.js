const db = require("../../data/dbConfig");

//GET ALL A PROJECTS RESOURCES BY PROJECT ID, UTILIZING PROJECTS TABLE, RESOURCES TABLE, ASSIGNMENT TABLE

function getAllProjectsResources(projectId){

// SELECT PROJECTS.PROJECT_ID, PROJECTS.PROJECT_NAME, RESOURCES.RESOURCE_ID, RESOURCES.RESOURCE_NAME FROM [RESOURCEASSIGNER]
// JOIN [RESOURCES]
// ON RESOURCEASSIGNER.RESOURCE_ID = RESOURCES.RESOURCE_ID
// JOIN [PROJECTS]
// ON RESOURCEASSIGNER.PROJECT_ID_ONE = PROJECTS.PROJECT_ID

return db("resourceassigner as ra")
.join("resources as r", "ra.resource_id", "r.resource_id")
.join("projects as p", "ra.project_id_one", "p.project_id")
.select("p.project_id", "p.project_name", "r.resource_id", "r.resource_name")
.where("ra.project_id_one", projectId)

}

//CREATE NEW PROJECT

async function createNewProject(newProject){

    const newProjectID= await db("projects")
            .insert(newProject)

    return getProjectById(newProjectID)
}

//GET ALL PROJECTS

function getAllProjects(){
    return db("projects")
}

//GET PROJECT BY PROJECT ID

function getProjectById(projectId){
    return db("projects")
            .where("project_id", projectId)
}



module.exports = { getAllProjectsResources, createNewProject, getAllProjects, getProjectById }