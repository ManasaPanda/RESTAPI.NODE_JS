const pool= require("../../db");

const query= require("./queries");

const getStudents = (req,res)=>{
    pool.query(query.getStudents,(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const getStudentByid= (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(query.getStudentByid,[id],(err,result)=>{
        if(err) throw err;

        res.status(200).json(result.rows);
    });
};

const addUser= (req,res)=>{
    const { name,email,age,dob}=req.body;
    
    //check if email exists
      pool.query(query.checkEmailExist,[email],(err,result)=>{
          if(result.rows.length){
              res.send("Email already exist");
          }
      //  add employees to database

        pool.query(query.addUser,[name,email,age,dob],(err,result)=>{
            if(err) throw err;
            res.status(201).send("Student added successfully!");
        })
     })
};

const deleteByid=(req,res)=>{
    const id = parseInt(req.params.id);

    pool.query(query.getStudentByid,[id],(err,result)=>{
        const noStudentFound= !result.rows.length;
        if(noStudentFound)
            res.send("Student Does not exist");

        pool.query(query.deleteByid,[id],(err,result)=>{
            if(err) throw err;

            res.status(200).send("Student removed Successfully");
        });
    });
};

const UpdateStudent=(req,res)=>{
    const id=parseInt(req.params.id);

    const {name}=req.body;

    pool.query(query.getStudentByid,[id],(err,result)=>{
        const noStudentFound= !result.rows.length;
        if(noStudentFound)
            res.send("Student Does not exist");

        pool.query(query.UpdateStudent,[name,id],(err,result)=>{
            if(err) throw er;

            res.status(200).send("Student record update");
        })
    });
};

module.exports={
    getStudents,
    getStudentByid,
    addUser,
    deleteByid,
    UpdateStudent,
}