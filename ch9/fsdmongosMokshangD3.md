&#x20;                                                 INSTALL MONGODBCOMPASS



Microsoft Windows \[Version 10.0.19045.4894]

(c) Microsoft Corporation. All rights reserved.



C:\\Users\\LJENG>mongos

BadValue: error: no args for --configdb

try 'mongos --help' for more information



C:\\Users\\LJENG>mongosh

Current Mongosh Log ID: 6a3b4e7aed0add5ce45574a2

Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true\&serverSelectionTimeoutMS=2000\&appName=mongosh+1.10.3

Using MongoDB:          6.0.8

Using Mongosh:          1.10.3



For mongosh info see: https://docs.mongodb.com/mongodb-shell/

&#x20;

\------

&#x20;  The server generated these startup warnings when booting

&#x20;  2026-06-24T08:48:25.078+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

\------



test> use mydb

switched to db mydb

## ***mydb> db.createCollection("people")***

mydb> db.people.insertMany(\[{name:"x",age:20,branch:"IT"},{name:"y",age:25,branch:"CE"},{name:"z",age:30,branch:"CSE"},{name:"a",age:35,branch:"CS"},{name:"b",age:40,branch:"IT"},{name:"x",age:45,bbranch:"CSE"}])

{

&#x20; acknowledged: true,

&#x20; insertedIds: {

&#x20;   '0': ObjectId("6a3b4f7eed0add5ce45574a3"),

&#x20;   '1': ObjectId("6a3b4f7eed0add5ce45574a4"),

&#x20;   '2': ObjectId("6a3b4f7eed0add5ce45574a5"),

&#x20;   '3': ObjectId("6a3b4f7eed0add5ce45574a6"),

&#x20;   '4': ObjectId("6a3b4f7eed0add5ce45574a7"),

&#x20;   '5': ObjectId("6a3b4f7eed0add5ce45574a8")

&#x20; }

}

### ***mydb> db.people.find({ age: { $gt: 30 } })***

\[

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a6"),

&#x20;   name: 'a',

&#x20;   age: 35,

&#x20;   branch: 'CS'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a7"),

&#x20;   name: 'b',

&#x20;   age: 40,

&#x20;   branch: 'IT'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a8"),

&#x20;   name: 'x',

&#x20;   age: 45,

&#x20;   branch: 'CSE'

&#x20; }

]

### **mydb> db.people.find({age:{$gt:30}})**

\[

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a6"),

&#x20;   name: 'a',t

&#x20;   age: 35,

&#x20;   branch: 'CS'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a7"),

&#x20;   name: 'b',

&#x20;   age: 40,

&#x20;   branch: 'IT'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a8"),

&#x20;   name: 'x',

&#x20;   age: 45,

&#x20;   branch: 'CSE'

&#x20; }

]

### **mydb> db.people.find({age:{$gte:30}})**

\[

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a5"),

&#x20;   name: 'z',

&#x20;   age: 30,

&#x20;   branch: 'CSE'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a6"),

&#x20;   name: 'a',

&#x20;   age: 35,

&#x20;   branch: 'CS'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a7"),

&#x20;   name: 'b',

&#x20;   age: 40,

&#x20;   branch: 'IT'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a8"),

&#x20;   name: 'x',

&#x20;   age: 45,

&#x20;   branch: 'CSE'

&#x20; }

]

### mydb> db.people.find({age:{$lt:20}})

### 

### mydb> db.people.find({age:{lte:30}})

### 

### mydb> db.people.find({age:{lt:30}})

### 

### mydb> db.people.find({age:{$ne:"IT"}})

### \[

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a3"),

&#x20;   name: 'x',

&#x20;   age: 20,

&#x20;   branch: 'IT'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a4"),

&#x20;   name: 'y',

&#x20;   age: 25,

&#x20;   branch: 'CE'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a5"),

&#x20;   name: 'z',

&#x20;   age: 30,

&#x20;   branch: 'CSE'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a6"),

&#x20;   name: 'a',

&#x20;   age: 35,

&#x20;   branch: 'CS'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a7"),

&#x20;   name: 'b',

&#x20;   age: 40,

&#x20;   branch: 'IT'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a8"),

&#x20;   name: 'x',

&#x20;   age: 45,

&#x20;   branch: 'CSE'

&#x20; }

]

### ***mydb> db.people.find({branch:{$in:\['IT','CSE']}})***

\[

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a3"),

&#x20;   name: 'x',

&#x20;   age: 20,

&#x20;   branch: 'IT'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a5"),

&#x20;   name: 'z',

&#x20;   age: 30,

&#x20;   branch: 'CSE'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a7"),

&#x20;   name: 'b',

&#x20;   age: 40,

&#x20;   branch: 'IT'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a8"),

&#x20;   name: 'x',

&#x20;   age: 45,

&#x20;   branch: 'CSE'

&#x20; }

]

### mydb> db.people.find({branch:{$nin:\['IT','CS']}})

\[

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a4"),

&#x20;   name: 'y',

&#x20;   age: 25,

&#x20;   branch: 'CE'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a5"),

&#x20;   name: 'z',

&#x20;   age: 30,

&#x20;   branch: 'CSE'

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId("6a3b4f7eed0add5ce45574a8"),

&#x20;   name: 'x',

&#x20;   age: 45,

&#x20;   branch: 'CSE'

&#x20; }

]

## ***mydb>***

## ***db.people.updateOne(***

## &#x20; ***{ age: { $lt: 10 } },*** 

## &#x20; ***{ $set: { branch: "RAI", age: 21 } }***

## ***)***





db.people.find({age:{$gt:18,$lt:25}})



## ***mydb> db.participant.find({$and :\[{name:"N1"},{age:28}]})***

## 

## ***db.participant.find({age:{$not:{$eq:18}}})  This command means: "Find all documents where the age is NOT equal to 18."***

## 

## ***db.participant.find({ $nor: \[ { name: "N1" }, { age: 28 } ] })  if you want to find everyone who is NOT named "N1" and NOT 28 years old, you write it like this:javascript***

## 

## ***db.ahmad.updateOne({std:{$eq:4}},{$unset:{uname:""}})***

## 





{

&#x20; acknowledged: true,

&#x20; insertedId: null,

&#x20; matchedCount: 1,

&#x20; modifiedCount: 1,

&#x20; upsertedCount: 0

}

db.ahmad.updateOne({},{$mul:{std:2}})

db.ahmad.updateOne({},{$inc:{std:3}})

db.ahmad.updateOne({},{$inc:{std:-2}})



## ***db.jesus.aggregate(\[{$limit:1}])***

#### **db.jesus.aggregate(\[{$group:{\_id:"$property\_type"}}])**

#### 

db.jesus.aggregate(\[

&#x20; {

&#x20;   $group: {

&#x20;     \_id: "$property\_type",

&#x20;     count: { $sum: 1 }   // optional: count how many of each type

&#x20;   }

&#x20; },

&#x20; {

&#x20;   $sort: { \_id: 1 }      // ascending sort by property\_type

&#x20; }

])





#### **db.jesus.aggregate(\[{$sort:{age:1}}])**



## ***db.jesus.updateMany(***

## &#x20; ***{},                  // empty filter → all documents***

## &#x20; ***{ $inc: { age: 22 } } // increment age field by 22***

## ***)***



#### **db.jesus.updateOne({name:"Bob"},{$set:{grade:"A+"}})**







