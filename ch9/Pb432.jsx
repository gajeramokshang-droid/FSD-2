// Create a collection named Student having fields Name, age, standard, percentage.
//  Insert 5 to 10 random documents in collection.
// 1.	Find name of all students having age > 7
// 2.   Increase the standard for all students by 1.
// 3.	Arrange all the records in ascending order of age.   
// 4.	Show the name of student who is the oldest student among all students.   
// 5.	Delete the record of the student if standard is 12.

// updateOne() / updateMany() → accepts update operators like $inc, $set, $unset.

db.jesus.insertMany([{name:"mokshang",age:12,standard:12,percentage:100},{name:"jesus",age:32,standard:0,percentage:90},{name:"mary",age:50,standard:0,percentage:90},{name:"rachael",age:12,standard:12,percentage:100},{name:"jihan",age:20,standard:10,percentage:95}])

db.jesus.find({age:{$gt:7}})

db.jesus.updateMany({},{$inc:{standard:1}})

db.jesus.find().sort({age:1})

db.jesus.find({},{name:1}).sort({age:-1}).limit(1)


db.jesus.deleteMany({standard:12})