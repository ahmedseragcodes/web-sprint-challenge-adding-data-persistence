require("dotenv").config();
const path = require("path")
const server = require("./api/server");
const PORT = process.env.PORT || 1234;

server.listen(PORT, ()=>{
    console.log(`Listening On Port ${PORT}`);
});

//In-Case Of Front End Deployment, Change Folders Accordingly

// server.use(express.static(path.join(__dirname, "client/build")))

// server.use("*", (req, res)=>{
// res.sendFile(path.join(__dirname, "client/build", "index.html"))
// })