var num1 = prompt("Ingresar numero 1");
var num2 = prompt("Ingresar numero 2");
var num3 = prompt("Ingresar numero 3");
var maximo = 0;
var minimo = 0;

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if(num1 > num2)
{
    if(num1 > num3)
    {
        maximo = num1;
        if(num2 > num3)
            minimo = num3;
        else
            minimo = num2;
    }
    else
    {
        maximo = num3;
        minimo = num2;
    }
}
else
{
    if(num2 > num3)
    {
        maximo = num2;
        if(num1 > num3)
            minimo = num3;
        else
            minimo = num1;
    }
    else
    {
        maximo = num3;
        minimo = num1;
    }
    
}
document.write("Máximo = " + maximo + ", Mínimo = " + minimo);