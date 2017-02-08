function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(!(edad<18&&edad>12)) //también se puede hacer usando el IF+ELSE
		{
			alert("No es adolescente");
		}

}//FIN DE LA FUNCIÓN