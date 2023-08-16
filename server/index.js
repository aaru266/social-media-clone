// import express from "express"; ES6
const express=require('express'); //CJS
const app= express();
const router=require("./Routes/routers");
const requestLogger = require('./utils/requestLogger');
const errorHandler = require('./utils/errorHandler');

const PORT=4000
app.use(express.json());
app.use(requestLogger)
app.use('/test-api',router)


app.listen(PORT, ()=>{
    console.log("Server is started on port",PORT);
},)

app.use(errorHandler)