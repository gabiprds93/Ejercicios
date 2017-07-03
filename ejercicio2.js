var arreglo = [0, 1, 0, 1];
var pares = [];
var impares = [];
for(var i in arreglo)
{
    if(i % 2 == 0)
    {
        pares.push(arreglo[i]);
    }
    else
        impares.push(arreglo[i]);
}

document.write("Elementos de posicíon par: [" + pares + "]<br/>Elementos de posicíon impar: [" + impares + "]");