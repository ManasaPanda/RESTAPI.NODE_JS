const getStudents= "SELECT * FROM students";

const getStudentByid= "SELECT * FROM students WHERE ID=$1";

const deleteByid="DELETE FROM students WHERE ID= $1";

const checkEmailExist="SELECT s FROM employees s WHERE s.email=$1";

const addUser= "INSERT INTO students( name, email,age, dob) VALUES ($1, $2, $3,$4)";

const UpdateStudent="UPDATE students SET name = $1 WHERE ID = $2";



module.exports={
    getStudents,
    getStudentByid,
    checkEmailExist,
    addUser,
    deleteByid,
    UpdateStudent,
}

