function Mostrar()
{

	var contadorUno=0;
	var contadorDos=0;
	var numero;
	var acumuladorUno=0;
	var acumuladorDos=0;
	var contadorCeros=0;
	var contadorPares=0;
	//declarar contadores y variables
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese número");
		numero=parseInt(numero);

		if(numero<0)
		{
			acumuladorUno=acumuladorUno+numero; //suma de negativos
			contadorUno++; //suma de negativos
		}
		else
		{
				if(numero>0)
				{
				acumuladorDos=acumuladorDos+numero; //suma de psotivos
				contadorDos++; //contador de psotivos
				}
				else
				{
				contadorCeros++// cantidad de ceros
				}
		}

		if(numero%2==0)
		{
			contadorPares++;
		}

		respuesta=prompt("DESEA CONTINUAR? si/no");


	}


		var promedioPostivos=acumuladorDos/contadorDos;
		var promedioNegativos=acumuladorUno/contadorUno;
		var diferencia=acumuladorDos-acumuladorUno;

		document.write("Números negativos "+contadorUno+"<BR>");
		document.write("Suma negativos "+acumuladorUno+"<BR>");
		document.write("Números positivos "+contadorDos+"<BR>");
		document.write("Suma positivos "+acumuladorDos+"<BR>");
		document.write("CANTIDAD NºPARES "+contadorPares+"<BR>");
		document.write("CANTIDAD DE CEROS "+contadorCeros+"<BR>");
		document.write("PROMEDIO POSITIVOS "+promedioPostivos+"<BR>");
		document.write("PROMEDIO negativos "+promedioNegativos+"<BR>");
		document.write("DIFERENCIA POSTIVOS-NEGATIVOS "+diferencia+"<BR>");



}//FIN DE LA FUNCIÓN