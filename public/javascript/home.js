window.onload = function() {

  var yourApts = document.getElementById('yourApts');
  var invApts = document.getElementById('invApts');
  var map;
  var mapArr = [];
  var infoWindow;
  function initMap(num, pos) {
    var str = 'map'+num.toString();
    var map = new google.maps.Map(document.getElementById(str), {
      center: pos,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 14,
      mapPos: pos
    });
    mapArr.push(map);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found');
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      draggable: true,
      title: "Your meeting is here."
    });
    map.setCenter(pos);
    map.panTo(pos);
  }

  var num = 0;
  var item = document.getElementById('map0');
  while (item !== undefined && item !== null) {
    //console.log(item);
    var pos = {
      lat: parseFloat(item.getAttribute("lat")),
      lng: parseFloat(item.getAttribute("lng"))
    };
    console.log(pos);
    initMap(num, pos);
    num ++;
    item = document.getElementById('map'+num);
  }

  yourApts.addEventListener('click', function(event) {
    var tar = event.target;
    var child = tar.nextSibling;

    if (child === undefined || child === null || child.className !== 'row moreInfo') {
      child = tar.parentNode.nextSibling;
      console.log(child);
    }

    if(child.className === 'row moreInfo')
    {
      if (child.style.display === 'none')
        child.style.display = 'block';
      else
        child.style.display = 'none';

      for(var item in mapArr)
      {
        google.maps.event.trigger(mapArr[item], 'resize');
        mapArr[item].panTo(mapArr[item].mapPos);
      }
    }
  });
  invApts.addEventListener('click', function(event) {
    var tar = event.target;
    var child = tar.nextSibling;
    if (child === undefined || child === null || child.className !== 'row moreInfo') {
      child = tar.parentNode.nextSibling;
      console.log(child);
    }

    if(child.className === 'row moreInfo')
    {
      if (child.style.display === 'none')
        child.style.display = 'block';
      else
        child.style.display = 'none';

      for(var item in mapArr)
      {
        google.maps.event.trigger(mapArr[item], 'resize');
        mapArr[item].panTo(mapArr[item].mapPos);
      }
    }
  });

};
