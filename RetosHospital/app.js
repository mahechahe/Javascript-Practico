
function tiempoUsuario(){
    yearUsuario = document.getElementById('edadUsuario');
    yearUsuarioValur = yearUsuario.value;
    calcularTiempo(yearUsuarioValur);
}

function calcularTiempo(year){
    const annioActual = 2021;
    let anniosPasados = annioActual - year;

    const UsuarioRespuesta = document.getElementById('UsuarioRespuesta');
    UsuarioRespuesta.innerText = `Han pasado ${anniosPasados} annios`;
}


function FizzFazz (){
    let numeros = 100;


    for(let i = 0; i < numeros; i++){
        if(i % 5 === 0){
            console.log('Fizz');
            if(i % 10 === 0){
                console.log('FizzBuzz');
        }
        }else{
            console.log(i);
        }
    }
}