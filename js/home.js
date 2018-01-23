/* Al cargar la página iniciaremos... */

$(document).ready(function() {
  /* Se guardan los parámetros de data en array para iterar */
  var foodFrom = [{
      city: 'Campeche',
      key: 'CAMPECHE'
    },
    {
      city: 'Oaxaca',
      key: 'OAXACA'
    },
    {
      city: 'Puebla',
      key: 'PUEBLA'
    },
    {
      city: 'Yucatán',
      key: 'YUCATAN'
    },
  ];

  /* Se indica que los elementos de foodFrom sean recorridos
  para encontrar el lugar */
  $.each(foodFrom, function findPlace(i) {
    var keys = Object.keys(data[foodFrom[i].key]);
    // Se obtiene largo de arraey foodFrom
    foodFrom[i].number = keys.length;
  });

  /*Arreglo con nombre de ciudades (keys de foodFrom)*/
  function locationArray() {
    var where = [];
    $.each(foodFrom, function getKeys(i) {
      where.push(foodFrom[i].key);
    });
    //console.log(arr);
    return where;
  };
  /*Volveremos a usar la función posteriormente...*/
  var keys = locationArray();

  /*Encontraremos el lugar por el origen de la comida*/
  function findPlace() {
    var places = [];
    $.each(keys, function foodOrigin(i) {
      var showing = data[keys[i]];
      /*Le pedimos que muestre el resultado iterando en keys*/
      $.each(showing, function find(j) {
        places.push(showing[j].city);
      });
    });
    return places;
  }

  /* Imágenes de logo y respectivos módulos de información*/
  $.each(keys, function foodOrigin(i) {
    var showing = data[keys[i]];
    $.each(showing, function showPic(j) {
      var structure = '<div class = "logoImage gallery-padding col-xs-6 col-sm-3 col-lg-3" data-name="' + showing[j].restaurantName + '" data-adress="' + showing[j].adress + '"data-cost="' + showing[j].cost + '"data-phone="' + showing[j].phone + '"' + ' id="' + showing[j].city + '">' +
        '<div class="relPosition" data-toggle="modal" data-target="#modal"> <img class="showingLogo" src=" ' + showing[j].image + '"' + 'id="' + showing[j].city + '"' + '">' +
        ' <div class="mouseOpacity visibility-hidden"><p class="text-center msOver-text" > ' + showing[j].city + '</p> </div></div></div>';
      $('.photo-gallery').append(structure);
    });
  });

  /*Búsqueda con entrada de texto en input
  con evento en teclado (keyboard -keyup-)*/
  var inputSearch = $('.input-js');
  $(inputSearch).on('keyup', function() {
    var city = $(this).val().toLowerCase();
    $('.logoImage').hide();
    $('.logoImage').each(function() {
      if ($(this).attr('id').toLowerCase().indexOf(city) !== -1) {
        $(this).show();
      }
    });
  });

  /* Efecto Mouseover (relativo a contenedor) */
  $('.relPosition').on('mouseover', function() {
    /*Remover clase "esconder"*/
    $(this).children().last().removeClass('visibility-hidden');
  });
  /* Segunda aplicación retira estilo al contacto del mouse... (out)*/
  $('.relPosition').on('mouseout', function() {
    $(this).children().last().addClass('visibility-hidden');
  });

  /* Salida de data en modales */
  $('.relPosition').on('click', function() {
    var title = $('.modal-city-title');
    var restaurantName = $('.place-name-data');
    var adress = $('.adress-data');
    var phone = $('.phone-data');
    var cost = $('.cost-data');
    var keys = locationArray();

    /* Salida de data en texto dentro de los modales */
    $(title).text($(this).children().first().attr('id'));/* showing[j].city */
    $(restaurantName).text($(this).parent().data('name'));
    $(adress).text($(this).parent().data('adress'));
    $(cost).text($(this).parent().data('cost'));
    $(phone).text($(this).parent().data('phone'));
  });
});
