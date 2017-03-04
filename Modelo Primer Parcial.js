//1-realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert.
function ejercicio1()
{
    //leer base
    //calcular el perimetro (base*4)
    //mostramos el perimetro
    var base;
    var perimetro;

    base = parseFloat(document.getElementById("base").value);

    perimetro = base * 4;

    alert("El perimetro es: " + perimetro);
}

//2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final sumándole el IVA (21%).
function ejercicio2()
{
    //leer precio
    //calcular IVA
    //sumar iva al precio
    //mostrar total

    var precio;
    var iva;
    var total;

    precio = parseFloat(prompt("Ingrese el precio del producto"));

    iva = precio * 0.21;

    total = precio + iva;

    alert("Debera pagar: " + total);

    ////////////////////////////////////////

    var precio;
    
    var total;

    precio = parseFloat(prompt("Ingrese el precio del producto"));

    total = precio * 1.21;

    alert("Debera pagar: " + total);

}

/*3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.*/

function ejercicio3()
{
    //leer largo y ancho
    //calcular perimetro (largo*2 + ancho*2)
    //calcular los metros de alambre (perimetro * 3)
    //mostrar

    var largo; //representa el largo en mts del terreno
    var ancho;
    var perimetro;
    var cantMetros;

    largo = parseFloat(document.getElementById("largo").value);
    ancho = parseFloat(document.getElementById("ancho").value);

    perimetro = (largo*2) + (ancho*2);

    cantMetros = perimetro*3;

    alert("La cantidad de alambre necesaria es: " + cantMetros);

}

/*4- (IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.*/

function ejercicio4()
{
    //leer dos numeros (numero1 y numero2)
    
    //si son iguales guardar en resultado numero1*numero2, si el primero es mayor que el segundo guardar en resultado numero1-numero2
    // y sino guardar en resultado numero1+numero2

    //mostrar el resultado

    var numero1, numero2;
    var resultado;

     numero1 = parseFloat(prompt("Ingrese el primer numero"));
     
     numero2 = parseFloat(prompt("Ingrese el segundo numero"));

     if(numero1==numero2)
     {
         resultado = numero1 * numero2;
     }
     else
     {
         if(numero1>numero2)
         {
                resultado = numero1-numero2;
         }
         else
         {
                resultado = numero1+numero2;
         }
     }
   
     document.write("El resultado es: " + resultado);
}

/*
5- (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .
*/

function ejercicio5()
{
    var dia;
    
    dia = prompt("Ingrese un dia de la semana");


    switch(dia)
    {
        case "sabado":
        case "domingo":
            alert("Es fin de semana");
            break;
        
        default:
            alert("a trabajar");
    }
}

/*
6- realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
importe de venta.
 */

function ejercicio6()
{
    var  i=0;
    var importe;
    var flag=0;
    var maxImporte, minImporte;

    while(i<24)
    {   

        importe = parseFloat(prompt("Ingrese un importe"));

        while(importe<=0)
        {
             importe = parseFloat(prompt("Reingrese un importe"));
        }

        if(flag==0)
        {
            maxImporte=importe;
            minImporte=importe;
            flag=1;
        }
        else
        {
            if(importe>=maxImporte)
            {
                maxImporte=importe;
            }
            else
            {
                if(importe<minImporte)
                {
                    minImporte=importe;
                }
            }

        }

        i++; //i = i+1; o i+=1;
    }

    alert("El importe maximo fue: " + maxImporte + " y el minimo fue: " + minImporte);
}
/*
7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6.
 */
function ejercicio7()
{
    var nota;
    var sexo;
    var acumNotas=0;
    var i;
    var minNota;
    var contVarones=0;
    var promedio;
    for(i=0; i<100; i++)
    {
       nota = parseInt(prompt("Ingrese una nota"));

        while(nota<0 || nota>10)
        {
             nota = parseInt(prompt("Reingrese una nota"));
        }

        sexo = prompt("Ingrese sexo");
        sexo = sexo.toLowerCase();
        
        while(sexo!='f' && sexo!='m')
        {
            sexo = prompt("Reingrese sexo");
            sexo = sexo.toLowerCase();
        }


        acumNotas += nota; //acumNotas = acumNotas + nota;

        if(flag==0)
        {
            minNota=nota;
            
            flag=1;
        }
        else
        {
            if(nota<minNota)
            {
                minNota=nota;
            }
            
        }

        if(sexo=='m' && nota>=6)
        {
            contVarones++;
        }

    }

     //calcular y mostrar  promedio
    //mostrar minima nota
    //mostrar el contador de varones
    promedio = acumNotas/i;
    alert("El promedio de notas es: " + promedio);
    alert("La nota minima es: " + minNota);
    alert("La cantidad de varones con nota mayor o igual a 6 es: " + contVarones);
   
}

/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo. */
function ejercicio8()
{
    var seguir="si";
    var numero;
    var contPares=0;
    var acumNumeros=0;
    var promedio;
    var i=0;
    var maxNumero, minNumero;
    var flag=0;
    while(seguir=="si")
    {
        numero = parseInt(prompt("Ingrese un numero"));

        while(numero<=0)
        {
             numero = parseInt(prompt("Reingrese un numero"));
        }

        if((numero%2)==0)
        {
            contPares++;
        }

        acumNumeros += numero;

        if(flag==0)
        {
            maxNumero=numero;
            minNumero=numero;
            flag=1;
        }
        else
        {
            if(numero>=maxNumero)
            {
                maxNumero=numero;
            }
            else
            {
                if(numero<minNumero)
                {
                    minNumero=numero;
                }
            }

        }

         i++;
        seguir=prompt("Desea seguir?");
       
    }

    promedio = acumNumeros/i;

    document.write("La cantidad de pares es: " + contPares + "<br>");
    document.write("el promedio es: " + promedio + "<br>");
    document.write("La suma es: " + acumNumeros + "<br>");
    document.write("El maximo numero es: " + maxNumero + " y el minimo es: " + minNumero + "<br>");
}



