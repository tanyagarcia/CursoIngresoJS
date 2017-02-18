function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador<5) //porque tiene que hacer la suma 5 veces
		{

			contador++; //aumento el contador de a uno
			numero=prompt("Ingrese datos"); //pido el dato por prompt
			numero=parseInt(numero); //convierto el numero a entero
			acumulador=acumulador+numero; //hago la fórmula del acumulador+numero porque tiene que ir sumando el numero ingresado

		}



document.getElementById('suma').value=acumulador; //para que me muestre el numero acumulado por document.get
document.getElementById('promedio').value=acumulador/5; //para que me muestre el promedio por document.get

}//FIN DE LA FUNCIÓN