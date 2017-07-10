//instalar nodejs
//npm install express
//node nombre.js
//127.0.0.1:8989
var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", inicio);

function inicio(peticion, resultado)
{
	resultado.send("Es es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
	resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);
