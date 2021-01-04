var bancoCliente = document.getElementById("bancoliente");
var bc = bancocliente.value;
var cuentaCliente = true;
var saldoCliente = 2000;
var bancoDestino = document.getElementById("bancodestino");
var bd = bancodestino.value;
var cuentaDestino;
var h = document.getElementById("hora");
var hora = parseInt(h.value);
var v = document.getElementById("transferencia");
var valor = parseInt(v.value);	
console.log(valor);
var costoTransaccion = 100;
var transaccion = false;
var b = document.getElementById("enviar");
b.addEventListener("click" , transferir);
var valorTotal;

if(cuentaCliente)
{
	console.log ("Cliente verificado");
	if (saldoCliente > valor)
	{
		console.log("saldo suficiente");
		if(bc == bd)
		{
			costoTransaccion = 0;
			console.log("Bancos iguales");			
		}
		else
		{
			costoTransaccion = 100;
		}

		if ((hora >=9 && hora <=12) || (hora >=15 && hora <=20))
		{
			console.log("hora correcta");
			transaccion = true;
			if(transaccion)
			{
				console.log("transferir");
				transferir(costoTransaccion);
				resultado.innerHTML = "La transaccion fue realizada con exito y fue de: " + valor + " Su saldo actual es de: "
				+ saldoCliente;
			}
			else
			{
				resultado.innerHTML = "Transaccion denegada";
			}
			
		}

	}

} 


function transferir (costo)
{
	valorTotal = valor + costo;
	saldoCliente = saldoCliente - (valor + costo);
	cuentaDestino = valor;
}


	

