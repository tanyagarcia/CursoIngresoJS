/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var temperaturaconvertida;

	temperatura=document.getElementById('Temperatura').value;

	temperatura=parseInt(temperatura);

	temperaturaconvertida=(temperatura-32)*0.555;

	alert(temperatura+" grados Fahrenheit equivalen a "+temperaturaconvertida+" grados Celsius");

}

function CentigradosFahrenheit () 
{
	var temperatura;
	var temperaturaconvertida;

	temperatura=document.getElementById('Temperatura').value;

	temperatura=parseInt(temperatura);

	temperaturaconvertida=temperatura*1.8+32;

	alert(temperatura+" grados Celsius equivalen a "+temperaturaconvertida+" grados Fahrenheit");

	
}
