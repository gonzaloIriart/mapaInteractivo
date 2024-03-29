var mapa // Mapa que vamos a modificar
var cord1 = -38.005477;
var cord2 = -57.542611;
/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
posicionCentral = {lat: cord1,lng: cord2};
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 12
  });
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}

