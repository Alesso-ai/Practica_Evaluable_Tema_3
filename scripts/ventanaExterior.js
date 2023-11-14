// Obtén la URL completa de la ventana actual
const urlActual = window.location.href;

// Obtén el protocolo utilizado
const protocolo = window.location.protocol;

// Muestra la URL completa y el protocolo en la nueva ventana
nuevaVentana.document.write(`<p>URL Completa: ${urlActual}</p>`);
nuevaVentana.document.write(`<p>Protocolo: ${protocolo}</p>`);

// Abre un iframe en la nueva ventana con el contenido de la página web
nuevaVentana.document.write(
  `<iframe src="https://tuniversformacion.es/" width="800" height="600"></iframe>`
);
