function Mostrar()
{

	var acumulador=0; //inicialmente contador
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta=true; //iniciamente con "si"

	while(respuesta==true) //inicialmente respuesta=="si"
		{
			numero=prompt("Ingrese número");
			numero=parseInt(numero);
		

			if(numero<0)
			{
				negativo=negativo*numero;
			}
			else
			{
				acumulador=acumulador+numero;
				positivo=acumulador;
			}



			respuesta=confirm("Desea continuar?");



		}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN