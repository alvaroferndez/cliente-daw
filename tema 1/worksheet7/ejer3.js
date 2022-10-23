navigator.geolocation.getCurrentPosition(cb)

function cb(pos) {
      latitud = pos.coords.latitude
      longitud = pos.coords.longitude
      var map = L.map('map').setView([latitud, longitud], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([latitud, longitud]).addTo(map)


      //calcular ruta
      L.Routing.control({ 
            waypoints: [ 
               L.latLng(latitud,longitud), 
               L.latLng(37.9881700,-4.6066700) ] 
            }).addTo(map);


      //reverse geocoding
      var geocodeService = L.esri.Geocoding.geocodeService({
            apikey: 'J5FqHsvPX2qyMmlUaoZVXFJNXpJavWF4OFTez79dyVg'})

      map.on('click', function (e) {
            geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
              if (error) {
                return;
              }
        
              L.marker(result.latlng).addTo(map).bindPopup(result.address.Match_addr).openPopup();
            });
          });
}