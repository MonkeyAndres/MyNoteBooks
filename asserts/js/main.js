page('/MyNoteBooks', index);
page('/MyNoteBooks/mensaje', obtenerCuaderno);
page();

function index(){
	alert('index');
}

function obtenerCuaderno(){
	$('#contenedor').load('includes/mensaje.html');
}