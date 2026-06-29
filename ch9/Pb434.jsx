// Write query to perform following tasks on employee collection having fields name, age, position, salary. 
// 1) Insert 3 documents with random data of having fields name, age, position, salary.
// 2) Count all employees where age is not equal to 35 and position is “Full Stack Developer”.
// 3) Update position of all employees to “Software Developer” whose name is “mokshang” and age is equal to 12.
//  If not such document available than insert the document with updated values.
//  4) Display position and name of the employee having lowest salary.

db.mary.insertMany([{name:"mokshang",position:"Backend",age:12,salary:90000},{name:"Thomas",position:"Backend",age:9,salary:100000},{name:"Mercy",posotion:"frontend",age:30,salary:40000}])


db.mary.countDocuments({age:{$ne:35},position:"Backend"})


db.mary.updateMany({name:"mokshang",age:{$eq:12}},{$set:{position:"FSD"}})


db.mary.find().sort({salary:1})
