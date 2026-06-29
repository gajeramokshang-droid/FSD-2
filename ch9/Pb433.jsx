// Create a collection name Student. Having fields name, age, std, percentage.
// 1)insert 3 random records in table.
// 2)find name of all student age>5.
// 3) update the std for all by 1.
// 4) arrange all the record of descending order of age.
// 5)show all the name of student who is the oldest student of all records


db.jesus.find({age:{$gt:5}})


db.jesus.updateMany({},{$inc:{standard:1}})


db.jesus.find().sort({age:-1})


db.jesus.find().sort({ age: -1, name: 1 }).limit(1)

