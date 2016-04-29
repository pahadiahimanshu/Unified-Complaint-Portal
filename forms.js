function ewaste(){
	var name,gender,address,zone,pin,contactm,contactl,email,compaddress,comppin,complain1,complain2,complain3,complain4,compdet;
	name=document.getElementById("applicant_name").value;
	var e = document.getElementById("applicant_gender");
	gender = e.options[e.selectedIndex].value;

	address=document.getElementById("applicant_address").value;
	var f = document.getElementById("Zone");
	zone = f.options[f.selectedIndex].value;

	pin=document.getElementById("applicant_pincode").value;
	contactm=document.getElementById("applicant_mobile_no").value;
	contactl=document.getElementById("applicant_landline").value;
	email=document.getElementById("applicant_email").value;

	compaddress=document.getElementById("complaint_address").value;
	comppin=document.getElementById("complaint_pincode").value;
	//complain=document.getElementById("complaint_address");
	if(document.getElementById("checkbox1").checked==true)
		complain1=document.getElementById("checkbox1").value;
	else
		complain1="";
	// if(document.getElementById("checkbox2").checked==true)
	// 	complain2=document.getElementById("checkbox2").value;
	// else
	// 	complain2="";
	// if(document.getElementById("checkbox3").checked==true)
	// 	complain3=document.getElementById("checkbox3").value;
	// else
	// 	complain3="";

	// if(document.getElementById("checkbox4").checked==true)
	// 	complain4=document.getElementById("checkbox4").value;
	// else
	// 	complain4="";


compdet=document.getElementById("complaint_details").value;
var date=document.getElementById("problem_since_date").value;


var url="https://snma.herokuapp.com/infoCollect?username="+email+"&done=false"+"&emailid="+email+"&address="+address+"&category=ewaste&complaint="+complain1+" "+compdet+"&name="+name+"&location="+zone+"&pincode="+pin+"&mobile="+contactm+"&problemsince="+date;
// https://snma.herokuapp.com/infoCollect?username=user1&emailid=user1@usersite.com&address=a1%20qweqe&category=water&complaint=hohoho&name=Nitin%20Pagal&location=delhi&pincode=110022&mobile=9876543210&problemsince=2-2-2000

var req = new XMLHttpRequest();  
	req.open('GET', url, false);   
	req.send();  
	


}


function garbage()
{

	var name,gender,address,zone,pin,contactm,contactl,email,compaddress,comppin,complain1,complain2,complain3,complain4,compdet;
	name=document.getElementById("applicant_name").value;
	var e = document.getElementById("applicant_gender");
	gender = e.options[e.selectedIndex].value;

	address=document.getElementById("applicant_address").value;
	var f = document.getElementById("Zone");
	zone = f.options[f.selectedIndex].value;

	pin=document.getElementById("applicant_pincode").value;
	contactm=document.getElementById("applicant_mobile_no").value;
	contactl=document.getElementById("applicant_landline").value;
	email=document.getElementById("applicant_email").value;

	compaddress=document.getElementById("complaint_address").value;
	comppin=document.getElementById("complaint_pincode").value;
	//complain=document.getElementById("complaint_address");
	if(document.getElementById("checkbox1").checked==true)
		complain1=document.getElementById("checkbox1").value;
	else
		complain1="";
	if(document.getElementById("checkbox2").checked==true)
		complain2=document.getElementById("checkbox2").value;
	else
		complain2="";
	// if(document.getElementById("checkbox3").checked==true)
	// 	complain3=document.getElementById("checkbox3").value;
	// else
	// 	complain3="";

	// if(document.getElementById("checkbox4").checked==true)
	// 	complain4=document.getElementById("checkbox4").value;
	// else
	// 	complain4="";


compdet=document.getElementById("complaint_details").value;
var date=document.getElementById("problem_since_date").value;


var url="https://snma.herokuapp.com/infoCollect?username="+email+"&done=false"+"&emailid="+email+"&address="+address+"&category=garbage&complaint="+complain1+" "+complain2+" "+compdet+"&name="+name+"&location="+zone+"&pincode="+pin+"&mobile="+contactm+"&problemsince="+date;
//https://snma.herokuapp.com/infoCollect?username=user1&emailid=user1@usersite.com&address=a1%20qweqe&category=water&complaint=hohoho&name=Nitin%20Pagal&location=delhi&pincode=110022&mobile=9876543210&problemsince=2-2-2000

var req = new XMLHttpRequest();  
	req.open('GET', url, false);   
	req.send();  
	



}



function water()
{

	var name,gender,address,zone,pin,contactm,contactl,email,compaddress,comppin,complain1,complain2,complain3,complain4,compdet;
	name=document.getElementById("applicant_name").value;
	var e = document.getElementById("applicant_gender");
	gender = e.options[e.selectedIndex].value;

	address=document.getElementById("applicant_address").value;
	var f = document.getElementById("Zone");
	zone = f.options[f.selectedIndex].value;

	pin=document.getElementById("applicant_pincode").value;
	contactm=document.getElementById("applicant_mobile_no").value;
	contactl=document.getElementById("applicant_landline").value;
	email=document.getElementById("applicant_email").value;

	compaddress=document.getElementById("complaint_address").value;
	comppin=document.getElementById("complaint_pincode").value;
	//complain=document.getElementById("complaint_address");
	if(document.getElementById("checkbox1").checked==true)
		complain1=document.getElementById("checkbox1").value;
	else
		complain1="";
	if(document.getElementById("checkbox2").checked==true)
		complain2=document.getElementById("checkbox2").value;
	else
		complain2="";
	if(document.getElementById("checkbox3").checked==true)
		complain3=document.getElementById("checkbox3").value;
	else
		complain3="";

	if(document.getElementById("checkbox4").checked==true)
		complain4=document.getElementById("checkbox4").value;
	else
		complain4="";


compdet=document.getElementById("complaint_details").value;
var date=document.getElementById("problem_since_date").value;


var url="https://snma.herokuapp.com/infoCollect?username="+email+"&done=false"+"&emailid="+email+"&address="+address+"&category=water&complaint="+complain1+" "+complain2+" "+complain3+" "+complain4+" "+compdet+"&name="+name+"&location="+zone+"&pincode="+pin+"&mobile="+contactm+"&problemsince="+date;
//https://snma.herokuapp.com/infoCollect?username=user1&emailid=user1@usersite.com&address=a1%20qweqe&category=water&complaint=hohoho&name=Nitin%20Pagal&location=delhi&pincode=110022&mobile=9876543210&problemsince=2-2-2000

var req = new XMLHttpRequest();  
	req.open('GET', url, false);   
	req.send();  
	



}