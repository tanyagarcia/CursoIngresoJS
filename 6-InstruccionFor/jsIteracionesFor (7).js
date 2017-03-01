function Mostrar()
{
	
	var tienedivisor="no";
	var numeroAnterior;
	var acumdiv;
	var numRecorrido;
	var numIngresado=prompt(numIngresado);
	numIngresado=parseInt(numIngresado);

	for(numRecorrido=numIngresado-1;numRecorrido>2;numRecorrido--)
	{
		acumdiv=0;

		for(numAnterior=1; numAnterior<(numIngresado/2);numAnterior++)
		{
			
			if(numRecorrido%numAnterior==0)
			{
				acumdiv=acumdiv+numAnterior;
				
			}

		}

		if(acumdiv==numIngresado)
		{
			console.log("Es perfecto "+numIngresado);
		}
	}


}//FIN DE LA FUNCIÓN