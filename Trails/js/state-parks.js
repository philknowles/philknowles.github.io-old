//State Parks
function initMap() {
var locations = [
  ['<b>Afton State Park</b><br>6959 Peller Ave. S, Hastings, MN 55033<br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/afton/index.html">Visit Website</a>', 44.8467882, -92.7936829, 1],
  ['<b>Banning State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/banning/index.html">Visit Website</a>', 46.173424, -92.849708, 2],
  ['<b>Bear Head Lake State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/bear_head_lake/index.html">Visit Website</a>', 47.797511, -92.061751, 2],
  ['<b>Beaver Creek Valley State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/beaver_creek_valley/index.html">Visit Website</a>', 43.644508, -91.578956, 2],
  ['<b>Big Bog State Recreation Area</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/big_bog/index.html">Visit Website</a>', 48.170509, -94.511853, 2],
  ['<b>Big Stone Lake State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/big_stone_lake/index.html">Visit Website</a>', 45.386970, -96.534019, 2],
  ['<b>Blue Mounds State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/blue_mounds/index.html">Visit Website</a>', 43.716425, -96.190803, 2],
  ['<b>Buffalo River State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/buffalo_river/index.html">Visit Website</a>', 46.870738, -96.474772, 2],
  ['<b>Camden State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/camden/index.html">Visit Website</a>', 44.356157, -95.919778, 2],
  ['<b>Carley State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/carley/index.html">Visit Website</a>', 44.116956, -92.175728, 2],
  ['<b>Cascade River State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/cascade_river/index.html">Visit Website</a>', 47.711042, -90.510553, 2],
  ['<b>Charles A. Lindbergh State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/charles_a_lindbergh/index.html">Visit Website</a>', 45.959136, -94.388936, 2],
  ['<b>Crow Wing State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/crow_wing/index.html">Visit Website</a>', 46.272890, -94.332141, 2],
  ['<b>Cuyuna Country State Recreation Area</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/cuyuna_country/index.html">Visit Website</a>', 46.489808, -94.000676, 2],
  ['<b>Father Hennepin State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/father_hennepin/index.html">Visit Website</a>', 46.143761, -93.482663, 2],
  ['<b>Flandrau State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/flandrau/index.html">Visit Website</a>', 44.293745, -94.465418, 2],
  ['<b>Forestville/Mystery Cave State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/forestville_mystery_cave/index.html">Visit Website</a>', 43.616572, -92.314768, 2],
  ['<b>Fort Ridgely State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/fort_ridgely/index.html">Visit Website</a>', 44.448200, -94.726545, 2],
  ['<b>Fort Snelling State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/fort_snelling/index.html">Visit Website</a>', 44.873539, -93.191351, 2],
  ['<b>Franz Jevne State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/franz_jevne/index.html">Visit Website</a>', 48.640654, -94.059264, 2],
  ['<b>Frontenac State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/frontenac/index.html">Visit Website</a>', 44.523814, -92.342119, 2],
  ['<b>Garden Island State Recreation Area</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/garden_island/index.html">Visit Website</a>', 49.175032, -94.835323, 2],
  ['<b>George H. Crosby Manitou State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/george_crosby_manitou/index.html">Visit Website</a>', 47.473183, -91.102192, 2],
  ['<b>Glacial Lakes State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/glacial_lakes/index.html">Visit Website</a>', 45.541274, -95.531269, 2],
  ['<b>Glendalough State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/glendalough/index.html">Visit Website</a>', 46.314127, -95.679218, 2],
  ['<b>Gooseberry Falls State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/gooseberry_falls/index.html">Visit Website</a>', 47.139160, -91.463692, 2],
  ['<b>Grand Portage State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/grand_portage/index.html">Visit Website</a>', 47.999889, -89.592028, 2],
  ['<b>Great River Bluffs State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/great_river_bluffs/index.html">Visit Website</a>', 43.939591, -91.408371, 2],
  ['<b>Greenleaf Lake State Recreation Area</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/greenleaf_lake/index.html">Visit Website</a>', 45.015833, -94.466667, 2],
  ['<b>Hayes Lake State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/hayes_lake/index.html">Visit Website</a>', 48.637721, -95.545443, 2],
  ['<b>Hill Annex Mine State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/hill_annex_mine/index.html">Visit Website</a>', 47.327020, -93.275980, 2],
  ['<b>Interstate State Park</b><br>Milltown Rd, Taylors Falls, MN 55084<br/><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/interstate/index.html">Visit Website</a>', 45.3936727, -92.6709847, 2],
  ['<b>Iron Range OHV State Recreation Area</b><br>7196 Pettit Rd, Gilbert, MN 55741<br/><a target="_blank" href="http://www.dnr.state.mn.us/ohv/trail_detail.html?id=13/">Visit Website</a>', 47.4825292, -92.4456227, 2],
  ['<b>Itasca State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/itasca/index.html">Visit Website</a>', 47.195076, -95.164811, 2],
  ['<b>Jay Cooke State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/jay_cooke/index.html">Visit Website</a>', 46.655283, -92.372812, 2],
  ['<b>John A. Latsch State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/john_latsch/index.html">Visit Website</a>', 44.172365, -91.838554, 2],
  ['<b>Judge C.R. Magney State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/judge_cr_magney/index.html">Visit Website</a>', 47.817497, -90.053111, 2],
  ['<b>Kilen Woods State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/kilen_woods/index.html">Visit Website</a>', 43.730881, -95.067923, 2],
  ['<b>La Salle Lake State Recreation Area</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/la_salle_lake/index.html">Visit Website</a>', 47.347057, -95.158191, 2],
  ['<b>Lac qui Parle State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lac_qui_parle/index.html">Visit Website</a>', 45.023862, -95.894259, 2],
  ['<b>Lake Bemidji State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_bemidji/index.html">Visit Website</a>', 47.535532, -94.827873, 2],
  ['<b>Lake Bronson State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_bronson/index.html">Visit Website</a>', 48.724362, -96.625417, 2],
  ['<b>Lake Carlos State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_carlos/index.html">Visit Website</a>', 46.000147, -95.348293, 2],
  ['<b>Lake Louise State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_louise/index.html">Visit Website</a>', 43.533576, -92.525454, 2],
  ['<b>Lake Maria State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_maria/index.html">Visit Website</a>', 45.317909, -93.935872, 2],
  ['<b>Lake Shetek State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_shetek/index.html">Visit Website</a>', 44.101909, -95.691942, 2],
  ['<b>Lake Vermilion-Soudan Underground Mine State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_vermilion_soudan/index.html">Visit Website</a>', 47.819390, -92.243081, 2],
  ['<b>Maplewood State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/maplewood/index.html">Visit Website</a>', 46.538891, -95.953044, 2],
  ['<b>McCarthy Beach State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/mccarthy_beach/index.html">Visit Website</a>', 47.674451, -93.027305, 2],
  ['<b>Mille Lacs Kathio State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/mille_lacs_kathio/index.html">Visit Website</a>', 46.135364, -93.725836, 2],
  ['<b>Minneopa State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/minneopa/index.html">Visit Website</a>', 44.148592, -94.093265, 2],
  ['<b>Minnesota Valley State Recreation Area</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/minnesota_valley/index.html">Visit Website</a>', 44.664043, -93.707974, 2],
  ['<b>Monson Lake State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/monson_lake/index.html">Visit Website</a>', 45.318444, -95.275776, 2],
  ['<b>Moose Lake State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/moose_lake/index.html">Visit Website</a>', 46.435867, -92.735986, 2],
  ['<b>Myre - Big Island State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/myre_big_island/index.html">Visit Website</a>', 43.637157, -93.308933, 2],
  ['<b>Mystery Cave</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/forestville_mystery_cave/index.html">Visit Website</a>', 43.618110, -92.308926, 2],
  ['<b>Nerstrand Big Woods State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/nerstrand_big_woods/index.html">Visit Website</a>', 44.342418, -93.105588, 2],
  ['<b>Old Mill State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/old_mill/index.html">Visit Website</a>', 48.361448, -96.567104, 2],
  ['<b>Red River State Recreation Area</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/red_river/index.html">Visit Website</a>', 47.929643, -97.029160, 2],
  ['<b>Rice Lake State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/rice_lake/index.html">Visit Website</a>', 44.084905, -93.058872, 2],
  ['<b>St. Croix State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/st_croix/index.html">Visit Website</a>', 45.946285, -92.606032, 2],
  ['<b>Sakatah Lake State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/sakatah_lake/index.html">Visit Website</a>', 44.218977, -93.531775, 2],
  ['<b>Savanna Portage State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/savanna_portage/index.html">Visit Website</a>', 46.849948, -93.148689, 2],
  ['<b>Scenic State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/scenic/index.html">Visit Website</a>', 40.209020, -105.521747, 2],
  ['<b>Schoolcraft State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/schoolcraft/index.html">Visit Website</a>', 47.223089, -93.804942, 2],
  ['<b>Sibley State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/sibley/index.html">Visit Website</a>', 45.313488, -95.032617, 2],
  ['<b>Soudan Underground Mine</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/lake_vermilion_soudan/index.html">Visit Website</a>', 47.819390, -92.243081, 2],
  ['<b>Split Rock Creek State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/split_rock_creek/index.html">Visit Website</a>', 43.895814, -96.365669, 2],
  ['<b>Split Rock Lighthouse State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/split_rock_lighthouse/index.html">Visit Website</a>', 47.200897, -91.367114, 2],
  ['<b>Temperance River State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/temperance_river/index.html">Visit Website</a>', 47.555629, -90.871808, 2],
  ['<b>Tettegouche State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/tettegouche/index.html">Visit Website</a>', 47.339077, -91.195834, 2],
  ['<b>Upper Sioux Agency State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/upper_sioux_agency/index.html">Visit Website</a>', 44.737085, -95.460325, 2],
  ['<b>Whitewater State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/whitewater/index.html">Visit Website</a>', 44.062472, -92.044903, 2],
  ['<b>Wild River State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/wild_river/index.html">Visit Website</a>', 45.523034, -92.749123, 2],
  ['<b>William O&apost;Brien State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/william_obrien/index.html">Visit Website</a>', 45.225256, -92.765085, 2],
  ['<b>Zippel Bay State Park</b><br><a target="_blank" href="http://www.dnr.state.mn.us/state_parks/zippel_bay/index.html">Visit Website</a>', 48.847738, -94.849660, 2]
];
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(46.489808, -94.000676),
        zoom: 10,
        scrollwheel: false
    });
    var bikeLayer = new google.maps.BicyclingLayer();
    var iconBase = '/images/park-icon.png';
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
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
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
                    "color": "#ffffff"
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
                    "color": "#ffffff"
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
                    "lightness": 60
                },
                {
                    "weight": 0.31
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
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
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];

//    bikeLayer.setMap(map);
    map.setOptions({ styles: styles });


}
