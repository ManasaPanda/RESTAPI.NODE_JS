const express= require("express");
const studentRoutes=require("./src/employees/routes");


const app=express();
const port=3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.use('/api/students',studentRoutes);

app.listen(port,()=>{
    console.log(`app lisining on port ${port}`);
})