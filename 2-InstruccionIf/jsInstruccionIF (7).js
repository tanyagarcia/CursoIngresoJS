function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<18)
	{
		if("Estado civil"!="Soltero")
		{
			alert("Es muy pequeño para ser soltero");
		}
	}

	


}//FIN DE LA FUNCIÓN