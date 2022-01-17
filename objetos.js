//Objetos
// let miAuto = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     annio: 2021,
//     detallerDelauto: function(){
//         console.log(`Auto ${this.modelo} ${this.annio}`);
//     }
// };

//Funcion constructora
function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

function agregarCarro(){
    let carroMarca = prompt ('Que marca de carro tienes?', 'Escribe aqui la marca de tu carro');
    let carroModelo = prompt ('Que modelo de carro tienes?', 'Escribe aqui el modelo de tu carro');
    let carroAnnio = prompt ('Que año de carro tienes?', 'Escribe aqui el año de tu carro');
    let nuevoAuto = new Auto(carroMarca, carroModelo, carroAnnio);
    console.log(nuevoAuto);
}

for(let i = 0; i < 30; i++){
    agregarCarro();
}


let Mycar = {
    Marca: 'Mazda',
    Modelo: 'Onix',
    annio: 2002
};

for(let propeidades in Mycar){
    console.log(`${propeidades}: ${Mycar[propeidades]}`);
}







