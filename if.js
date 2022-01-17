
let edad = 18;

if (edad === 18){
    console.log('Puedes votar, Sera tu primera votacion');
}else if(edad > 18){
    console.log('Puedes votar de nuevo');
}else{
    console.log('No puedes votar aun.');
}


//otro tipo de condicional: Operador Ternario
condition ? true : false;

let numero = 1;

let resultado = numero === 1 ? 'Si soy un uno' : 'No, no soy uno';

//Piedra papel o tijera
let piedra = "Piedra";
let papel = 'Papel';
let tijera = "Tijera";



let usuario;
let computador;

function juego(usuario, computador){
    if(usuario === computador){
        console.log('Es un empate');
    }else if(usuario === papel && computador === piedra){
        console.log('Has ganado con papel');
    }else if(usuario === papel && computador === tijera){
        console.log('Has perdido contra tijera');
    }else if(usuario === tijera && computador === papel){
        console.log('Has ganado con tijera');
    }else if(usuario === tijera && computador === piedra){
        console.log('Has perdido contra piedra');
    }else if(usuario === piedra && computador === tijera){
        console.log('Has ganado con piedra');
    }else if(usuario === piedra && computador === papel){
        console.log('Has perdido contra papel');
    }else{
        console.log('Valos indefinido');
    }
}

juego(papel, papel);
