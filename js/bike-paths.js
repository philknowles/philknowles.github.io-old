//State Parks
function initMap() {

var locations = [
    //State Trails
  ['<b>Arrowhead State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 48.1635129, -92.8009661, 1],
  ['<b>Blazing Star State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.6424434, -93.3247082, 1],
  ['<b>Brown&#39;s Creek State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.0716605, -92.8545651, 1],
  ['<b>Casey Jones State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.9972255, -96.2089116, 1],
  ['<b>Central Lakes State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 46.0197834, -95.7020953, 1],
  ['<b>C.J. Ramstad/North Shore State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 47.0262774, -91.9064981, 1],
  ['<b>Cuyuna Lakes State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 46.4898118, -94.0028644, 1],
  ['<b>Douglas State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.1274279, -92.5908243, 1],
  ['<b>Gateway State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.0341516, -92.9506245, 1],
  ['<b>Gitchi-Gami State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 47.5690248, -90.8494231, 1],
  ['<b>Glacial Lakes State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.3026902, -94.9549562, 1],
  ['<b>Goodhue Pioneer State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.5676739, -92.5767779, 1],
  ['<b>Great River Ridge State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.1144347, -92.2659313, 1],
  ['<b>Harmony-Preston Valley State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.7162357, -92.0224661, 1],
  ['<b>Heartland State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 47.1521803, -94.6424342, 1],
  ['<b>Luce Line State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.975739, -93.7651628, 1],
  ['<b>Matthew Lourey State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.9462889, -92.6082205, 1],
  ['<b>Minnesota Valley State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.6640468, -93.7101632, 1],
  ['<b>Paul Bunyan State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 46.6955174, -94.374225, 1],
  ['<b>Root River State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.7677423, -91.876117, 1],
  ['<b>Sakatah Singing Hills State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.2026803, -93.6280076, 1],
  ['<b>Shooting Star State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.5829572, -92.7865004, 1],
  ['<b>Taconite State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 47.840773, -92.504732, 1],
  ['<b>Willard Munger State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 46.4513926, -92.7702443, 1],

  //Bike Trails
  ['<b>Afton to Lakeland Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9324076, -92.7730204, 1],
  ['<b>Beaver Island Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.5351652, -94.1567578, 1],
  ['<b>Big Rivers Regional Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.8882063, -93.1605312, 1],
  ['<b>Blazing Star State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.6424434, -93.3247082, 1],
  ['<b>Bottineau Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 48.8206755, -100.4360332, 1],
  ['<b>Brown&#39;s Creek State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.0716605, -92.8545651, 1],
  ['<b>Bruce Vento Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.0011339, -93.0464195, 1],
  ['<b>Cannon Valley Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.5157478, -92.8928617, 1],
  ['<b>Casey Jones State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.9972255, -96.2089116, 1],
  ['<b>Cedar Lake LRT Regional Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9448757, -93.3384343, 1],
  ['<b>Central Lakes State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 46.0197834, -95.7020953, 1],
  ['<b>Cuyuna Lakes State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 46.4898118, -94.0028644, 1],
  ['<b>Dairyland Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.6081417, -94.4752547, 1],
  ['<b>Dakota Rail Regional Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9067529, -93.7388031, 1],
  ['<b>Dinkytown Greenway</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9801593, -93.2302561, 1],
  ['<b>Douglas State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.1274279, -92.5908243, 1],
  ['<b>Gateway State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.0341516, -92.9506245, 1],
  ['<b>Gitchi-Gami State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 47.5690248, -90.8494231, 1]
  ['<b>Hardwood Creek Regional Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.2250149, -92.9843559, 1],
  ['<b>Kenilworth Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9612249, -93.3168219, 1],
  ['<b>Lake Minnetonka LRT Regional Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9313367, -93.4937377, 1],
  ['<b>Lake Wobegon Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.6696501, -94.7371927, 1],
  ['<b>Longyear Lake Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 47.4887835, -92.8822406, 1],
  ['<b>Mesabi Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 47.4622788, -92.5189665, 1],
  ['<b>Midtown Greenway (MN)</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9503469, -93.2711782, 1],
  ['<b>Mill Towns Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.702156, -93.4034776, 1],
  ['<b>Minneapolis Diagonal Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.0075272, -93.2264252, 1],
  ['<b>Minnehaha Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9506014, -93.4262652, 1],
  ['<b>Minnesota River Bluffs LRT Regional Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.8607429, -93.4788134, 1],
  ['<b>Minnesota River State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.6640468, -93.7101632, 1],
  ['<b>Minnesota Valley State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.6640468, -93.7101632, 1],
  ['<b>Mississippi River Regional Trail (Dakota County)</b><br><br><a target="_blank" href="">Visit Website</a>', 45.0714905, -93.2791876, 1],
  ['<b>North Cedar Lake Regional Trail/Cedar Lake Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9448757, -93.3384343, 1],
  ['<b>Paul Bunyan State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 46.6955174, -94.374225, 1],
  ['<b>Rainy Lake Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 48.5031851, -93.3010612, 1],
  ['<b>Red Jacket Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.1309188, -94.0434851, 1],
  ['<b>River Bend Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.4501717, -93.4501742, 1],
  ['<b>Rocori Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.4499745, -94.5207989, 1],
  ['<b>Root River State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.7677423, -91.876117, 1],
  ['<b>Sakatah Singing Hills State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.2026803, -93.6280076, 1],
  ['<b>Shooting Star State Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 43.5829572, -92.7865004, 1],
  ['<b>Soo Line Recreational Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.9330351, -94.4568454, 1],
  ['<b>St. Anthony Falls Heritage Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.982202, -93.2642574, 1],
  ['<b>St. Cloud River Walk</b><br><br><a target="_blank" href="">Visit Website</a>', 45.5528361, -94.1495827, 1],
  ['<b>Straight River Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 44.2787926, -93.271239, 1],
  ['<b>Sunrise Prairie Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.4052425, -92.9885996, 1],
  ['<b>Swedish Immigrant Trail</b><br><br><a target="_blank" href="">Visit Website</a>', 45.3789272, -92.8824291, 1],
  ['<b>West River Parkway</b><br><br><a target="_blank" href="">Visit Website</a>', 44.9534493, -93.2143633, 1],
  ['<b>Willard Munger State Trail (Alex Laveau Memorial Trail)</b><br><br><a target="_blank" href="">Visit Website</a>', 46.4789152, -92.7286396, 1]
];

var mapDiv = document.getElementById('map');
var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(44.9423189, -93.3931678),
    zoom: 10
});
var bikeLayer = new google.maps.BicyclingLayer();
var iconBase = '/images/bike-icon.png';
var infowindow = new google.maps.InfoWindow();
var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: iconBase
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
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
            "color": "#000"
        },
        {
            "lightness": 20
        },
        {
            "visibility": "off"
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
        },
        {
            "visibility": "off"
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
        },
        {
            "visibility": "off"
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
        },
        {
            "visibility": "off"
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
            "lightness": 0,
        },
        {
            "visibility": "off"
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
            "weight": 0.3
        },
        {
            "lightness": 10
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
        },
        {
            "visibility": "off"
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

bikeLayer.setMap(map);
map.setOptions({ styles: styles });


}
