const { Router}=require('express');

const controller= require("./controller");

const router= Router();

 router.get('/',controller.getStudents);
 router.get('/:id',controller.getStudentByid);
 router.post("/",controller.addUser);
 router.delete("/:id",controller.deleteByid);
 router.put("/:id",controller.UpdateStudent);

module.exports = router;