/*
        Alejandro Ruiz Prieto
        Git-Hub:https://github.com/Alesso-ai/Practica_Evaluable_Tema_3.git 
*/

document.addEventListener("DOMContentLoaded", function () {
  const nombre = prompt("Introduzca su nombre");
  const apellido = prompt("Introduzca sus Apellidos");
  const fechaNac = prompt("Introduzca su fecha de nacimiento DD/MM/YYYY");

  const solicitarNombre = () => {
    const nombre = prompt("Introduzca su nombre");
    if (nombre === null || nombre.trim() === "") {
      alert("Debe ingresar obligatoriamente su nombre");
      solicitarNombre();
    } else {
      saludar(nombre);
    }
  };

  const saludar = (nombre) => {
    const saludo = document.createElement("div");
    saludo.innerText = `¡Buenos días, ${nombre}!`;
    document.body.appendChild(saludo);
  };
  solicitarNombre();

  const nombreCompleto = () => {
    const completo = document.createElement("div");
    const nombreCompleto = nombre + " " + apellido;
    const totalCaracteres = nombreCompleto.length;
    completo.innerText = `Tu nombre completo (nombre y apellidos) tiene ${totalCaracteres} caracteres, incluyendo espacios.`;
    document.body.appendChild(completo);
  };

  nombreCompleto();

  const primeraLetras = () => {};

  const ultimaLetras = () => {};

  const tresLetrasMenos = () => {};

  const nombreMayus = () => {};

  const mostrarEdad = () => {};

  const estaciones = () => {};

  const coseno = () => {};

  const numeroMayores = () => {};

  const numeroRandom = () => {
    const numeroRandom = Math.floor(Math.random() * 101);
    
  };
  const numeroAleatorio = numeroRandom();
  numeroAleatorio();


  /* const abrirNuevaVentana = () => {
    window.open("https://www.tuniversformacion.es", "_blank");
  };

  document.getElementById("anchoVentana").textContent = window.innerWidth;

  document.getElementById("urlActual").textContent = window.location.href;

  const ventana = window.open('https://www.tuniversformacion.es' , 'width=800', 'height=600', 'resizable=no');

  */
});
