navigator.geolocation.getCurrentPosition(cb)
//2,4
// navigator.geolocation.watchPosition(cb)
// function cb(pos) {
//       document.write(pos.coords.latitude + "<br>")
//       document.write(pos.coords.longitude + "<br>")
// }

// 5
// function getKilometros(lat1,lon1,lat2,lon2)
//  {
//  rad = function(x) {return x*Math.PI/180;}
// var R = 6378.137; //Radio de la tierra en km
//  var dLat = rad( lat2 - lat1 );
//  var dLong = rad( lon2 - lon1 );
// var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
//  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//  var d = R * c;
// return d.toFixed(3); //Retorna tres decimales
//  }

// document.write(getKilometros(-18.11782,-59.95167,-67.44420,135.90270))


//2
function cb(pos) {
      latitud = pos.coords.latitude
      longitud = pos.coords.longitude
      var platform = new H.service.Platform({
            'apikey': 'J5FqHsvPX2qyMmlUaoZVXFJNXpJavWF4OFTez79dyVg'
      });

      var defaultLayers = platform.createDefaultLayers();

      // mapa
      var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 12,
        center: { lat: latitud, lng: longitud }
      });


      //marca
      var svgMarkup = '<svg width="24" height="24" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
      'height="22" /><text x="12" y="18" font-size="12pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">H</text></svg>';

      var icon = new H.map.Icon(svgMarkup),
      coords = {lat: latitud, lng: longitud},
      marker = new H.map.Marker(coords, {icon: icon});

      map.addObject(marker);
      map.setCenter(coords);
      
      //direccion
      service.geocode({
            q: 'Granada'
          }, (result) => {
            // Add a marker for each location found
            result.items.forEach((item) => {
              map.addObject(new H.map.Marker(item.position));
            });
          }, alert);


      // ruta
          var routingParameters = {
            'routingMode': 'fast',
            'transportMode': 'car',
            'origin': latitud + "," + longitud,
            'destination': '37.9881700,-4.6066700',
            'return': 'polyline'
          };
          
          var onResult = function(result) {
            if (result.routes.length) {
              result.routes[0].sections.forEach((section) => {
                  let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
          
                  let routeLine = new H.map.Polyline(linestring, {
                    style: { strokeColor: 'blue', lineWidth: 3 }
                  });
          
                  let startMarker = new H.map.Marker(section.departure.place.location);
          
                  let endMarker = new H.map.Marker(section.arrival.place.location);
          
                  map.addObjects([routeLine, startMarker, endMarker]);
          
                  //map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
              });
            }
          };
          
          var router = platform.getRoutingService(null, 8);

          router.calculateRoute(routingParameters, onResult,
            function(error) {
              alert(error.message);
            });
}