function Mostrar()
{
	/*iteracion hasta que el usuario quiera
	*/

	//alert("Fuciona");

	var respuesta="si";
	var nota;
	var contadorNotas=0;
	var contador=0;
	var sumadorNotas=0;
	var promedioNotas;
	var edad;
	var nombre;
	var sexo;
	var masviejo;
	var edadmasviejo;
	var contadorMujeresAprobadas=0;
	var hombresMayoresAprobados=0;
	var mujeresAprobadasMenores=0;
	var mejorNotaHombre;
	var mejorNotaMujer;
	var contadorNotasMujeres=0;
	var contadorNotasHombres=0;
	var sumadorNotasMujeres=0;
	var sumadorNotasHombres=0;
	var promedioNotasMujeres;
	var promedioNotasHombres;
	var primerPersonaConDiez;
	var aprobados=0;
	var desaprobados=0;
	var porcentajeAprobados;
	var porcentajeDesaprobados;

	while(respuesta=="si")
	{	
		contadorNotas++;
		//leo y valido nota
		nota=prompt("Por favor, ingrese su nota");
		nota=parseInt(nota);
		while(nota<0||nota>10)
		{
			nota=prompt("Por favor, ingrese su nota");
			nota=parseInt(nota);
		}

		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		while(!(edad>0||edad<101))//validar
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}

		nombre=prompt("Ingrese su nombre");

		sexo=prompt("Ingrese su sexo: f ó m "); //validar
		while(!(sexo=="f"||sexo=="m"))
		{
			sexo=prompt("Ingrese su sexo: f ó m "); 
		}

		//aca termino la carga y validacion de datos
		//comenzamos a hacer las operaciones necesarias

		if(contador==0)
		{
			masviejo=nombre;
			edadmasviejo=edad;

			if(sexo=="f")
			{
				mejorNotaMujer=nombre;
			}

			if(sexo=="m")
			{
				mejorNotaHombre=nombre;
			}
			if(nota==10)
			{
				primerPersonaConDiez=nombre;
			}
		}
		else
		{
			if(edad>edadmasviejo)
			{
				masviejo=nombre;
				edadmasviejo=edad;
			}
			if(nota>mejorNotaMujer)
			{
				mejorNotaMujer=nombre;
			}
			if(nota>mejorNotaHombre)
			{
				mejorNotaHombre=nombre;
			}
			if(nota==10)
			{	
				primerPersonaConDiez=nombre;
			}
		}

		if(sexo=="f")
		{	
			contadorNotasMujeres++;
			sumadorNotasMujeres=sumadorNotasMujeres+nota;
			if(nota>3)
			{
			contadorMujeresAprobadas++;
			}
			if(edad<20)
			{
			mujeresAprobadasMenores++;
			}
		}

		if(sexo=="m")
		{	
			contadorNotasHombres++;
			sumadorNotasHombres=sumadorNotasHombres+nota;
			if(edad>25)
			{
			hombresMayoresAprobados++;
			}
		}

		if(nota>3)
		{
			aprobados++;
		}
		else
		{
			desaprobados++;
		}

		sumadorNotas=sumadorNotas+nota;
		contador++;

		respuesta=prompt("Desea continuar? si/no");
	}

	promedioNotas=sumadorNotas/contadorNotas;
	promedioNotasMujeres=sumadorNotasMujeres/contadorNotasMujeres;
	promedioNotasHombres=sumadorNotasHombres/contadorNotasHombres;
	porcentajeAprobados=aprobados*100/contadorNotas;
	porcentajeDesaprobados=desaprobados*100/contadorNotas;

	document.write("Promedio notas "+promedioNotas+"<br>");
	document.write("Mujeres Aprobadas "+contadorMujeresAprobadas+"<br>");
	document.write("Hombres mayores a 25 aprobados "+hombresMayoresAprobados+"<br>");
	document.write("Mujeres menores de 20 aprobadas "+mujeresAprobadasMenores+"<br>");
	document.write("Nombre de la mujer con mejor nota "+mejorNotaMujer+"<br>");
	document.write("Nombre del hombre con mejor nota "+mejorNotaHombre+"<br>");
	document.write("Promedio notas de mujeres "+promedioNotasMujeres+"<br>");
	document.write("Promedio notas de hombres "+promedioNotasHombres+"<br>");
	document.write("El porcentaje de aprobados es "+porcentajeAprobados+"y el porcentaje de desaprobados es "+porcentajeDesaprobados+"<br>");
	document.write("El nombre y sexo de la primer persona con diez es "+primerPersonaConDiez+"<br>");

	

	/*
		1-cantidad de mujeres aprobadas
		2-cantidad de hombres mayores a 25 aprobados
		3- cantidad de mujeres menores a 20 años aprobadas
		4- el nombre de la mujer con mejor nota
		5- el nombre del hombre de la mejor nota
		6- promedio notas hombres
		7- promedio notas mujeres
		8- porcentaje de aprobados versus desaprobados
		9- sexo y nombre de la primer persona que se saque 10
		*/


}//FIN DE LA FUNCIÓN