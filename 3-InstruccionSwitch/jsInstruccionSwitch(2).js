function Mostrar()
{

var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
	alert("Ya pasamos el frio, ahora calor");
	break;

case "Julio":
case "Agosto":
	alert("Abrigate que hace frío");
	break;

case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
	alert("Falta para el invierno");
	break;
}

}//FIN DE LA FUNCIÓN