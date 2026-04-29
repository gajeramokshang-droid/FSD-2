// Write an ExpressJS script using RESTapi to create one array of json object named student_result which have properties like Name, 
// Roll_no, Division, Percentage & Grade. Once user request for “/result” page it displays all student’s data. If user request for 
// particular Roll_no then respective students data will display i.e. if user request for “/result/2” then data of Roll_no 2 will 
// display

const express=require('express');
const app=express();

const student_result = [
  { Name: "Jesus Christ", Roll_no: 1, Division: "A", Percentage: 85, Grade: "A" },
  { Name: "John Baptist", Roll_no: 2, Division: "B", Percentage: 78, Grade: "B" },
  { Name: "Mary", Roll_no: 3, Division: "A", Percentage: 92, Grade: "A+" },
  { Name: "St. Francis Xavier", Roll_no: 4, Division: "C", Percentage: 65, Grade: "C" }
];

app.get('/result',(req,res)=>{
    res.json(student_result)
})

app.get('/result/:roll',(req,res)=>{
    const roll_no=parseInt(req.params.roll);
    const student=student_result.find(s=>s.Roll_no===roll_no)
    if(student){
         res.json(student);
    }
    else{
        res.json("Student not found")
    }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
