function initMap(){var e={lat:55.681782,lng:37.516388},n={lat:55.681782,lng:37.516388},o=new google.maps.Map(document.getElementById("map"),{zoom:17,center:e,disableDefaultUI:!0,scrollwheel:!1}),a=new google.maps.Marker({position:n,map:o,icon:"../../../assets/img/map/map_marker_n.png"}),l=new google.maps.InfoWindow({content:"Mellennium"});a.addListener("click",function(){l.open(o,a)})}