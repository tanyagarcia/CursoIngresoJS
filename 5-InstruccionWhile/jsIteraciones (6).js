function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
		{
			numero=prompt("Ingrese número");
			numero=parseInt(numero); //lo parseo porque si no, va a ir juntando los numeros uno al lado del otro, sin sumarlos
			acumulador=acumulador+numero;
			contador++;//contador=contador+1

		}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN