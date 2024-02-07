// import module/package
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
// setting middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoute = require("./route/student");

// setting error path



app.use("/user",userRoute);

app.use((req, res, next) => {
    const err = new Error(`${req.url} not found in this server`);
    err.status = 404;
    next(err);
});
// setting another error program
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});
// export app

app.use("/",(req,res)=>{
    res.send("server is live s")
        
    })
module.exports = app;