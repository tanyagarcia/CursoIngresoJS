function Mostrar()
{

	var contador=0;
	var numero;
	var minimo;
	var maximo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("Ingrese número");
		numero=parseInt(numero);

		if(contador==0)
		{
			minimo=numero;
			maximo=numero;
		}
		else
		{
			if(minimo>numero)
			{
				minimo=numero;
			}
			if(maximo<numero)
			{
				maximo=numero;
			}
		}

		contador++;

		respuesta=prompt("Desea continuar? si/no");
	}


}//FIN DE LA FUNCIÓN