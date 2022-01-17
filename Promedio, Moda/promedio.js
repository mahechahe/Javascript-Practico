
    // let sumaLista = 0;
    
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
function calculaMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
    
    const promediolista = sumaLista / lista.length;
    return promediolista;

}