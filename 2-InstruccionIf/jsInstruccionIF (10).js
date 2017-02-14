function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom=Math.floor(Math.random() * 10) + 1;

	if(numeroRandom<4)
	{
		alert(numeroRandom+" Vamos la próxima se puede");
	}
	else
	{
		if(numeroRandom>3&&numeroRandom<9)
		{
			alert(numeroRandom+" Aprobó");
		}
		else
		{
			alert(numeroRandom+" Excelente");
		}
	}
}//FIN DE LA FUNCIÓN