// Write commands to perform following tasks on employee collection having fields having name,age & joiningDate:
// (1) Update the name="Senior citizen" having age>60 years.
// (2) Update the name="JKL" having age=20 years. Insert this record, if it is not found.
// (3) Retire all employees by deleting senior citizens from collection.


db.employee.updateMany({age:{$gt:30}},{$set:{name:"Mokshk"}})


db.employee.updateMany({age:{$eq:20}},{$set:{name:"Chi"}})


db.employee.deleteMany({age:{$gte:60}})
