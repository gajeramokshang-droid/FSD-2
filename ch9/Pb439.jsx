// Write commands to perform following tasks on employee collection having fields having name,age & joiningDate:
// (1) Count no. of employees having age>=60 years.
// (2) List all employees in descending order of names having names "ABC", "PQR", "XYZ".
// (3) List all employees whose age lies between 25 to 50 years excluding all rest of the fields.



db.employee.countDocuments({age:{$gt:30}})



db.employee.find().sort({name:-1})


db.employee.find({age:{$lt:50,$gt:25}})