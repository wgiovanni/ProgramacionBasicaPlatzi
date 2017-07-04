//document.addEventListener("keydown", dibujarTeclado); //para que detecte los eventos de las teclas sin soltar las teclas
document.addEventListener("keyup", dibujarTeclado); //para detectar cuando suelta la tecla

function dibujarTeclado(evento.keyCode)
{
	console.log("Tecla oprimida");

}