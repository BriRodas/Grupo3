var usuarios = [

];

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
  imc = parseFloat(imc0.toFixed(1));
  console.log(filter, edad, peso, talla, imc);

  var clasif;

  if (imc < 18.5){
		clasif = "Delgado";
	} else if (imc > 18.6 && imc < 24.9){
		clasif = "Normal";
	} else if (imc > 25 && imc < 29.9){
		clasif = "Sobrepeso";
	} else if (imc > 30){
		clasif = "Obesidad";
	}

  var recomendacionImc;

	if (clasif === "Delgado"){
		recomendacionImc = "Trata de comer más comida con grasas buenas. Ayuda mucho que comas tu comida favorita";

	} else if (clasif === "Normal"){
		recomendacionImc = "¡Sigue así! Vas por muy buen camino";

	} else if (clasif === "Sobrepeso"){
		recomendacionImc = "Come frutas y verduras. Crea una rutina de ejercicio en donde incluyas ejercitar todas las partes del cuerpo y no solo te concentres en un solo lugar.";

	} else if (clasif === "Obesidad"){
		recomendacionImc = "No comas tantas grasas saturadas. Come frutas y verduras. Trata de comer con moderación sin llegar al abuso. Haz ejercicio hasta donde tu cuerpo lo permita, cuando sientas que puedes avanzar ¡hazlo! ¡Puedes lograr todo lo que te propongas!";
	}

  document.getElementById("imcobtenido").value = imc;
  document.getElementById("clasificacionobtenido").value = clasif;
  document.getElementById("recomendacionobtenido").value = recomendacionImc;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(dibujarGraficoTorta);
  
function generarData(){
  let tablaDatos = new google.visualization.DataTable();
  tablaDatos.addColumn('string','clasificación');
  tablaDatos.addColumn('number','cantidad');

  cantidad = usuarios.length

  // Bajo, Normal, Sobrepeso, Obesidad;
  tablaDatos.addRows([
    ['Bajo', 10],
    ['Normal', 50],
    ['Sobrepeso', 120],
    ['Obesidad', 20]
  ]);
  return tablaDatos;
}

function dibujarGraficoTorta(){
  // Cargar
  let data = generarData();
  var opciones = {
    title: 'Clasificación',
  };
  // Llamar el objeto del grafico
  let grafico = new google.visualization.PieChart(document.getElementById("contenedor_grafico"));
  grafico.draw(data,opciones);
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
