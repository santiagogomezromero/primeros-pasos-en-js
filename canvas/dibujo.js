var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");   
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho= d.width;
var lienzo = d.getContext("2d");

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()
{
	
	var lineas= parseInt(texto.value); 
	var xi,yi,xf,yf;
	var espacio= ancho / lineas;

	for(l = 0; l < lineas; l++)
	{
		yi = espacio * l;
		xf = espacio * (l + 1); 
		dibujarlinea("#AAF",0,yi,xf,300);
		console.log("linea " + l);
	}

	dibujarlinea("#AFA",1,1,1,300);
	dibujarlinea("#AFA",1,299,299,299);

	for(l = 0; l < lineas; l++)
	{
		xi = espacio * l;
		yf = espacio * (l + 1); 
		dibujarlinea("#AAF",xi,0,300,yf);
		console.log("linea " + l);
	}

}