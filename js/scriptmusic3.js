$(document).ready(function() {

    $.ajax({
	  url: 'datos.json',
	  method: 'GET'
	}).then(function(data) {

		var pathname = window.location.pathname;

		//Pagina Canciones
		if(pathname.includes("canciones"))
		{
			//carga las canciones
			$.each(data.canciones, function( index, value ) {

				var divCanciones = document.getElementById("canciones");
                var newDiv = document.createElement("div"); 
				// newDiv.className = "col-md-4 mt-md-0 mt-3";
				newDiv.className = "col-md-4 col-sm-12 mt-md-2 mt-3";
				newDiv.innerHTML = "<div class='row bg-light cancion justify-content-center'>" +
										//    "<div class='card center-text'>" +
										   "<div class='card center-text' style='width:90%'>" +
						                  "<div class='card-musica'>" +
						                    "<div class='row border bg-light'>" +
						                      "<div class='col-md-12'>" +
												"<img src='imagenes/icon_" + value.icono + ".svg' width='100' alt='cancion'>" +
						                        "<h5 class='d-block d-sm-none card-title bg-white'>" + value.nombre + "</h5>" +
						                      "</div>" +
						                      "<div class='d-none d-sm-block col-md-12 nombre bg-white'>" +
						                        "<h5 class='card-title'>" + value.nombre + "</h5>" +
						                      "</div>" +
						                      "<div class='col-md-12 bg-white'>" +
						                        "<audio controls>" +
						                          "<source src='canciones/" + value.ruta + "' type='audio/mpeg'>" + 
						                          "Su navegador no soporta el elemento de audio." +
						                        "</audio>" +
						                      "</div>" +
						                    "</div>" +
						                 "</div>" +
						              "</div>" +
						          "</div>";

	  			divCanciones.appendChild(newDiv);

	  			//Busqueda filtrado
	  			var busqueda = $('#busqueda'); //contiene el texto a buscar
				var abuscar = $('.cancion div div div .nombre h5'); //contiene el texto de cada nombre

				$(abuscar).each(function(){ //buscar dentro del nombre

				  var h5 = $(this); //Leemos cada nombre
				  $(busqueda).keyup(function(){ //Se ejecuta al presionar tecla
				    this.value = this.value.toLowerCase(); //convertimos a minuscula
				    //ocultamos toda la lista
				    $(h5).parent().parent().parent().parent().parent().hide();
				    //valor del h5
				    var nombre = $(this).val();
				    //si hay coincidencias en la búsqueda 	//cambiando a minusculas toLowerCase()
				    if($(h5).text().indexOf(nombre) > -1){
				      //mostramos las canciones que coincidan
				      $(h5).parent().parent().parent().parent().parent().show();
				    }
				  })
				});

			});	  
		}		
	});
        
});