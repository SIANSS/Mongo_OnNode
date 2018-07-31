// var MDClient = require('mongodb').MongoClient;
// var dbname = "student";
// var url = "mongodb://localhost:27017/student";
//
//                 // db Details
//
//
//                                   //--> Task 1
// // MDClient.connect(url, function(err, db){
// //   if (err) throw err;
// //   console.log("Database " +dbname+ " Created!");
// //   db.close();
// // })
//                                   //--> Task 2
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //   dbo.createCollection(coll_name, function(err, res){
// //     if(err) throw err;
// //     console.log("Collection -"+coll_name+"- created inside -"+dbname+"-");
// //     db.close();
// //   })
// // })
// //                                   //--> Task 3
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //   var insertion_obj = [{name:"Mala", maths_marks:45, english_marks:53, science_marks:72},
// //   {name:"Vanu", maths_marks:80, english_marks:75, science_marks:85},
// //   {name:"Kala", maths_marks:32, english_marks:46, science_marks:53},
// //   {name:"Aruli", maths_marks:78, english_marks:85, science_marks:80},
// //   {name:"Shayu", maths_marks:80, english_marks:76, science_marks:65},
// //   {name:"Kumaran", maths_marks:32, english_marks:73, science_marks:84},
// //   {name:"Lucky", maths_marks:66, english_marks:90, science_marks:45},
// //   {name:"Gva", maths_marks:71, english_marks:75, science_marks:56},
// //   {name:"Raam", maths_marks:41, english_marks:65, science_marks:88}];
// //   dbo.collection(coll_name).insert(insertion_obj, function(err, res){
// //     if (err) throw err;
// //     console.log("Document Inserted");
// //     db.close();
// //   });
// // });
//                                     //--> Task 4
// // MDClient.connect(url, function(err, db){
// //   if (err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //   var myquery = {name: "Mala", maths_marks: 45};
// //   var newvalues = { $set: {maths_marks: 51 } };//change the value here
// //   dbo.collection(coll_name).updateOne(myquery, newvalues, function(err, res) {
// //     if (err) throw err;
// //     console.log("1 document updated");
// //     db.close();
// //   });
// // });
//                                     //--> task 5
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(dbname);
// //     var coll_name = "studentmarks";
// //     dbo.collection(coll_name).find({'maths_marks':{$gt:50}}).toArray(function(err, res){
// //       if (err) throw err;
// //       console.log(res);
// //       db.close();
// //     });
// // });
//                                     //--> Task 6
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(dbname);
// //     var coll_name = "studentmarks";
// //     var uptquery = {$set: {'Average': null}};
// //     dbo.collection(coll_name).update({}, uptquery, {multi:true}, function(err, res){
// //       if(err) throw err;
// //       console.log("Updated Successful!");
// //       db.close();
// //     });
// // });
//                                     //--> task 7
// // MDClient.connect(url, function(err, db){
// //   if (err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //   var myquery = {name: "Lucky"};
// //   var newvalues = { $set: {science_marks: 75 } };//change the value here
// //   dbo.collection(coll_name).updateOne(myquery, newvalues, function(err, res) {
// //     if (err) throw err;
// //     console.log("Lucky's Science Marks Updated");
// //     db.close();
// //   });
// // });
//                                     //--> task 8
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(dbname);
// //     var coll_name = "studentmarks";
// //     dbo.collection(coll_name).find({maths_marks:{$gt:50}, science_marks: {$gt:50}, english_marks: {$gt:50}}).toArray(function(err, res){
// //       if (err) throw err;
// //       console.log(res);
// //       db.close();
// //     });
// // });
//                                   //--> task 9
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(dbname);
// //     var coll_name = "studentmarks";
// //     dbo.collection(coll_name).find({maths_marks:{$lt:50}, english_marks: {$gt:50}}).toArray(function(err, res){
// //       if (err) throw err;
// //       console.log(res);
// //       db.close();
// //     });
// // });
//
//                                   //--> task 10
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //   dbo.collection(coll_name).find({maths_marks: {$lt:40}, science_marks: {$lt:40}}).toArray(function(err, res){
// //     if(err) throw err;
// //     if(res = []){
// //       res = "No Data Found in Database";
// //     }
// //     console.log(res);
// //     db.close();
// //   })
// // });
//
// //                                   //--> task 11
//   // MDClient.connect(url, function(err, db){
//   //   if(err) throw err;
//   //   var dbo = db.db(dbname);
//   //   var coll_name = "studentmarks";
//   //   dbo.collection(coll_name).update({name: 'Raam'}, {$unset: {"science_marks":""}}, function(err, res){
//   //     if(err) throw err;
//   //     console.log(res);
//   //     db.close();
//   //   });
//   // });
//
//                                       //--> task 12
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //
// //   dbo.collection(coll_name).update({name: "John"}, {$set: {"maths_marks":87, "english_marks": 23}}, {upsert:true, multi:true}, function(err, res){
// //     if(err) throw err;
// //     console.log(res);
// //     db.close();
// //   });
// // });
//
//                                     //--> task 13
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //
// //   dbo.collection(coll_name).update({name: "John"}, {$rename: {"english_marks":"science_marks"}}, function(err, res){
// //     if(err) throw err;
// //     console.log(res);
// //     db.close();
// //   })
// // })
//
//                                     //--> task 14
// // MDClient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(dbname);
// //   var coll_name = "studentmarks";
// //
// //   dbo.collection(coll_name).remove({name: "Kumaran"}, function(err, res){
// //     if(err) throw err;
// //     console.log(res);
// //     db.close();
// //   })
// // })
//
//                                     //--> task 15
// MDClient.connect(url, function(err, db){
//   if(err) throw err;
//   var dbo = db.db(dbname);
//   var coll_name = "studentmarks";
//
//   dbo.collection(coll_name).find({"science_marks":""}, {name:"Aruli"}).toArray(function(err, res){
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });
