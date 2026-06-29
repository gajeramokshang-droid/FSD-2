// Map following SQL queries to MongoDB query:
// (1) select age,name from employee where status="active"
// (2) select * from employee where status!="active"
// (3) select name from employee order by age desc
// (4)select * from employee where status=”active” or age=50


db.employee.find(
  { status: "active" },          // filter condition
  { age: 1, name: 1}    // projection: include age and name, exclude _id
)


db.employee.find({status:{$ne:"active"}})


db.employee.find().sort({name:-1})


db.employee.find({$or:[{status:"active"},{age:{$ne:50}}]})

