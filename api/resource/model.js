const db = require("../../data/dbConfig");

//Create New Resource With New Resource

async function createResource(newResource){
    const newResourceId = await db("resources")
                            .insert(newResource);
    return getResourceById(newResourceId);

}

//Get All Resources 

function getResources(){
    return db("resources");
}

//Get Resource By Resource ID

function getResourceById(resourceId){
    return db("resources")
            .where("resource_id", resourceId);
}

module.exports = { createResource, getResources, getResourceById };