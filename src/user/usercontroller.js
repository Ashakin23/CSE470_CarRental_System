var userservice = require('./userservice');
var createusercontrollerFn = async (req, res) =>
{
	try{
		console.log(req.body);
		var status = await userservice.createuserDBService (req.body);
		console.log(status);

		if (status) {
		res.send({ "status": true, "message": "User created successfully" });
		} else {
		res.send({ "status": false, "message": "Error creating user" });
		}
	}
	catch(err){
		console.log(err);
	}
}
	




