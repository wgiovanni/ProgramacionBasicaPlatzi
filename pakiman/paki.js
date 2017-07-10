var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//console.log(coleccion);

/*pokacho.mostrar();
cauchin.mostar();
tocinauro.mostrar();*/
//ciclo especial que recorre el arreglo hasta el final
//in itera en el indice y el off en ocasiones, itera sobre el objeto
/*for(p in coleccion)
{

}*/
/*for(var p in coleccion)
{

}*/
for(var p of coleccion)
{
	p.mostrar();
}

