/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre; //declaro las variables
	var edad;

	nombre=document.getElementById("elNombre").value; //uso esta forma de GET porque me pide tomar el nombre. Igual que ej. 3
	edad=document.getElementById("laEdad").value; //para usar esta forma de tomar el dato se pone VALUE después del ()

	alert("Usted se llama "+nombre+"  y su edad es "+edad); //los espacios van adentro de las comillas


}




