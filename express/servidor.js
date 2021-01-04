var cafecito = require ("express");
var aplicacion = cafecito();

aplicacion.get("/",inicio);

function inicio(peticion , resultado)
{
	resultado.send("Este es el home");
}

aplicacion.listen(8989); 
