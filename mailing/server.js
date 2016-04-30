var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "evsproject2016@gmail.com",
        pass: "evsproject@2016"
    }
});

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){

		if(req.query.category=='water' || req.query.category=='Water')
		{
				var mailOptions={
        to : 'prodjb306@gmail.com , himanshu14045@iiitd.ac.in' ,
        subject : 'Water Complaint',
        text : 'Client having problem    :' +  req.query.emailid + '\n' + 'username:   '  + req.query.username  + '\n' + ' Complain    : ' +  req.query.complaint  + '\n' + 'Location:    ' + req.query.location + '\n' + 'pincode    :' + req.query.pincode + '\n' +' Problem Since    : ' + req.query.problemsince  
		}
	}

		if(req.query.category=='garbage' || req.query.category=='Garbage')
		{
				var mailOptions={
        to : 'connect@mygov.nic.in , himanshu14045@iiitd.ac.in' ,
        subject : 'Garbage Complaint',
        text : 'Client having problem    :' +  req.query.emailid + '\n' + 'username:   '  + req.query.username  + '\n' + ' Complain    : ' +  req.query.complaint  + '\n' + 'Location:    ' + req.query.location + '\n' + 'pincode    :' + req.query.pincode + '\n' +' Problem Since    : ' + req.query.problemsince 
		}
	}

		if(req.query.category=='e-waste' || req.query.category=='ewaste')
		{
				var mailOptions={
        to : 'info@chintan-india.org , himanshu14045@iiitd.ac.in' ,
        subject : 'E-Waste Complaint',
        text : 'Client having problem    :' +  req.query.emailid + '\n' + 'username:   '  + req.query.username  + '\n' + ' Complain    : ' +  req.query.complaint  + '\n' + 'Location:    ' + req.query.location + '\n' + 'pincode    :' + req.query.pincode + '\n' +' Problem Since    : ' + req.query.problemsince 
		}
	}

     
    
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
})

.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});

app.use('/sendMail',dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});