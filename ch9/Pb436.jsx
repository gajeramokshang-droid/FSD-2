// Write commands to perform following tasks on employee collection having fields name,age & joiningDate:
// (1) Insert 3-4 records in collection.
// (2) List all employees who joined before 1st January, 2010.
// (3) Update the name of employee to "WWW" whose joiningDate is "05-05-2015"



db.employee.find({
  joiningDate: { $lt: new Date("2010-01-01") }
})



db.employee.updateMany({joiningDate:"2015-09-20T00:00:00.000Z"},{$set:{name:"Mary"}})
