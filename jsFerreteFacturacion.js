/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var resultadosuma;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);

	resultadosuma=preciouno+preciodos+preciotres;

	alert("La suma de los tres precios es "+resultadosuma);

}
function Promedio () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var promedio;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);

	promedio=(preciouno+preciodos+preciotres)/3;

	alert("El promedio de los tres precios es "+promedio);
}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var preciofinal;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);

	preciofinal=(preciouno+preciodos+preciotres)*0.21;
	preciofinal=preciofinal+preciouno+preciodos+preciotres;

	alert("El precio final más IVA es "+preciofinal);
}