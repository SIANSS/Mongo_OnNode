// var MDclient = require('mongodb').MongoClient;
// var db_name = "music";
// var url = "mongodb://localhost:27017/";
//
// // MDclient.connect(url+db_name, function(err, db){
// //   if(err) throw err;
// //   console.log("Database "+db_name+ " has been created");
// //   db.close();
// // })
//
// // MDclient.connect(url+db_name, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(db_name)
// //   var coll_name = "songdetails";
// //
// //   dbo.createCollection(coll_name, function (err, res){
// //     if(err) throw err;
// //     console.log("Collection " + coll_name + " in " +db_name);
// //     db.close();
// //   })
// //   // console.log("new collection " + coll_name+ )
// // })
//
//
// // MDclient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(db_name);
// //   var coll_name = "songdetails";
// //   var insertion_obj = [{Song_Name:"Thaniye Thananthaniye", Film:"Rythm", Music_Director:"A.R.Rahman", Singer:"Shankar Mahadevan"},
// //   {Song_Name:"Evano Oruvan", Film:"Alai Payuthey", Music_Director:"A.R.Rahman", Singer:"Swarnalatha"},
// //   {Song_Name:"Roja Poonthottam", Film:"Kannukul Nilavu", Music_Director:"Ilaiyaraja", Singer:["Unnikrishnan", "Anuradha Sriram"]},
// //   {Song_Name:"Vennilave Vennilave Vinnaithandi", Film:"Minsara Kanavu", Music_Director:"A.R.Rahman", Singer:["Hariharan", "Sadhana Sargam"]},
// //   {Song_Name:"Sollamal Thottu Chellum Thendral", Film:"Dheena", Music_Director:"Yuvan Shankar Raja", Singer:"Hariharan"}];
// //   dbo.collection(coll_name).insert(insertion_obj, function(err, res){
// //     if (err) throw err;
// //     console.log(insertion_obj.length + " Documents Inserted");
// //     db.close();
// //   });
// // });
//
// // MDclient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(db_name);
// //     var coll_name = "songdetails";
// //
// //     dbo.collection(coll_name).find().toArray(function(err, res){
// //       console.log(res);
// //       db.close();
// //     })
// //
// // })
//
// // MDclient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(db_name);
// //     var coll_name = "songdetails";
// //
// //     dbo.collection(coll_name).find({"Music_Director":"A.R.Rahman"}).toArray(function(err, res){
// //       console.log(res);
// //       db.close();
// //     })
// //
// // })
//
//
// // MDclient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(db_name);
// //     var coll_name = "songdetails";
// //
// //     dbo.collection(coll_name).find({"Music_Director":"A.R.Rahman", "Singer":"Unnikrishnan"}).toArray(function(err, res){
// //       console.log(res);
// //       db.close();
// //     })
// //
// // })
//
// // MDclient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(db_name);
// //     var coll_name = "songdetails";
// //
// //     dbo.collection(coll_name).removeOne({"Song_Name":"Evano Oruvan"}, function(err, res){
// //       console.log(res);
// //       db.close();
// //     })
// //
// // })
//
//
// // MDclient.connect(url, function(err, db){
// //   if(err) throw err;
// //     var dbo = db.db(db_name);
// //     var coll_name = "songdetails";
// //
// //     dbo.collection(coll_name).update({"Song_Name":"Enna Solla Pogiray"}, {$set: {"Film":"Kandukonden", "Music_Director":"unknown", "Singer":"Unknows"}}, {upsert:true, multi:true}, function(err, res){
// //       if(err) throw err;
// //       console.log(res);
// //       db.close();
// //     })
// // })
//
// // MDclient.connect(url, function(err, db){
// //   if(err) throw err;
// //   var dbo = db.db(db_name);
// //   var coll_name = "songdetails";
// //
// //   dbo.collection(coll_name).findOne({"Film":"Minsara Kanavu", "Singer":"Hariharan"}, function(err, res){
// //     if(err) throw err;
// //     console.log(res);
// //     db.close();
// //   });
// // });
//
// MDclient.connect(url, function(err, db){
//   if(err) throw err;
//   var dbo = db.db(db_name);
//   var coll_name = "songdetails";
//
//   dbo.collection(coll_name).find({}, {"Singer":1,_id:0}).toArray(function(err, res){
//     if(err)throw err;
//     console.log(res);
//     db.close();
//   })
// })
