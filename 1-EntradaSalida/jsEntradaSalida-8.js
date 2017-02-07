/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo; //declaro las variables
	var divisor;
	var resto;

	dividendo=document.getElementById('numeroDividendo').value; //los tomo por ID y las cargo
	divisor=document.getElementById('numeroDivisor').value;

	resto=dividendo%divisor; //uso este módulo % para que me devuelva el resto de la división

	alert("El resultado es: "+resto); //muestro el resultado por Alert


}
