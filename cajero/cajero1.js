var imagenes = [];
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";

class Billete
{
	constructor (  v , c)
	{
		
		this.imagen = new Image();
		this.valor = v;
		this.cantidad = c;
		this.imagen.src = imagenes[this.valor];
	
	}
}

function entregarDinero()
{
	var t = document.getElementById("cantidad");
	dinero = parseInt(t.value);
	for ( var bi of caja)
	{
		if ( dinero > 0)
		{
			div = Math.floor( dinero / bi.valor);

			 if (div > bi.cantidad)
			 {
			 	papeles = bi.cantidad;
			 }

			 else
			 {
			 	papeles = div;
			 }

			 entregado.push( new Billete(bi.valor, papeles));
			 dinero = dinero - (bi.valor * papeles);
		}
	}
	break

	if (dinero > 0)
	{
		resultado.innerHTML = "Soy un cajero malo, muy malo y no puedo darte esa cantidad de dinero";
		console.log("Soy un cajero malo, muy malo y no puedo darte esa cantidad de dinero");
	}

	else 
	{
		for ( var e of entregado)
		{
			if( e.cantidad > 0)
			{
				for (var x = 0 ; x < e.cantidad ; x++)
				{					
					resultado.appendChild(e.imagen);			
					resultado.innerHTML += " " ;
					
				}
				
				dinero_en_caja = dinero_en_caja - 	(e.cantidad*e.valor);
			}
			
		}
		break

	}
	if ( dinero_en_caja <= 0)
	{
		total.innerHTML = "El cajero esta vacio";
	}
	else
	{
		total.innerHTML = "Dinero en la caja: " + dinero_en_caja;
	}

	resultado.innerHTML += "<br/>";
}

var caja = [];
var entregado = [];

caja.push( new Billete (50,20));
caja.push( new Billete (20,5));
caja.push( new Billete (10,20));

var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var total = document.getElementById("total");
var dinero_en_caja = 0;
for ( var p of caja)
{
	dinero_en_caja += p.valor * p.cantidad;
	console.log(dinero_en_caja);
}

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

