    function getComplaintsJSON()
{
	var req = new XMLHttpRequest();  
	req.open('GET', 'https://snma.herokuapp.com/getData', false);   
	req.send();  
	text=req.responseText;
	var lines = text.split("{");
	//console.log(lines);
	var j=0;
	for (var i=1;i<lines.length;i++) {
		lines[i]="{"+lines[i];
	}
	var jsonobjs=[];
	for (var i=1;i<lines.length;i++) {
	  jsonobjs[j]=JSON.parse(lines[i]);
	  j++;
	}
	//console.log(jsonobjs);
	return jsonobjs;
}
function dodone(element){
    alert("complaint updated: " + element.id);
	objs=getComplaintsJSON();

	ele=objs[parseInt(element.id.split('c')[1])];
	console.log(ele);
	var url="https://snma.herokuapp.com/done?username="+ ele.username +"&emailid="+ ele.emailid +"&address="+ ele.address +"&category="+ ele.category+"&complaint="+ ele.complaint + "&name="  + ele.name +"&location="+ ele.location +  "&pincode="+ele.pincode +"&mobile="+ ele.mobile+"&problemsince="+ele.problemsince;
	var req = new XMLHttpRequest();
	req.open('GET', url, false);   
	req.send();
	
}
function fun(){
	objs=getComplaintsJSON();
	var container = document.getElementById("container");
	while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
    }
	for(var i=0;i<objs.length;i++){
		if(document.cookie.split(";")[0].split("=")[1]!=objs[i].emailid)
			continue;
	    container.appendChild(document.createTextNode(objs[i].complaint+"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"));
		 container.appendChild(document.createTextNode(objs[i].problemsince + "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"));

		container.appendChild(document.createElement("br"));

		

		if(objs[i].done=="false"){
			var butt=document.createElement("input");
			butt.id="c"+i;
			butt.name="c"+i;
			butt.type="button";
			butt.value="Done";
			butt.setAttribute("onclick",'dodone(this)');
			butt.setAttribute("style","text-align:right");
			container.appendChild(butt);
		}
		container.appendChild(document.createElement("br"));
		container.appendChild(document.createElement("br"));
	}
	
}
