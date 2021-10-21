var usuarios = [];

const handleClickPush = () => {
  usuarios.push({
    cedula: parseInt(document.getElementById("cedula").value),
    apellido: document.getElementById("apellido").value,
    nombre: document.getElementById("nombre").value,
    edad: parseInt(document.getElementById("edad").value),
    peso: parseFloat(document.getElementById("peso").value),
    talla: parseFloat(document.getElementById("talla").value),
  });
  console.log(usuarios);
};

const handleClickResetForm = () => {
  document.getElementById("cedula").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("talla").value = "";
};

const handleActivate = () => {
  var y = document.getElementById("body");
  var x = document.getElementById("bodyDos");
  x.style.display === "none"
    ? (x.style.display = "flex") && (y.style.display = "none")
    : (x.style.display = "none");
};

function obtenerdatos() {
  var identificacion = parseInt(
    document.getElementById("identificacion").value
  );
  var filter = usuarios.filter((usuario) => usuario.cedula === identificacion);
  edad = parseInt(filter[0].edad);
  peso = parseFloat(filter[0].peso);
  talla = parseFloat(filter[0].talla);
  imc0 = peso / talla ** 2;
  imc = parseFloat(imc0.toFixed(2));
  console.log(filter, edad, peso, talla, imc);
  document.getElementById("imcobtenido").value = imc;
}

// function obtenerdatos() {
// 	var id = document.getElementById(identificacion).value;
// 	var cedula = document.getElementById("cedula").value;
// 	var apellido = document.getElementById("apellido").value;
// 	var nombre = document.getElementById("nombre").value;
// 	var edad = document.getElementById("edad").value;
// 	var peso = document.getElementById("peso").value;
// 	var talla = document.getElementById("talla").value;

// 	edad1 = parseInt(edad);
// 	a = parseFloat(peso);
// 	b = parseFloat(talla);
// 	c = a / b ** 2;
// 	c1 = parseFloat(c);

// 	var clasif;
// 	var cont_del = 0;
// 	var cont_normal = 0;
// 	var cont_sobrepeso = 0;
// 	var cont_obesidad = 0;

// 	cont_obesidad1 = parseInt(cont_obesidad);

// 	if (c1 < 18.5) {
// 	  clasif = "Delgado";
// 	  cont_del++;
// 	}
// 	if (c1 > 18.6 && c < 24.9) {
// 	  clasif = "Normal";
// 	  cont_normal++;
// 	}
// 	if (c1 > 25 && c < 29.9) {
// 	  clasif = "Sobrepeso";
// 	  cont_sobrepeso++;
// 	}
// 	if (c1 > 30) {
// 	  clasif = "Obesidad";
// 	  cont_obesidad1++;
// 	}

// 	document.form.cedulaobtenido.value = cedula;
// 	document.form.apellidoobtenido.value = apellido;
// 	document.form.nombreobtenido.value = nombre;
// 	document.form.edadobtenido.value = edad1;
// 	document.form.pesoobtenido.value = a;
// 	document.form.tallaobtenido.value = b;
// 	document.form.imcobtenido.value = c;
// 	document.hola.contadort.value = cont_obesidad1;
//   }
