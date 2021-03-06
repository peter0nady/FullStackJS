var num1 =document.getElementById('num1');
var num2 =document.getElementById('num2');
var result=document.getElementById('result');
var form =document.getElementById('percentage');

form.addEventListener('submit',function(event)
{
	    var x = parseFloat(num1.value);
		var y= parseFloat(num2.value);
	
	if(!num1.value || !num2.value)
	{
		alert("Please enter Values in the fields");
	} else 
	{
		var answer =( x / y ) * 100 ;
		result.innerText = " Answer : "+ answer + " % ";
		event.preventDefault();
	}
});