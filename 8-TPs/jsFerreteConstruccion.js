/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largodelterreno;
	var anchodelterreno;
	var rectanguloDeAlambre

	largodelterreno=document.getElementById('Largo').value;
	anchodelterreno=document.getElementById('Ancho').value;

	//largodelterreno=parseInt(largodelterreno);
	//anchodelterreno=parseInt(anchodelterreno);

	rectanguloDeAlambre=(largodelterreno*2+anchodelterreno*2)*3;

	alert("La cantidad de alambre requerida es"+rectanguloDeAlambre+" metros");

}
function Circulo () 
{
	var radiodelterreno;
	var circuloDeAlambre;

	radiodelterreno=document.getElementById('Radio').value;

	//radiodelterreno=parseInt(radiodelterreno);

	circuloDeAlambre=(radiodelterreno*2)*3;

	alert("La cantidad de alambre requerida es "+circuloDeAlambre+" metros");
	
}
function Materiales () 
{
	var largodelterreno;
	var anchodelterreno;
	var cantidadDeMaterialesUno;
	var cantidadDeMaterialesDos;

	largodelterreno=document.getElementById('Largo').value;
	anchodelterreno=document.getElementById('Ancho').value;

	//largodelterreno=parseInt(largodelterreno);
	//anchodelterreno=parseInt(anchodelterreno);

	cantidadDeMaterialesUno=(largodelterreno*2+anchodelterreno*2)/2;
	cantidadDeMaterialesDos=(largodelterreno*2+anchodelterreno*2)/3;

	alert("Se van a necesitar:"+cantidadDeMaterialesUno+" bolsas de cemento, y "+cantidadDeMaterialesDos+" bolsas de cal");


}