function a(num){
//document.write -> is used to write something on the web page
console.log("Table of " + num + ":");
var a=1;
	for(var a=1; a<=10; a++) {
		console.log(num + " * " + a +": " + num*a);
	}
	
	var comspace={};	//anonymous function or namespace
	comspace.a=60;
	console.log(comspace.a);
	console.log(comspace);
	
}
a(4);