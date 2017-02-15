function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		alert("Tiene 31 días");
		break;

	case "Febrero":
		alert("Tiene 28 días");
		break;

	default:
			alert("Tiene 30 días");
}

}//FIN DE LA FUNCIÓN