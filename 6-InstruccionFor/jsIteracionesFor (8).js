function Mostrar()
{

/* al generar numeros random del 0 al 10 se debe contar la cantidad de cada una de estas cifras, repetir la iteracion para lanzar el random 100.000 veces e informar 
1) la cantidad de veces que salio cada numero del 0 al 10 
2) el porcentaje de veces que salio cada numero con respecto al total

for de cero a cien mil
dentro del for numero random
luego un switch con case contador de uno contador de uno mas uno. contador por cada numero
*/
var tienedivisor;
var numIngresado=prompt(numIngresado);
numIngresado=parseInt(numIngresado);

for(numeroRecorrido=2;)











		for(numAnterior=2; numAnterior<(numIngresado/2);numAnterior++)
		{
			
			if(numIngresado%numAnterior==0)
			{
				tienedividor="si";
				break;
			}

		}

		if(tienedivisor=="no")
		{
			console.log("Es primo "+numIngresado);
		}

}//FIN DE LA FUNCIÓN