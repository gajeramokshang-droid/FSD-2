// Write an ExpressJS REST API script to create an array of JSON objects named employee_data having properties:
// Emp_id,Name,Department,Salary,Experience,When the user requests:/employees → It should display all employees data./employees/:id → 
// It should display data of the employee whose Emp_id matches the given id.Example:/employees/3 → Display data of employee with 
// Emp_id 3.

const express=require('express');
const app=express();
const employee_data = [
  { Emp_id: 1, Name: "Jesus Christ", Department: "HR", Salary: 40000, Experience: "3 years" },
  { Emp_id: 2, Name: "John The Baptist", Department: "IT", Salary: 55000, Experience: "5 years" },
  { Emp_id: 3, Name: "Thadius", Department: "Finance", Salary: 60000, Experience: "7 years" },
  { Emp_id: 4, Name: "St. Francis Xavier", Department: "Marketing", Salary: 45000, Experience: "2 years" }]

app.get('/employees',(req,res)=>{
    res.json(employee_data)
});

app.get('/employees/:id',(req,res)=>{
    const empid=req.params.id;
    const christ=employee_data.find(m=>m.Emp_id===empid);
    
    if(christ){
        res.json("Jesus Bless you");
    }
    else{
        res.send(`<p style='color:red'>Employee Not found </p>`)
    }
});

app.listen(2000);