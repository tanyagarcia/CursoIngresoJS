function Mostrar()
{

	/*iteracion hasta que el usuario quiera
	*/

	//alert("Fuciona");

	var respuesta="si";
	var nota;
	var contadorNota=0;
	var sumadorNota=0;
	var promedioNota;
	var edad;
	var nombre;
	var sexo;
	var masviejo;
	var edadmasviejo;
	var contador=0;
	var contadorMujeresAprobadas=0;



	while(respuesta=="si")
	{	
		contadorNota++;
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
		while(edad>0||edad<101)//validar
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}

		nombre=prompt("Ingrese su nombre");

		sexo=prompt("Ingrese su sexo"); //validar
		while(sexo=="f"||sexo=="m")
		{
			sexo=prompt("Ingrese su sexo"); 
		}

		//aca termino la carga y validacion de datos
		//comenzamos a hacer las operaciones necesarias

		if(contador==0)
		{
			masviejo=nombre;
			edadmasviejo=nombre;
		}
		else
		{
			if(edad>edadmasviejo)
			{
				masviejo=nombre;
				edadmasviejo=nombre;
			}
		}

		if(sexo=="f"&&nota>3)
		{
			contadorMujeresAprobadas++;
		}




		/*
		1-cantidad de mujeres aprobadas
		2-cantidad de hombres mayores a 25 aprobados
		3- cantidad de mujeres menores a 20 años
		4- el nombre de la mujer con mejor nota
		5- el nombre del hombre de la mejor nota
		6- promedio notas hombres
		7- promedio notas mujeres
		8- porcentaje de aprobados versus desaprobados
		9- sexo y nombre de la primer persona que se saque 10
		*/





		sumadorNota=sumadorNota+nota;



		respuesta=prompt("Ingrese si para continuar");
	}

	promedioNota=sumadorNota/contadorNota;

	document.write("Promedio notas"+promedioNota+"<br>");
	document.write("Mujeres Aprobadas"+contadorMujeresAprobadas+"<br>");
	


}//FIN DE LA FUNCIÓN