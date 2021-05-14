const express = require("express");
const Resources = require("./model");

const router = express.Router();

//ENDPOINTS

//[POST] New Resource

router.post("/", (req, res, next)=>{

    const newResource = req.body;

    if(newResource.resource_name){
        Resources.createResource(newResource)
        .then((resourceReturn)=>{
            res.status(200).json(resourceReturn[0]);
        })
        .catch((err)=>{
            next(err);
        })
    } else {
        res.status(400).json({message: "Resource_Name is required"});
    }

});

// [GET] All Resources

router.get("/", (req, res, next)=>{
    Resources.getResources()
    .then((allResources)=>{
        res.status(200).json(allResources);
    })
    .catch((err)=>{
        next(err);
    })
});

// [GET] Resource By ID

router.get("/:id", (req, res, next)=>{

    const { id } = req.params;

    Resources.getResourceById(id)
    .then((specificResource)=>{
        res.status(200).json(specificResource[0]);
    })
    .catch((err)=>{
        next(err);
    })
});


module.exports = router;