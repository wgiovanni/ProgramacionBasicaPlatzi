document.addEventListener("mousedown", presionarMouse); //Cuando presiona el mouse
document.addEventListener("mouseup", soltarMouse); //Cuando suelta el mouse
document.addEventListener("mousemove", moverMouse); //Cuando mueve el mouse

var area = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");
var x;
var y;
var colorLinea = "green";
var estado = false; //estado del click

//Dibujar borde
dibujarLinea(colorLinea, 0, 0, 300, 0, papel);
dibujarLinea(colorLinea, 300, 0, 300, 300, papel);
dibujarLinea(colorLinea, 300, 300, 0, 300, papel);
dibujarLinea(colorLinea, 0, 300, 0, 0, papel);

//Dibujar linea
function dibujarLinea(color, xInicial, yInicial, xFinal, YFinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color; 
	lienzo.lineWidth = 3;
	lienzo.moveTo(xInicial,yInicial); 
	lienzo.lineTo(xFinal,YFinal); 
	lienzo.stroke(); 
	lienzo.closePath();
}
//funcion para mouseup
function presionarMouse(evento)
{
	x = evento.offsetX;
	y = evento.offsetY;
	estado = true;
}
//funcion para mousedown
function soltarMouse(evento)
{
	x = evento.offsetX;
	y = evento.offsetY;
	estado = false;
}
//funcion para mousemove
function moverMouse(evento)
{
	if(estado)
	{
		dibujarLinea(colorLinea, x, y, evento.offsetX, evento.offsetY, papel);
  	}
  	x = evento.offsetX;
  	y = evento.offsetY;
}
