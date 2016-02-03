var Map = function(latLng){
  this.googleMap = new google.maps.Map(document.getElementById('map'), {center: latLng, zoom: 1, mapTypeId: google.maps.MapTypeId.SATELLITE});
  this.setCentre = function(latLng){
    this.googleMap.setCenter(latLng);
  };
  this.setZoom = function(zoom){
    this.googleMap.setZoom(zoom);
  };
  this.addMarker = function(latLng, title){
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: title,
      animation: google.maps.Animation.DROP
    });
    return marker;
  };
  // this.clearMarkers = function clearMarkers() {
  //   // setMapOnAll(null);
  // }
  // this.moveMarker = function(marker, latLng, title){
  //  marker.position = latLng;
  //  marker.title = title;
  // }
}