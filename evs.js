

	function getComplaintsJSON()
	{
	//document.getElementById("demo").innerHTML = "";
	
	var req = new XMLHttpRequest();  
	req.open('GET', 'https://snma.herokuapp.com/getUsers', false);   
	req.send();  
	text=req.responseText;
	var lines = text.split("{");
	console.log(lines);
	var j=0;
	
	for (var i=1;i<lines.length;i++) {
		lines[i]="{"+lines[i];
	}

	var jsonobjs=[];
	for (var i=1;i<lines.length;i++) {
	  jsonobjs[j]=JSON.parse(lines[i]);
	  j++;
	}
	return jsonobjs;
	}	

	function setCookie(cname) {
    	// var d = new Date();
    	// d.setTime(d.getTime() + (exdays*24*60*60*1000));
    	// var expires = "expires="+ d.toUTCString();
    	document.cookie = "username=" + cname;
		alert("setting cookie");
	}

	function fun(){
	
	var mail=document.getElementById("exampleInputEmail1").value;
	var pass=document.getElementById("exampleInputPassword1").value;
	//alert(mail+" "+pass);

		objs=getComplaintsJSON();
		var i=0;

		for(i=0;i<objs.length;i++)
		{	
			//alert("a");
						
			if(mail===objs[i].username && pass===objs[i].password){
					window.location="index.html";
					setCookie(mail);
					//alert("jhhbh");
					break;
		
			}
		
			else if(mail===objs[i].username && pass!==objs[i].password){
				alert("Please enter correct username and password");	
				break;
			}
		
		}

		if(i===objs.length)
		{
				alert("hey");
				var ur="https://snma.herokuapp.com/createUser?username="+mail+"&password="+pass;
				
				var req = new XMLHttpRequest();  
	
				req.open('GET', ur, false);   
				req.send();
				setCookie(mail);
						  
		}
		//document.getElementById("prac").innerHTML =objs[0].username+" "+objs[1].username ;
	


}