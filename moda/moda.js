
function ClickUsuario(){
   let datosUsuarioModa = document.getElementById('datosUsuarioModa').value;
   console.log(typeof datosUsuarioModa);
   let datosUsuarioFinalModa = JSON.parse(`[${datosUsuarioModa}]`);
   EncapsularModa(datosUsuarioFinalModa);
}

function EscribirTextousuarioModa(moda){
    const TextoFinalUsuarioModa = document.getElementById('TextoFinalUsuarioModa');
    TextoFinalUsuarioModa.innerText = `El valor que mas se repite es ${moda} veces`;
}

function EncapsularModa(listaUsuario){

    const lista1Cuenta = {};

    listaUsuario.map(
        function(elemento){
            if (lista1Cuenta[elemento]){
                lista1Cuenta[elemento] += 1;
            }else{
                lista1Cuenta[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Cuenta).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    EscribirTextousuarioModa(moda);
    return moda;
}







