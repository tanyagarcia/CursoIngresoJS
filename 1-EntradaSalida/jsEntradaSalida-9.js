/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var resultado;

	sueldo=document.getElementById("sueldo").value;

	sueldo=parseInt(sueldo);

	resultado=sueldo*1.1; //sueldo+sueldo*0.10 =sueldo*1+0.10= sueldo*1.1 porque es el 10% (por ej si es el 90% es 0.9)

	alert(resultado);

}
