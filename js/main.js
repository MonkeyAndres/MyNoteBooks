"use strict";

//Evento Hover Cuadernos
$("article").mouseenter(activar);
$("article>p").mouseleave(desactivar);

function activar(event){
	var elemento = $(event.target).next();
	elemento.css("bottom", "0");
}

function desactivar(event){
	var elemento = $(event.target);
	elemento.css("bottom", "-100%");
}
