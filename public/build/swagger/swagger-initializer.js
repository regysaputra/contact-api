/*
   let local = http://127.0.0.1:8000
   let production = https://contact-api-sigma.vercel.app
 */
window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">
  // the following lines will be replaced by docker/configurator, when it runs in a docker-container

  window.ui = SwaggerUIBundle({
    url: `https://contact-api-sigma.vercel.app/build/swagger/docs.yaml`,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
