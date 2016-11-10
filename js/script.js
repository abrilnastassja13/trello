function aparecer() {
	var caja = document.getElementById('oculto');
	var botoncin = document.createElement('button');
	var cuadroTexto = document.createElement('input');
	var cajaDos = document.createElement('div');
	var añadir = document.createTextNode('añadir');

	botoncin.setAttribute('class', 'primer-boton');
	cuadroTexto.setAttribute('type', 'text');
	cuadroTexto.setAttribute('placeholder', 'Ingresa tu tarea');
	cajaDos.setAttribute('id', 'dentro')

	cajaDos.appendChild(botoncin);
	cajaDos.appendChild(cuadroTexto);
	caja.appendChild(cajaDos);
	botoncin.appendChild(añadir);
	

}