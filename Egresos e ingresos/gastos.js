    let ingresosUsuario = [];
    let nombreIngreso = [];
    let sumaIngresos = 0;
    let restarEgresos = 0;

    //Agregando nombres de ingresos

    function agregarNombreIngresoClick(){
        const nombreUsuario = document.getElementById('agregarNombreIngreso')
        const nombreUsuarioValue = nombreUsuario.value;
        agregarNombreIngreso(nombreUsuarioValue);
    }

    function agregarNombreIngreso(nombre){
        const nuevoNombre = nombreIngreso.push(nombre);
        console.log(nombreIngreso);
        agregarIngresoDOM(nombreIngreso);
    }

    //Agregando valor de ingresos

    function agregarIngresosUsuarioClick(){
        const ValorIngresoUsuario = document.getElementById('agregarValorIngreso');
        const ValorIngresoUsuarioValue = ValorIngresoUsuario.value;
        const ValorIngresoUsuarioValueNumber = Number(ValorIngresoUsuarioValue)
        agregarIngresosUsuario(ValorIngresoUsuarioValueNumber);
    }
    function agregarIngresosUsuario(valorIngresoUsuario){
        const nuevoIngreso = ingresosUsuario.push(valorIngresoUsuario);
        console.log(ingresosUsuario);

        const SumarIngresos = ingresosUsuario.reduce(function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        });

        console.log(SumarIngresos);
        agregarIngresoTexto(ingresosUsuario);
        agregarIngresosTotales(SumarIngresos);
        EscribirIngresosTotales(SumarIngresos);
    }

    //Escribiendo en el HTML
    function agregarIngresosTotales(sumaIngresos){
        let agregartextoSumaIngresos = document.getElementById('IngresosTotales');
        agregartextoSumaIngresos.innerText = `Ingresos Totales: ${sumaIngresos}`;
    }
    function agregarIngresoDOM(nombreIngreso){
        let agregarTextoIngreso = document.getElementById('ingresosUsuario');
        agregarTextoIngreso.innerText = `Nuevo ingreso: ${nombreIngreso}`;
        
    }
    function agregarIngresoTexto(valorIngresoUsuario){
        let valorIngresoTexto = document.getElementById('valorIngreso');
        valorIngresoTexto.innerText = `Valor del ingreso ${valorIngresoUsuario}`;
    }

    //Egresos
    let egresoUsuario = [];
    let valorEgresoUsuario = [];

    //Agregando el valor de Egresos
    function agregarEgresosUsuarioValorClick(){
        const egresoValorUsuario = document.getElementById('agregarEgresoValor');
        const egresoValorUsuarioValue = egresoValorUsuario.value;
        const egresoValorUsuarioValueNumber = Number(egresoValorUsuarioValue);
        agregarEgresos(egresoValorUsuarioValueNumber);
    }

    function agregarEgresos(valorEgreso){
        let ingresosTotales = valorEgresoUsuario.push(valorEgreso);
        console.log(valorEgresoUsuario);

        let sumarEgresosTotales = valorEgresoUsuario.reduce(function(valorAcomulado = 0, nuevoValor){
            return valorAcomulado + nuevoValor;
        });
        console.log(sumarEgresosTotales);
        escribirEgresosValor(valorEgresoUsuario);
        restarIngresosDeEgresos(sumarEgresosTotales);
        escribirEgresosTotalesAcomulados(sumarEgresosTotales);
    }

    function escribirEgresosValor(ValorEgreso){
        let ValorEgresoTexto = document.getElementById('agregarEgresosValor');
        ValorEgresoTexto.innerText = `Valor de Egresos: ${ValorEgreso}`;
    }
    function escribirEgresosTotalesAcomulados(egresosSuma){
        let egresoAcomulado = document.getElementById('egresosTotales');
        egresoAcomulado.innerText = `Egresos Totales: ${egresosSuma}`;
    }



    //Agregando el nombre de Egresos
    function agregarNombreEgresosUsuarioClick(){
        let nombreEgresoUsuario = document.getElementById('agregarEgresoNombre');
        let nombreEgresoUsuarioValue = nombreEgresoUsuario.value;

        agregarNombreEgreso(nombreEgresoUsuarioValue);
    }

    function agregarNombreEgreso(nombreEgreso){
        let nuevoNombreEgreso = egresoUsuario.push(nombreEgreso);
        console.log(egresoUsuario);
        EscribirEgresosNombre(egresoUsuario);
    }

    function EscribirEgresosNombre(NombreEgreso){
        let nombreEgresoTexto = document.getElementById('agregarEgresos');
        nombreEgresoTexto.innerText = `Egresos: ${NombreEgreso}`;
    }


    ///Agregando la resta del egreso total al ingreso total
    function EscribirIngresosTotales(SumarIngresos){
        sumaIngresos = SumarIngresos;
    }

    function restarIngresosDeEgresos(TotalEgreso){
        restarEgresos = sumaIngresos - TotalEgreso;
        console.log(`Total ahorro: ${restarEgresos}`);
        let plataRestante = document.getElementById('PlataRestante');
        plataRestante.innerText = `La plata restante que te queda es: ${restarEgresos}`
    }






