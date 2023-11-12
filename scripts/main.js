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

  const longitud = (nombre, apellidos) => {
    document.write(
      `<p>Tu nombre completo (nombre y apellidos) tiene ${
        nombre.length + apellidos.length
      } caracteres, incluyendo espacios.</p>`
    );
  };

  const primeraLetras = (nombre) => {
    document.write(
      `<p>La primera 'A' de tu nombre está en la posicion ${
        nombre.toLowerCase().indexOf("a") + 1
      } .</p>`
    );
  };

  const ultimaLetras = (nombre) => {
    document.write(
      `<p>La ultima 'A' de tu nombre está en la posicion ${
        nombre.toLowerCase().lastIndexOf("a") + 1
      }. </p>`
    );
  };

  const tresLetrasMenos = (nombre, apellidos) => {
    document.write(
      `<p>Tu nombre menos las tres primeras letras es  ${nombre
        .toUpperCase()
        .slice(3)} ${apellidos.toUpperCase()}. </p>`
    );
  };

  const nombreMayus = (nombre, apellidos) => {
    document.write(
      `<p>Tu nombre en mayusculas es ${nombre.toUpperCase()} ${apellidos.toUpperCase()}.</p>`
    );
  };

  const mostrarEdad = (año) => {
    const añoActual = new Date().getFullYear();
    const edad = añoActual - año;
    document.write(`<p>Tu edad es de ${edad} años</p>`);
  };

  const estaciones = (dia, mes) => {
    if (
      (dia >= 21 && mes === 3) ||
      mes === 4 ||
      mes === 5 ||
      (dia <= 20 && mes === 6)
    ) {
      return "primavera";
    } else if (
      (dia >= 21 && mes === 6) ||
      mes === 7 ||
      mes === 8 ||
      (dia <= 22 && mes === 9)
    ) {
      return "verano";
    } else if (
      (dia >= 23 && mes === 9) ||
      mes === 10 ||
      mes === 11 ||
      (dia <= 20 && mes === 12)
    ) {
      return "otoño";
    } else if (
      (dia >= 21 && mes === 12) ||
      mes === 1 ||
      mes === 2 ||
      (dia <= 20 && mes === 3)
    ) {
      return "invierno";
    }
    
  };

  const coseno = () => {
    const grados = 180;
    const radianes = grados * (Math.PI / 180);
    return Math.cos(radianes);
  };

  const numeroMayores = () => {
    const numeros = [34, 67, 23, 75, 35, 19];
    const mayor = Math.max(...numeros);
    return mayor;
  };

  const random = () => {
    return Math.floor(Math.random() * 101);
    
  };

  document.open();
  document.write("<h1>Prática 3 - DWEC </h1> <hr>");
  saludar(nombre);
  longitud(nombre, apellidos);
  primeraLetras(nombre);
  ultimaLetras(nombre);
  tresLetrasMenos(nombre, apellidos);
  nombreMayus(nombre, apellidos);
  mostrarEdad(año);
  const resultadoCoseno = coseno();
  document.write(`<p>Naciste un feliz dia ${estaciones(parseInt(dia), parseInt(mes))} del año ${año} </p>`);
  document.write(`<p>El coseno de 180 grados es: ${resultadoCoseno}</p>`);
  const resultadoNumeroMayor = numeroMayores();
  document.write(`<p>El número mayor de [34, 67, 23, 75, 35, 19] es : ${resultadoNumeroMayor}</p>`);
  const resultadoRandom = random();
  document.write(`<p>El numero aleatorio entre 0 y 100 es: ${resultadoRandom}</p>`);
  document.close();

  function abrirVentana() {
    // Obtén la URL completa de la ventana actual
    const urlActual = window.location.href;
  
    // Obtén el protocolo utilizado
    const protocolo = window.location.protocol;
  
    // Especifica las propiedades de la nueva ventana
    const opcionesVentana = "width=800,height=600,resizable=no";
  
    // Abre la nueva ventana
    const nuevaVentana = window.open("https://tuniversformacion.es/", "_blank", opcionesVentana);
  
    // Muestra la URL completa y el protocolo en la nueva ventana
    nuevaVentana.document.write(`<p>URL Completa: ${urlActual}</p>`);
    nuevaVentana.document.write(`<p>Protocolo: ${protocolo}</p>`);
  
    // Abre un iframe en la nueva ventana con el contenido de la página web
    nuevaVentana.document.write(
      `<iframe src="${urlActual}" width="100%" height="80%"></iframe>`
    );
  }
  
  // Llama a la función para abrir la ventana
  abrirVentana();
  
  






});
