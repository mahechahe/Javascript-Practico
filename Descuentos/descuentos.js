
function calcularDescuento(precioOriginal, descuento){

    cuponDescuento = document.getElementById('CuponDescuento');
    cuponDescuentoValue = CuponDescuento.value;

    let Cupones = ['Hola_21', 'Alejita.inst', 'Estiven.cupon', 'Jefe.cuponFinal', 'NoCupon']
    let descuentoFinal;
    descuentoNumber = Number(descuento);

    switch (cuponDescuentoValue){
        case Cupones[0]:
            descuentoFinal = 25 + descuentoNumber;
            break;
        case Cupones[1]:
            descuentoFinal = 15 + descuentoNumber;
            break;
        case Cupones[2]:
            descuentoFinal = 50 + descuentoNumber;
            break;
        case Cupones[3]:
            descuentoFinal = 70 + descuentoNumber;
            break;  
        case Cupones[4]:
            descuentoFinal = 0 + descuentoNumber;  
    }
    console.log(descuentoFinal);
    
    const porcentajeFinal = 100 - descuentoFinal;
        const precioFinal = (precioOriginal * porcentajeFinal) / 100;
        return precioFinal;
    
}



function ClickButtonPrice(){
    const inputPrice = document.getElementById("inputPrice");
    const inputPriceValue = inputPrice.value;

    const inputDescuento = document.getElementById('inputDescuento');
    const inputDescuentoValue = inputDescuento.value;

    cuponDescuento = document.getElementById('CuponDescuento');
    cuponDescuentoValue = CuponDescuento.value;


    const precioConDescuento = calcularDescuento(inputPriceValue, inputDescuentoValue);
    

    const resultP = document.getElementById('ResultPrice');
    resultP.innerText = `El precio original es de: ${inputPriceValue}$ y con el descuento sumando el cupon del ${cuponDescuentoValue} quedaria en ${precioConDescuento}$`;
}


