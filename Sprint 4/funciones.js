function obtenerdatos() {
		var cedula = document.getElementById("cedula").value;
		var apellido = document.getElementById("apellido").value;
		var nombre = document.getElementById("nombre").value;
		var edad = document.getElementById("edad").value;
		var peso = document.getElementById("peso").value;
		var talla = document.getElementById("talla").value;

		edad1 = parseInt(edad);

		a = parseFloat(peso);

		b = parseFloat(talla);

		c = a / (b ** 2);

		c1 = parseFloat(c);

		var clasif;

		var cont_del = 0;
		var cont_normal = 0;
		var cont_sobrepeso = 0;
		var cont_obesidad = 0;

		cont_obesidad1 = parseInt(cont_obesidad);

		if (c1 < 18.5){
			clasif = "Delgado";
			cont_del++;
		}
		if (c1 > 18.6 && c < 24.9){
			clasif = "Normal";
			cont_normal++;
		}
		if (c1 > 25 && c < 29.9){
			clasif = "Sobrepeso";
			cont_sobrepeso++;
		}
		if (c1 > 30){
			clasif = "Obesidad";
			cont_obesidad1++;
		}
	
	document.form.cedulaobtenido.value = cedula;
	document.form.apellidoobtenido.value = apellido;
	document.form.nombreobtenido.value = nombre;
	document.form.edadobtenido.value = edad1;
	document.form.pesoobtenido.value = a;
	document.form.tallaobtenido.value = b;
	document.form.imcobtenido.value = c;
	document.hola.contadort.value = cont_obesidad1;
	
}

const handleClickReset = () => {
	document.form.cedulaobtenido.value = '';
	document.form.apellidoobtenido.value = '';
	document.form.nombreobtenido.value = '';
	document.form.edadobtenido.value = '';
	document.form.pesoobtenido.value = '';
	document.form.tallaobtenido.value = '';
	document.form.imcobtenido.value = '';
}

function boton() {
	alert("Hola Seño");
}

var objeto = [
	{
		cedula: "",
		apellido: "",
		nombre: "",
		edad: "",
		a: "",
		b: "",
		c: "",
		clasif: ""
	}
]