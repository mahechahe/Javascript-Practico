//Codigo del Cuadrado
console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log('El area del cuadrado es: ' + areaCuadrado + 'cm2');
console.groupEnd();



//Codigo del Triangulo
console.group('Triangulo')


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo del circulo

console.group('Circulos')

//Diametro
function diametroCirculo (radio){
    return radio * 2;
} 

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area 
function areaCirculo(radio){
    return (radio * radio) * PI;
} 


console.groupEnd();

//Aqui integramos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    escribirCuadradoPerimetro(perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    escribirCuadradoArea(area);
}

//Triangulo
function calcularPerimetroTraingulo(){
    const inputTriangulo1 = document.getElementById('inputTriangulo1');
    const valueTrangulo1 = inputTriangulo1.value;
    const ValueTraingulo1Final = Number(valueTrangulo1);

    const inputTriangulo2 = document.getElementById('inputTriangulo2');
    const valueTrangulo2 = inputTriangulo2.value;
    const ValueTraingulo2Final = Number(valueTrangulo2);

    const inputTriangulo3 = document.getElementById('inputTriangulo3');
    const valueTrangulo3 = inputTriangulo3.value;
    const ValueTraingulo3Final = Number(valueTrangulo3);
    

    const periemtroTrianguloFinal = perimetroTriangulo(ValueTraingulo1Final, ValueTraingulo2Final, ValueTraingulo3Final);
    escribirTrianguloPerimetro(periemtroTrianguloFinal);
}

function calcularAreaTriangulo(){
    const inputTriangulo2 = document.getElementById('inputTriangulo2');
    const valueTrangulo2 = inputTriangulo2.value;
    const ValueTraingulo2Final = Number(valueTrangulo2);

    const inputTriangulo3 = document.getElementById('inputTriangulo3');
    const valueTrangulo3 = inputTriangulo3.value;
    const ValueTraingulo3Final = Number(valueTrangulo3);

    const areaTrianguloFinal = areaTriangulo(ValueTraingulo3Final, ValueTraingulo2Final);
    escribirTrianguloArea(areaTrianguloFinal)
}

//Circulo
function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById('inputCirculo');
    const inputCirculoValue = inputCirculo.value;

    const perimetroFinalCirculo = perimetroCirculo(inputCirculoValue);
    escribirCirculoPerimetro(perimetroFinalCirculo);
}

function calcularAreaCirculo(){
    const inputCirculo = document.getElementById('inputCirculo');
    const inputCirculoValue = inputCirculo.value;

    const areaFinalCirculo = areaCirculo(inputCirculoValue);
    escribirCirculoArea(areaFinalCirculo);
}

function calcularCircunferenciaCirculo(){
    const inputCirculo = document.getElementById('inputCirculo');
    const inputCirculoValue = inputCirculo.value;

    const DiametroFinalCirculo = diametroCirculo(inputCirculoValue);
    escribirCirculoDiametro(DiametroFinalCirculo);
}

//Triangulo isosceles
console.group('Triangulo isosceles')



function alturaTrianguloIsosceles(lado1, lado2, base){
    if(lado1 === lado2 && base != lado1){
        let alturaTrianguloIsoscelesFinal = Math.sqrt((lado1 * lado2) - (base * base / 4));
        console.log(alturaTrianguloIsoscelesFinal);
    }else{  
        console.log('Datos invalidos');
    }
}

// Escribiendo en el HTML
//Cuadrado
function escribirCuadradoPerimetro(resultadoFinal){
    const resultadoUsuarioPerimetroCuadrado = document.getElementById('resultadoUsuarioPerimetroCuadrado');
    resultadoUsuarioPerimetroCuadrado.innerText = `El perimetro final es: ${resultadoFinal}`;
}
function escribirCuadradoArea(resultadoFinal){
    const resultadoUsuarioAreaCuadrado = document.getElementById('resultadoUsuarioAreaCuadrado');
    resultadoUsuarioAreaCuadrado.innerText = `El Area final es: ${resultadoFinal}`;
}
//Triangulo
function escribirTrianguloArea(resultadoFinal){
    const resultadoAreaTriangulo = document.getElementById('resultadoAreaTriangulo');
    resultadoAreaTriangulo.innerText = `El Area final es: ${resultadoFinal}`;
}
function escribirTrianguloPerimetro(resultadoFinal){
    const resultadoPerimetroTriangulo = document.getElementById('resultadoPerimetroTriangulo');
    resultadoPerimetroTriangulo.innerText = `El perimetro final es: ${resultadoFinal}`;
}
//Circulo
function escribirCirculoPerimetro(resultadoFinal){
    const resultadoUsuarioCirculoPerimetro = document.getElementById('resultadoUsuarioCirculoPerimetro');
    resultadoUsuarioCirculoPerimetro.innerText = `El perimetro final es: ${resultadoFinal}`;
}
function escribirCirculoArea(resultadoFinal){
    const resultadoUsuarioCirculoArea = document.getElementById('resultadoUsuarioCirculoArea');
    resultadoUsuarioCirculoArea.innerText = `El Area final es: ${resultadoFinal}`;
}
function escribirCirculoDiametro(resultadoFinal){
    const resultadoUsuarioCirculoDiametro = document.getElementById('resultadoUsuarioCirculoDiametro');
    resultadoUsuarioCirculoDiametro.innerText = `El diametro final es: ${resultadoFinal}`;
}


console.groupEnd();


//Dato curioso de la clase: cuando declaramos la funcion los datos dentro de los parentesis se llaman PARAMETROS, cuando llamamos a ejecutarla se llaman ARGUMENTOS.


