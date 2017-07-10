var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = 150;
var yLobo = 100;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverLobo(e)
{
	var movimiento = 64;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}

var fondo =
{
	url: "tile.png",
	cargarOK: false
};

var lobo =
{
	url: "lobo.png",
	cargarOK: false
};

var vaca =
{
	url: "vaca.png",
	cargarOK: false
};

var pollo =
{
	url: "pollo.png",
	cargarOK: false
};

var cerdo =
{
	url: "cerdo.png",
	cargarOK: false
};

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarLobo()
{
	lobo.cargarOK = true;
	dibujar();
}

function cargarFondo()
{
	fondo.cargarOK = true;
	dibujar();
}

function cargarPollo()
{
	pollo.cargarOK = true;
	mantenerPosicion();
}

function cargarCerdo()
{
	cerdo.cargarOK = true;
	mantenerPosicion();
}

function cargarVaca()
{
	vaca.cargarOK = true;
	mantenerPosicion();
}

function mantenerPosicion()
{
	if(vaca.cargarOK)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xVaca[i] = x;
			yVaca[i] = y; 		
		}
	}
	if(cerdo.cargarOK)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xCerdo[i] = x;
			yCerdo[i] = y; 		
		}
	}
	if(pollo.cargarOK)
	{
		var cantidad = aleatorio(1, 10);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y; 		
		}
	}
	dibujar();
}

function dibujar()
{
	if(fondo.cargarOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargarOK)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);		
		}
	}
	if(cerdo.cargarOK)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);		
		}
	}
	if(pollo.cargarOK)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);		
		}
	}
	if(lobo.cargarOK)
	{
		papel.drawImage(lobo.imagen, xLobo, yLobo)
	}
}

function aleatorio(min, max)
{
	var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}
