$(document).ready(function(){//carga la pagina (se ejecuta solo una vez)
    const infonum1 = {};
    
    const profesiones = [];
    $('#enviar').click(function(){//asignando la funcion a un evento (cuando pase evento ejecuta funcion)
        const nombre = $('#nombre');//busca valor del id nombre en HTML y se lo agrega la const nombre 
        const apellido =$('#apellido');//busca valor del id apellido en HTML y se lo agrega la const apellido 
        const fecha =$('#fecha');//busca valor del id fecha en HTML y se lo agrega la const fecha 
        const infoFormulario = [nombre, apellido, fecha]//crea un array con los valores de nombre, apellido y fecha
        let formularioInvalido = false;
        for (let i = 0; i< infoFormulario.length; i++){
            if (infoFormulario[i].val() === '') {
                infoFormulario[i].removeClass('lleno')
                infoFormulario[i].addClass('vacio')
                formularioInvalido = true;
            }
            else {
                infoFormulario[i].removeClass('vacio')  
                infoFormulario[i].addClass('lleno')
            }
        }
        
        if (formularioInvalido === false) {
            $('#formulario1').removeClass('aparecer')
            $('#formulario1').addClass('ocultar')
            $('#formulario2').removeClass('ocultar')
            $('#formulario2').addClass('aparecer')
            infonum1.nombre = nombre.val();
            infonum1.apellido = apellido.val();
            infonum1.fecha = fecha.val();
        } else {
            alert('Favor ingresar todos los campos')
        }
    })
    let contadorInputs = 1;//asignando valor a "contadoinputs"
    $('#agregar').click(function(){//asignando la funcion a un evento (cuando pase evento ejecuta funcion)
        if (contadorInputs < 3 ) {//condicion donde el valor de contInp tiene que ser menor o igual a 3
            contadorInputs += 1; //aumenta el valor del contador 
            const plantilla = $('#input1')//busca elemento en HTML y lo asigna a una variable "plantilla"
            plantilla.clone()//clona el elemento que esta dentro de la variable plantilla 
            .prop('id', `input${contadorInputs}`)//cambiando una propiedad del elemento
            .val('')//vaciando el clon del input 
            .appendTo('#formulario2').after('<br/>')
            .removeClass('vacio')
            .removeClass('lleno')
        }
        else{
            alert('Solo se permiten 3 campos');
        }
    });
    $('#submit').click(function(){
        let formularioValido = true;
        for (let i = 0; i< contadorInputs; i++){//agrega valor de 0 a i//el loop se repite hasta que i deje de ser menor que continp//agrega +1 
            if ($(`#input${i+1}`).val() === '') {//busca el valor del input y si es igual a nada ('') realiza las siguientes funciones 
                $(`#input${i+1}`).removeClass('lleno')//remueve la clase lleno de css al input
                $(`#input${i+1}`).addClass('vacio')//agrega la clase lleno de css al input
                formularioValido = false;
            } else {//dice que si el valor del input esta lleno realice las siguientes funciones 
                $(`#input${i+1}`).removeClass('vacio')//remueve la clase vacio de css al input
                $(`#input${i+1}`).addClass('lleno')//agrega la clase lleno de css al input
                $(`#input${i+1}`).val()
                profesiones.push($(`#input${i+1}`).val() + ('<br/>'))
            }
        }
        if (formularioValido) {
            $('#formulario2').removeClass('aparecer')
            $('#formulario2').addClass('ocultar')
            $('#resumen').removeClass('ocultar')
            $('#resumen').addClass('aparecer')
            $('#nombreR').html(infonum1.nombre)
            $('#apellidoR').html(infonum1.apellido)
            $('#fechaR').html(infonum1.fecha)
            $('#profesiones').html(profesiones)
        } else {
            alert('Favor llenar todos los campos ingresados ')
        }
    })
});