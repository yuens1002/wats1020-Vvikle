$(document).on('ready', function() {
	
	mapboxgl.accessToken = 'pk.eyJ1IjoieXVlbnMxMDAyIiwiYSI6ImNpbGc4dXRwNzJhMzZ0c2twdzc2NzAxcnAifQ.VbhLUkphFGxtblRBdYoD7w';
	
	var markers = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Make it Mount Pleasant</div><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
            "marker-symbol": "music"
        },
        "geometry": {
            "type": "Point",
			/* 99004 belleuve, wa */
            "coordinates": [-122.2040, 47.6186]
        }
    	}, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Mad Men Season Five Finale Watch Party</div><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href=\"http://madmens5finale.eventbrite.com/\" target=\"_blank\" title=\"Opens in a new window\">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
            "marker-symbol": "music"
        },
        "geometry": {
            "type": "Point",
			/* 98144 seattle, wa */
            "coordinates": [-122.3005, 47.5852]
			}
    	}]
	};
	
	var map = new mapboxgl.Map({
		container: 'map', // container id
		style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
		center: [-122.3331, 47.6097], // starting position
		zoom: 10 // starting zoom
	});
	
	map.on('style.load', function () {
	// Add marker data as a new GeoJSON source.
	map.addSource("markers", {
		"type": "geojson",
		"data": markers
	});

	// Add a layer showing the markers.
	map.addLayer({
		"id": "markers",
		"interactive": true,
		"type": "symbol",
		"source": "markers",
		"layout": {
			"icon-image": "{marker-symbol}-15",
			"icon-allow-overlap": true
		}
		});
	});
	
	var popup = new mapboxgl.Popup();

	// When a click event occurs near a marker icon, open a popup at the location of
	// the feature, with description HTML from its properties.
	map.on('click', function (e) {
		map.featuresAt(e.point, {
			radius: 7.5, // Half the marker size (15px).
			includeGeometry: true,
			layer: 'markers'
		}, function (err, features) {

			if (err || !features.length) {
				popup.remove();
				return;
			}

			var feature = features[0];

			// Populate the popup and set its coordinates
			// based on the feature found.
			popup.setLngLat(feature.geometry.coordinates)
				.setHTML(feature.properties.description)
				.addTo(map);
		});
	});

	// Use the same approach as above to indicate that the symbols are clickable
	// by changing the cursor style to 'pointer'.
	map.on('mousemove', function (e) {
		map.featuresAt(e.point, {
			radius: 7.5, // Half the marker size (15px).
			layer: 'markers'
		}, function (err, features) {
			map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
		});
	});
	
	/* this is for later when i know how this API works
	$('button.find').click(function() {
		event.preventDefault();
		var zip = $('input[name=findByZip]').val();
	
		$.ajax({
		url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/1600+pennsylvania+ave+nw.json&country=ca',
		dataType: 'xml',
		success: function (xml) {
			var layer = new L.OSM.DataLayer(xml).addTo(map);
			map.fitBounds(layer.getBounds());
			}
		});
	
	}); */
	
	map.scrollZoom.disable();
	map.addControl(new mapboxgl.Navigation());
	map.addControl(new mapboxgl.Geocoder({position: 'top-left'}));

	$('[data-hide]').on('click', function(){
        $(this).closest('.' + $(this).attr('data-hide')).hide();	
	});
	
});
