const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

//SANITY CHECK ENDPOINT
server.get("/", (req, res, next)=>{
    res.json({message: "API Up"});
});

//ERROR HANDLING 
server.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
});

module.exports = server;