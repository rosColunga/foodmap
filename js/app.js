/***Interactividad con jQuery de index.html***/

$(document).ready(function() {
  // Difuminado lento (3.5 segundos en desaparecer)
  $().ready(function() {
    $("#slow").fadeIn(5000).fadeOut(3500);
  });
  // Tiempo para cambiar localización 3s
  setTimeout(function() {
    // Direccionamiento a view: "home"
    window.location.href = 'views/home.html';}, 3000);
});
