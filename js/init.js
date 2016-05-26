//Slider Hover


// Navigation
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 134) {
        $('.main-nav, .logo').addClass('active');
    } else {
        $('.main-nav, .logo').removeClass('active');
    }
});

//Hamburger Menu 
$('.hamburger').click(function () {
    $('.main-nav ul').animate({
        left: "+=50",
        height: "toggle"
    }, 500, function () {
    });
});

//Smooth Scrolling
$('.main-nav a, .logo a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});


//Resume
$('.resume').click(function() {
   $('.content-resume').slideToggle(); 
});

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//Job Placement
function initMap() {
var locations = [
  ['<b>Thomson Reuters - FindLaw</b><br>Front End Developer<br>610 Opperman Drive<br>Eagan, MN 55123<br>2000 - 2014<br>', 44.8246841, -93.1146937, 1],
  ['<b>Three Deep, Inc.</b><br>Senior Web Developer<br>289 5th St.<br>St. Paul, MN 55101<br>2014 - 2016', 44.9505788, -93.0878177, 2],
  ['<b>The Creative Group</b><br>Front End Consultant<br>Nicollet Mall<br/>Suite 2700<br/>Minneapolis, MN<br>2016 - Present', 44.9753855, -93.2762284, 2]
];
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(44.9753855, -93.2762284),
        zoom: 10,
        scrollwheel: false
    });
    var iconBase = '/images/icon-marker.png';
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: iconBase
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

        
    var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];

map.setOptions({styles: styles});
    
}
/*var locations = [
  ['<b>Thomson Reuters - FindLaw</b><br>Front End Developer<br>610 Opperman Drive<br>Eagan, MN 55123<br>2000 - 2014<br>', 44.8246841, -93.1146937, 1],
  ['<b>Three Deep, Inc.</b><br>Senior Web Developer<br>289 5th St.<br>St. Paul, MN 55101<br>2014 - 2016', 44.9505788, -93.0878177, 2],
  ['<b>The Creative Group</b><br>Front End Consultant<br>Nicollet Mall<br/>Suite 2700<br/>Minneapolis, MN<br>2016 - Present', 44.9753855, -93.2762284, 2],
//
// * Next point on map
// *   -Notice how the last number within the brackets incrementally increases from the prior marker
// *   -Use http://itouchmap.com/latlong.html to get Latitude and Longitude of a specific address
// *   -Follow the model below:
// *      ['<b>Name 3</b><br>Address Line 1<br>City, ST Zipcode<br>Phone: ###-###-####<br><a href="#" target="_blank">Link<a> of some sort.', ##.####, -##.####, #]
 //
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  // Zoom level of your map 
  center: new google.maps.LatLng(44.7969458, -93.2460677),
  // coordinates for the center of your map 
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}*/
