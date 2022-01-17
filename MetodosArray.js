let articulos = [
    { nombre: "bici", costo: 3000  }, 
    {nombre: 'Television', costo: 2500},
    {nombre: 'libro', costo: 320},
    {nombre: 'celular', costo: 10000},
    {nombre: 'pc', costo: 20000},
    {nombre: 'cuaderno', costo: 120},
    {nombre: 'teclado', costo: 500},
    {nombre: 'audifonos', costo: 1700}
];
//Metodo filtrer
let articulosFiltrados = articulos.filter(function (articulo){
    return articulo.costo <= 500
});

articulosFiltrados;

//Metodo Map
let nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});
nombreArticulos

//Otro metodos
// Agregar al final= .push()
// Eliminar al final= .pop()

// Agregar al inicio= .unshift()
// Eliminar al inicio= .shift()

let tipoSuscripcion = 'Basic';
if(tipoSuscripcion == 'Free'){
    console.log('Solo puedes tomar los cursos gratis');
}else{
    if(tipoSuscripcion == 'Basic'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
    }else{
        if(tipoSuscripcion == 'Expert'){
            console.log('Puedes tomar casi todos los cursos durante un año');
        }else{
            if(tipoSuscripcion == 'ExpertPlus'){
                console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
            }else{
                console.log('Tines que iniciar sesion para acceder a los');
            }
        }
    }
}

if(tipoSuscripcion == 'Free'){
    console.log('Solo puedes tomar los cursos gratis');
}
else if(tipoSuscripcion == 'Basic'){
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
}
else if(tipoSuscripcion == 'Expert'){
    console.log('Puedes tomar casi todos los cursos durante un año');
}
else if(tipoSuscripcion == 'ExpertPlus'){
    console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
}else{
    console.log('Tines que iniciar sesion para acceder a los');
}


function Ingresos(ingreso, valorIngreso){
    this.ingreso = ingreso;
    this.valorIngreso = valorIngreso;
}


function agregarIngresos(ingreso, ValorIngreso){
    let nuevoIngreso = new Ingresos(ingreso, ValorIngreso);
    return nuevoIngreso;
}

function acomularIngresos(ingreso, ValorIngreso){
    const nuevoIngreso = agregarIngresos(ingreso, ValorIngreso);
    console.log(nuevoIngreso.valorIngreso);

    let SumaIngresos = Object.values(nuevoIngreso);
    console.log(SumaIngresos);
    let SumaValorIngresos = SumaIngresos.filter(function(objeto){
        return objeto;
    });
    console.log(SumaValorIngresos);
}

