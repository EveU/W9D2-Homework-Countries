var Map = function(latLng){
  this.googleMap = new google.maps.Map(document.getElementById('map'), {center: latLng, zoom: 1});
  this.setCentre = function(latLng){
    this.googleMap.setCenter(latLng);
  };
  this.setZoom = function(zoom){
    this.googleMap.setZoom(zoom);
  }
}