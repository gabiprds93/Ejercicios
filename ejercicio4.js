var num = 5;

for(var i = 1; i <= num; i++)
{
    var numeros = "";
    var sp = espacios(num - i);
    for(var j = 1; j <= i; j++)
    {
        numeros += j;         
    }
    console.log(sp + numeros);
}

function espacios(num)
{
    var espacios = "";
    for(var i = 0; i < num; i++)
    {
        espacios += " ";
    }
    return espacios;
}