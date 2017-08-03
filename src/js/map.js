function initMap() {
  var uluru = {lat: 55.681782, lng: 37.516388};
  var marker = {lat: 55.681782, lng: 37.516388};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru,
    disableDefaultUI: true,
    scrollwheel: false
  });

  var image = '../../../assets/img/map/map_marker_n.png';
  var beachMarker = new google.maps.Marker({
    position: marker,
    map: map,
    icon: image
  });

  var contentString = 'Mellennium'


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  beachMarker.addListener('click', function() {
    infowindow.open(map, beachMarker);
  });


}