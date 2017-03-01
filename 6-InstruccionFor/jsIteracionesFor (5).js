
function Mostrar()
{

	var contador=0;

	for(; ;)
	{
		numero=prompt("Ingrese número");
		numero=parseInt(numero)

		if(numero==9)
		{
			break;
		}

		contador++;

	}

	alert("El número es 9");

}//FIN DE LA FUNCIÓN