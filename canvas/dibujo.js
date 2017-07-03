var d = document.getElementById("dibujito"); //para obtener el id del canvas
var lienzo = d.getContext("2d"); //Es un funcion del objeto canvas que permite obtener el area donde voy a dibujar

//lienzo.beginPath(); //arrancar un trazo
//lienzo.strokeStyle = "blue"; //atributo para la linea (color)
//lienzo.moveTo(0,0); //mover el lapiz de donde va a arrancar la linea
//lienzo.lineTo(200,200); //funcion para trazar una linea
//lienzo.moveTo(200,0);
//lienzo.lineTo(0,200);
//lienzo.stroke(); //dibuja la linea
//lienzo.closePath();

var lineas = 30;
var l = 0;
var xi, xf, yi;
var colorcito = "red";

//Dibujar la lineas de los bordes
dibujarLinea(colorcito, 0, 0, 0, 300);
dibujarLinea(colorcito, 0, 300, 300, 300);
dibujarLinea(colorcito, 0, 0, 300, 0);
dibujarLinea(colorcito, 300, 0, 300, 300);


while(l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	xi = 290 - (l * 10);
	dibujarLinea(colorcito, 0, yi, xf, 300); //Parte inferior derecha
	dibujarLinea(colorcito, xf, 0, 300, yi); //Parte superior izquierda
	dibujarLinea(colorcito, xi, 300, 300, yi); //Parte inferior izquierda
	dibujarLinea(colorcito, xi, 0, 0, yi); //Parte superior derecha
	l++;
}
/*
for(l = 0;l < lineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	xi = 290 - (l * 10);
	dibujarLinea(colorcito, 0, yi, xf, 300); //Parte inferior derecha
	dibujarLinea(colorcito, xf, 0, 300, yi); //Parte superior izquierda
	dibujarLinea(colorcito, xi, 300, 300, yi); //Parte inferior izquierda
	dibujarLinea(colorcito, xi, 0, 0, yi); //Parte superior derecha

}*/
/*do
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	xi = 290 - (l * 10);
	dibujarLinea(colorcito, 0, yi, xf, 300); //Parte inferior derecha
	dibujarLinea(colorcito, xf, 0, 300, yi); //Parte superior izquierda
	dibujarLinea(colorcito, xi, 300, 300, yi); //Parte inferior izquierda
	dibujarLinea(colorcito, xi, 0, 0, yi); //Parte superior derecha
	l++;
}while(l < lineas);*/




function dibujarLinea(color, xInicial, yInicial, xFinal, YFinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color; 
	lienzo.moveTo(xInicial,yInicial); 
	lienzo.lineTo(xFinal,YFinal); 
	lienzo.stroke(); 
	lienzo.closePath();
}

