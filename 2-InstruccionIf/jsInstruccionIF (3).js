function Mostrar()
{
//tomo la edad  
	var edad //declaro la variable

	edad=document.getElementById('edad').value; //la cargo

	if (edad>17) //acá averiguo si es mayor de 18
		{
			alert("Es mayor de edad");
		}

	if (edad<17)
		{
			alert("Es menor de edad"); //acá averiguo si es menor de 18
		}


}//FIN DE LA FUNCIÓN