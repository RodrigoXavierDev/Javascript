function calcula(){
    var inicio = Number(document.getElementById("inicio").value);
    var fim = Number(document.getElementById("fim").value);
    var contador = inicio;
    var acumulador = 0;

    while(contador<=fim){
        acumulador=acumulador+contador;
        contador++;
    }
    console.log(acumulador);
}