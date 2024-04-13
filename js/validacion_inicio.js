function validar(form){

    if(form.correo.value.length == 0) {
    $('#correo > #validacion').html(`
    <div class="alert alert-danger" role="alert">
    El correo no puede estar vacio
    </div>
    `)
    return false
    } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(form.correo.value)) {
    $('#correo > #validacion').html(`
    <div class="alert alert-danger" role="alert">
    El formato del correo es invalido
    </div>
    `)
    return false;
    } else {
    $('#correo > #validacion').html('')
    }
    
    }
    if(form.password.value.length < 9) {
    $('#password > #validacion').html(`
    <div class="alert alert-danger" role="alert">
    la contraseña debe tener mas de 8 caracteres
    </div>
    `)
    return false
    } else {
    $('#password > #validacion').html('')
    }
    }