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
  if(form.re_password.value != form.password.value) {
  $('#re_password > #validacion').html(`
  <div class="alert alert-danger" role="alert">
  Las contraseñas no son iguales
  </div>
  `)
  return false
  } else {
  $('#re_password > #validacion').html('')
  }
  if(form.g_musical.value == 0) {
  $('#g_musical > #validacion').html(`
  <div class="alert alert-danger" role="alert">
  Debe seleccionar un genero musical favorito
  </div>
  `)
  return false
  } else {
  $('#g_musical > #validacion').html('')
  }
  if(form.edad.value == "") {
  $('#edad > #validacion').html(`
  <div class="alert alert-danger" role="alert">
  Debe seleccionar un rango de edad
  </div>
  `)
  return false
  } else {
  $('#edad > #validacion').html('')
  }
  if(!form.terminos.checked) {
  $('#terminos > #validacion').html(`
  <div class="alert alert-danger" role="alert">
  Debe aceptar los terminos de uso
  </div>
  `)
  return false
  } else {
  $('#terminos > #validacion').html('')
  }
  return true
  }