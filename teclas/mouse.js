area_de_dibujo.addEventListener("mousedown", capturaCoordenadas);
area_de_dibujo.addEventListener("mousemove", dibujarMouse);
area_de_dibujo.addEventListener("mouseup", dejarDibujo);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var rect = cuadrito.getBoundingClientRect(); //obtener el canvas con respecto a la pantalla
var x = 0;
var y = 0;
var dibujando = false;
var colorcito = "black";
var grosor = 1;

function dibujarlinea(xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = colorcito;
	lienzo.lineWidth = grosor;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function defColor (c)
{
	colorcito = c;
}

function defGrosor (g)
{
	grosor = g;
}

function capturaCoordenadas (dibujar) // captura coordenadas del evento del click
{
	x = dibujar.clientX - rect.left;// resta los pixeles de pantalla para solo queda con el canvas
	y = dibujar.clientY - rect.top;//posicion inical del dibujo
	dibujando =  true;	
}

function dibujarMouse(dibujar)
{
	if (dibujando==true)
	{
		dibujarlinea( x , y , dibujar.clientX - rect.left , dibujar.clientY - rect.top , papel);	
		x = dibujar.clientX - rect.left;
		y = dibujar.clientY - rect.top;
	}
	
}

function dejarDibujo(dibujar)
{
	if(dibujando==true)
	{
		dibujarlinea( x , y , dibujar.clientX - rect.left , dibujar.clientY - rect.top , papel);
		x = 0;
		y = 0;
		dibujando = false;
	}
}