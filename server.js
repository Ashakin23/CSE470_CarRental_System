const express = require('express')
const app = express()
const mongoose = require('mongoose');


app.listen(9992,function check(err){
	if (err)
	console.log("error")
	else
	console.log("Started")
});

mongoose.connect("mongodb://127.0.0.1:27017/login",{UseNewUrlParser: true, UseUnifiedTopology: true},)
	// function checkDB(error){
	// 	if (error){
	// 		console.log("Error connecting to DB");
	// 	}
	// 	else{
	// 		console.log("Connected");
	// 	}
	// }
	.then (()=> console.log("Connected"))
	.catch ((err) => {console.error(err);});
	


