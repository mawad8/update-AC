// map section
function initMap(){
  let mymape = document.getElementById('mymaps');
  let myMap = new google.maps.Map( mymape, {
    center: {
      lat: 37.773972,
      lng: 	-122.431297

    },
    zoom: 12,
    mapTypeId: "roadmap"
  });
//   let myhome = new google.maps.Marker({
//     position: {
//       lat: 37.773972,
//       lng: -122.431297

//     },
//     map: myMap,
   
//   });
};

$("#rating-dropdown").change(function(){
  $ratingnum = $(":selected")[0].value;
  $("option[value= 'Default']").attr("disabled", "true");
  $(".live-stars").removeClass("stars");
  for (var i = 0; i < $ratingnum; i++) {
    $(".star"+(i+1)).addClass('stars');
  }
});