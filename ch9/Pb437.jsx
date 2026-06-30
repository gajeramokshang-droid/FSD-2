// Write commands to perform following tasks on employee collection having fields having name,age & joiningDate:
// (1) Delete all records having joiningDate before 1st January, 2010.
// (2) List all employees having age>50 years.
// (3) List only 1st employee having age>60 years.


db.jesus.deleteMany({
  joiningDate: { $lt: ISODate("2018-11-25T00:00:00.000Z") }
})


db.employee.find({age:{$gt:50}})


db.employee.find({age:{$gt:30}}).limit(1)