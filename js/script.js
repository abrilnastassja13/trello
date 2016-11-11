function aparecer() {
	var caja = document.getElementById('oculto');
	var botoncin = document.createElement('button');
	var cuadroTexto = document.createElement('input');
	var cajaDos = document.createElement('div');
	var añadir = document.createTextNode('añadir');
	var cajaTres = document.createElement('div');

	botoncin.setAttribute('class', 'primer-boton');
	cuadroTexto.setAttribute('type', 'text');
	cuadroTexto.setAttribute('placeholder', 'Ingresa tu tarea');
	cuadroTexto.setAttribute('id', 'cuadro')
	cajaDos.setAttribute('id', 'dentro');
	cajaTres.setAttribute('id', 'tarea');

	cajaDos.appendChild(botoncin);
	cajaDos.appendChild(cuadroTexto);
	caja.appendChild(cajaDos);
	botoncin.appendChild(añadir);
	caja.appendChild(cajaTres);

	var escribir = document.getElementsByClassName('primer-boton')[0];
	escribir.addEventListener('click', function() {
		var guardar = document.getElementById('cuadro').value;
		console.log(guardar);
		var textoTarjeta = document.createTextNode(guardar);
		var llamarTextoTarjeta = document.getElementById('dentro');
		var parrafo = document.createElement('span');
		
		parrafo.appendChild(textoTarjeta);
		llamarTextoTarjeta.appendChild(parrafo);
	
	});


}