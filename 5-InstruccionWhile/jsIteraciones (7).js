function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var seguir;
	var dato;

	while(respuesta=="si")
		{
			dato=prompt("Ingrese datos");
			acumulador=acumulador+dato;

			contador++;

		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN