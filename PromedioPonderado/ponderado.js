
// Creando un array con las notas totales
let notas = [
    {
        curso: 'Educacion-Fisica',
        nota: 7,
        creditos: 2,
    },
    {
        curso: 'Matematicas',
        nota: 8,
        creditos: 6,
    },
    {
        curso: 'Informatica',
        nota: 9,
        creditos: 8,
    },
    {
        curso: 'Naturales',
        nota: 4,
        creditos: 5
    }
]

//Multiplicando las notas por los creditos
let sumasNotas = notas.map(function(noteObjeto){
    return noteObjeto.nota * noteObjeto.creditos;
});
let totalSuma = 0;

//Sumando todas las notas ya multiplicadas
for(let i = 0; i < sumasNotas.length; i++){
    totalSuma += sumasNotas[i];
    console.log(totalSuma);
}


//Recorriendo todos los creditos
let sumaCreditos = notas.map(function(noteCredito){
    return noteCredito.creditos;
});

//Sumando todos los creditos
let totalSumaCreditos = 0;
for(let i = 0; i < sumaCreditos.length; i++){
     totalSumaCreditos += sumaCreditos[i];
     console.log(totalSumaCreditos);
}

//Haciendo la division entre ambas sumas
let totalNota = totalSuma / totalSumaCreditos;



