function obtenerdatos(){
	var cedula = document.getElementById("cedula").value;
	var apellido = document.getElementById("apellido").value;
	var nombre = document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var peso = document.getElementById("peso").value;
	var talla = document.getElementById("talla").value;

	edad1 = parseInt(edad);

	a = parseFloat(peso);

	b = parseFloat(talla);

	c = a / (b**2);

	document.form.cedulaobtenido.value = cedula;
	document.form.apellidoobtenido.value = apellido;
	document.form.nombreobtenido.value = nombre;
	document.form.edadobtenido.value = edad1;
	document.form.pesoobtenido.value = a;
	document.form.tallaobtenido.value = b;
	document.form.imcobtenido.value = c;
}

function boton(){
	alert("Hola");
}