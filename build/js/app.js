$(document).foundation();
$(document).ready(function() {

  // ----------------------------------------
  // Cookie Bar
  // ----------------------------------------
  $.cookieBar({
   message: "Cliccando su OK, l’utente accetta l’utilizzo dei cookie di terze parti. Per maggiori informazioni, anche in ordine alla disattivazione, è possibile consultare l'<a class='cookie-link-2' href='/cookie.html'>informativa cookie completa</a>.",
   acceptText: 'Ok',
   fixed: true,
   bottom: true
  });

  // ----------------------------------------
  // Magnific Popup Gallery
  // ----------------------------------------
  $('.container__gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled:true,

      preload: [1,3],

      navigateByImgClick: true,

      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    }
  });

	// ----------------------------------------
  // Sticky Header
  // ----------------------------------------
  $(".header__site").sticky({topSpacing:0});

 	// ----------------------------------------
  // Toggle Header Menu Mobile
  // ----------------------------------------
  $('.mobile__menu').on('click', function() {
  	$('.entry__menu').toggleClass('show');
  	$('.mobile__menu').toggleClass('shrink');
  });

  // ----------------------------------------
  // Pop up share
  // ----------------------------------------
  $('.pop').click(function(event){
    event.preventDefault();
    // console.log('clicked');

    newwindow=window.open(jQuery(this).attr('href'),'name','height=450,width=550');
    if (window.focus) {newwindow.focus()}
      return false;
  });

  // ----------------------------------------
  // Google Maps
  // ----------------------------------------
  $(function() {
    function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng(41.906300,12.480809),
        zoom: 12,
        scrollwheel: false,
        styles: [
          {
              "featureType": "administrative.country",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "simplified"
                  },
                  {
                      "hue": "#ff0000"
                  }
              ]
          }
      ]
      };
      var map = new google.maps.Map(document.getElementById("map-ris34"),
        mapOptions);

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.906300,12.480809),
        map: map
      });
    }
    // google.maps.event.addDomListener(window, 'load', initialize);

    if($('#cookie-bar').length) {
      $('.cb-enable').on('click', initialize);
    } else {
      initialize();
    }

  });

  $(".language a").click(function(event){

    event.preventDefault();

    var newLang = $(this).data("lang");

    var urlPieces = window.location.pathname.split( '/' );

    var langs = ['eng', 'ita', 'jap', 'rus'];

    if(newLang == 'ita'){

        if(urlPieces.length == 2 && !langs.includes(urlPieces[1])){
            window.location.href = '/' + urlPieces[1];
        }

        if(urlPieces.length == 3 && !langs.includes(urlPieces[2]) &&  langs.includes(urlPieces[1])){
            window.location.href = '/' + urlPieces[2];
        }

    }else{
        if(urlPieces.length == 2 && !langs.includes(urlPieces[1])){
            window.location.href = '/' + newLang + '/' + urlPieces[1];
        }

        if(urlPieces.length == 3 && !langs.includes(urlPieces[2]) &&  langs.includes(urlPieces[1])){
            window.location.href = '/' + newLang + '/' + urlPieces[2];
        }
    }

    console.log(newLang);
    console.log(urlPieces);
    console.log(langs);
    console.log(urlPieces.length);
    console.log(langs.includes(urlPieces[1]));



  });

});



