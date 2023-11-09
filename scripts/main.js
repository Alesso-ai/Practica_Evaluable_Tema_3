/*
        Alejandro Ruiz Prieto
        Git-Hub:https://github.com/Alesso-ai/Practica_Evaluable_Tema_3.git 
*/

document.addEventListener("DOMContentLoaded", function () {
  let nombre = "";
  let apellidos = "";
  let dia = "";
  let mes = "";
  let año = "";

  while (nombre === "") {
    nombre = prompt("Ingrese su nombre");
  }

  while (apellidos === "") {
    apellidos = prompt("Ingrese su apellido");
  }

  while (dia === "" || dia < 1 || dia > 31) {
    dia = prompt("Ingrese su dia de nacimiento");
  }

  while (mes === "" || mes < 1 || mes > 12) {
    mes = prompt("Ingrese su mes de nacimiento");
  }

  while (año === "" || año > new Date().getFullYear()) {
    año = prompt("Ingrese su año de nacimiento");
  }

  const saludar = (nombre) => {
    document.write(`<p>¡Buenos días, ${nombre}!</p>`);
  };

  const longitud = (nombre,apellidos)=>{
    document.write(`<p>Tu nombre completo (nombre y apellidos) tiene ${nombre.length + apellidos.length} caracteres, incluyendo espacios.</p>`);

  };



  const primeraLetras = (nombre) => {
    document.write(`<p>La primera 'A' de tu nombre está en la posicion ${nombre.toLowerCase().indexOf('a') + 1} </p>`);
  };

  const ultimaLetras = () => {};

  const tresLetrasMenos = () => {};

  const nombreMayus = () => {};

  const mostrarEdad = () => {};

  const estaciones = () => {};

  const coseno = () => {};

  const numeroMayores = () => {};

  

  document.open();
  document.write("<h1>Prática 3 - DWEC </h1> <hr>");
  saludar(nombre);
  longitud(nombre,apellidos);
  primeraLetras(nombre);
  document.close();

 
});
