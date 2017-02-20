page('/', index);
page('/mensaje', obtenerCuaderno);
page();

function index(){
	alert('index');
}

function obtenerCuaderno(){
	$('#contenedor').load('includes/mensaje.html');
}