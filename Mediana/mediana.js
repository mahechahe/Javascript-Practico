let datosUsuarioArray = [];

function calculaMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
    
    const promediolista = sumaLista / lista.length;
    return promediolista;
}

function EnviarDatosMediana(){
    const datosUsuarioMediana = document.getElementById('EnviarNumerosMediana');
    const datosUsuarioMedianaValue = datosUsuarioMediana.value;
    let datosUsuarioFinal = JSON.parse(`[${datosUsuarioMedianaValue}]`);
    console.log(datosUsuarioFinal);
    capsularMediana(datosUsuarioFinal);
}

function capsularMediana(lista){

    const medianaCapsuladaOrdenada = lista.sort();
    console.log(medianaCapsuladaOrdenada);
    const mitadLista1 = parseInt(medianaCapsuladaOrdenada.length / 2);
    
    function esPar(numeros){    
        if(numeros % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;
    if(esPar(medianaCapsuladaOrdenada.length)){
        const elemento1 = medianaCapsuladaOrdenada[mitadLista1 - 1];
        const elemento2 = medianaCapsuladaOrdenada[mitadLista1];

        const promedioElemento1y2 = calculaMediaAritmetica([
            elemento1,
            elemento2
        ]);

        mediana = promedioElemento1y2;
        console.log(mediana);
        escribirResultadoPantalla(mediana);
        return mediana;
        
    }else{
        mediana = lista[mitadLista1];
        console.log(mediana);
        escribirResultadoPantalla(mediana);
        return mediana;
    }
}
function escribirResultadoPantalla(medianaFinal){
    const resultadoFinalUsuario = document.getElementById('ResultadoUsuarioMediana');
    resultadoFinalUsuario.innerText = `La mediana de tus numeros es: ${medianaFinal}`;
}


const lista1 = [
    100, 400, 600, 9000, 300, 550
];





