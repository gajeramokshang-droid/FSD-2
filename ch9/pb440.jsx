// Map following SQL queries to MongoDB query:
// (1) alter table people add joiningDate datetime
// (2) alter table people drop column joiningDate
// (3) select age,name from people where status="PH"
// (4) select * from people where status!="PH"
// (5) select name from people order by age desc


db.people.updateMany({}, { $set: { joiningDate: null } })


db.people.updateMany({}, { $unset: { joiningDate: "" } })


db.people.find({ status: "PH" },{ age: 1, name: 1 })


db.people.find({ status: { $ne: "PH" } })


db.people.find({},{ name: 1}).sort({ age: -1 })


