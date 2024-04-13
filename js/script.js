var peticion = new XMLHttpRequest();
peticion.open('GET', 'datos.json');
peticion.onload = function () {
    var datos = JSON.parse(peticion.response)


    datos.canciones.sort(function(a, b){
        return a.reproducciones-b.reproducciones;
    })

    document.getElementById("cancion1").innerHTML = datos.canciones[8].nombre;
    document.getElementById("audio1").innerHTML = '<audio src="canciones/' + datos.canciones[8].ruta +'"class="align-self-center" controls> </audio>';
    document.getElementById("cancion2").innerHTML = datos.canciones[7].nombre;
    document.getElementById("audio2").innerHTML = '<audio src="canciones/' + datos.canciones[7].ruta +'"class="align-self-center" controls> </audio>';
    document.getElementById("cancion3").innerHTML = datos.canciones[6].nombre;
    document.getElementById("audio3").innerHTML = '<audio src="canciones/' + datos.canciones[6].ruta +'"class="align-self-center" controls> </audio>';
};
peticion.send();