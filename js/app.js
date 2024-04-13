$(document).ready(function(){ verificar()
    //
})

function verificar(){
    $.get("http://127.0.0.1:5500/datos.json" , function(datos){
        $.each(datos , function(obj,index){
            var primera=0;
            var ruta_primera="";
            var nombre_primera="";

            var segunda=0;
            var ruta_segunda="";
            var nombre_segunda="";

            var tercera=0;
            var ruta_tercera="";
            var nombre_tercera="";

            for( var sec of index){
                var ruta_audio=(("canciones/")+sec.ruta);
                var nombre_musica=(sec.nombre);
                var reproducciones_can=(sec.reproducciones);
                
                if(reproducciones_can>primera){
                    primera=reproducciones_can;
                    ruta_primera=ruta_audio;
                    nombre_primera=nombre_musica;
                
                }

                if(reproducciones_can>segunda && reproducciones_can<primera){
                    segunda=reproducciones_can;
                    ruta_segunda=ruta_audio;
                    nombre_segunda=nombre_musica;
                }

                if(reproducciones_can>tercera && reproducciones_can<segunda){
                    tercera=reproducciones_can;
                    ruta_tercera=ruta_audio;
                    nombre_tercera=nombre_musica;
                }
            }

            var agregar=document.getElementById("Agrego");
            var crear=document.createElement("tr");
            var crear_1=document.createElement("td");
            crear_1.setAttribute("class", "table-border-dark p-4 m-auto border-dark  d-none d-md-block ");
            crear_1.innerText=(nombre_primera);
            var crear_2=document.createElement("td");
            crear_2.setAttribute("class", "table-border-dark m-auto  border-bottom border-dark");
            var crear_3=document.createElement("audio");
            crear_3.setAttribute("src" , ruta_primera);
            crear_3.setAttribute("controls" , "");

            crear.appendChild(crear_1);
            crear.appendChild(crear_2);
            crear_2.appendChild(crear_3);
            agregar.appendChild(crear);

            var crear=document.createElement("tr");
            var crear_1=document.createElement("td");
            crear_1.setAttribute("class", "table-border-dark p-4 m-auto border-dark  d-none d-md-block ");
            crear_1.innerText=(nombre_segunda);
            var crear_2=document.createElement("td");
            crear_2.setAttribute("class", "table-border-dark m-auto  border-bottom border-dark");
            var crear_3=document.createElement("audio");
            crear_3.setAttribute("src" , ruta_segunda);
            crear_3.setAttribute("controls" , "");

            crear.appendChild(crear_1);
            crear.appendChild(crear_2);
            crear_2.appendChild(crear_3);
            agregar.appendChild(crear);


            var crear=document.createElement("tr");
            var crear_1=document.createElement("td");
            crear_1.setAttribute("class", "table-border-dark p-4 m-auto border-dark  d-none d-md-block  ");
            crear_1.innerText=(nombre_tercera);
            var crear_2=document.createElement("td");
            crear_2.setAttribute("class", "table-border-dark m-auto  ");
            var crear_3=document.createElement("audio");
            crear_3.setAttribute("src" , ruta_tercera);
            crear_3.setAttribute("controls" , "");

            crear.appendChild(crear_1);
            crear.appendChild(crear_2);
            crear_2.appendChild(crear_3);
            agregar.appendChild(crear);
        })
    })
} 

/*
desde el HTML puedes utilizar el id="Agrego" para referenciar
*/
