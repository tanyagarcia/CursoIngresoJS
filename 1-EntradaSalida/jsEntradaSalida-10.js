/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado;

	importe=document.getElementById('importe').value;

	importe=parseInt(importe);

	resultado=importe-(importe*0.25); //saco el 25 % de decuento que es 25 dividido 100

	alert(resultado);
}
