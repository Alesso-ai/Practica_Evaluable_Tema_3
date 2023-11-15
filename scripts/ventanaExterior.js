if (window.opener && !window.opener.closed) {
  nuevaVentana = window.opener.nuevaVentana;
}

const urlActual = window.location.href;
const protocolo = window.location.protocol;

if (!nuevaVentana) {
  nuevaVentana = window.open("", "", "resizable=no,width=800,height=600");
}
nuevaVentana.document.write(`<h1>Ejemplo de ventana Nueva</h1>`)
nuevaVentana.document.write(`<p>URL Completa: ${urlActual}</p>`);
nuevaVentana.document.write(`<p>Protocolo: ${protocolo}</p>`);
nuevaVentana.document.write(
  `<iframe src="https://tuniversformacion.es/" width="800" height="600"></iframe>`
);
