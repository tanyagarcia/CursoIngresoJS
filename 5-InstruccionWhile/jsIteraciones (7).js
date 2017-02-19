function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true; //inicialmente con valor "si"

	while(respuesta==true) //inicialmente respuesta=="si"
		{
			numero=prompt("Ingrese número");
			numero=parseInt(numero);
			acumulador=acumulador+numero;
			contador++;

			respuesta=confirm("Desea continuar?"); //acá usamos el CONFIRM para evitar la pregunta "Desea continuar? si/no"
			//y cambiamos el valor de la variable "respuesta" por "true" en lugar de "si"
			//respuesta=prompt("Desea continuar? si/no");
		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN