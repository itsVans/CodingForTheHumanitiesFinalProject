firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.68919682,-74.04452562], 18);
statueOfLiberty = L.latLng(40.68919682, -74.04452562);

var statueIcon = L.icon({
	iconUrl: 'statueOfLiberty.png',
	iconSize: [75,75],
	popupAnchor: [0, -35]
});

statueOfLibertyMarker = L.marker(statueOfLiberty, {icon: statueIcon}).bindPopup("<h2>" + "This is the Statue of Liberty." + "</h2>"+ "<br />").addTo(firstMap);
circle = L.circle(statueOfLiberty, {radius: 25,
                                         color: "#008081",
                                         fillColor: "#008081",
                                         opacity: 0.5,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);

secondMap = L.map("second-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(secondMap);
secondMap.setView([40.74172961, -73.98828506], 18);
madisonSquareGarden = L.latLng(40.74172961, -73.98828506);

var gardenIcon = L.icon({
	iconUrl: 'MadisonSquareGarden.png',
	iconSize: [200,75],
	popupAnchor: [0, -35]
});

madisonSquareGardenMarker = L.marker(madisonSquareGarden, {icon: gardenIcon}).bindPopup("<h2>" + "This is Madison Square Garden." + "</h2>" + "<br />").addTo(secondMap);
circle = L.circle(madisonSquareGarden, {radius: 35,
                                         color: "#CF5300",
                                         fillColor: "#CF5300",
                                         opacity: 0.5,
                                         fillOpacity: 0.20}
          ).addTo(secondMap);

thirdMap = L.map("third-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(thirdMap);
thirdMap.setView([40.764141, -73.98505032], 20);
broadwayTheatre = L.latLng(40.764141, -73.98505032);

var broadwayIcon = L.icon({
	iconUrl: 'broadway.png',
	iconSize: [200,75],
	popupAnchor: [0, -35]
});

broadwayTheatrekMarker = L.marker(broadwayTheatre, {icon: broadwayIcon}).bindPopup("<h2>" + "This is Broadway Theatre." + "</h2>" + "<br />").addTo(thirdMap);
circle = L.circle(broadwayTheatre, {radius: 35,
                                         color: "red",
                                         fillColor: "red",
                                         opacity: 0.5,
                                         fillOpacity: 0.20}
          ).addTo(thirdMap);

fourthMap = L.map("fourth-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(fourthMap);
fourthMap.setView([40.77924157, -73.96356583], 17);

var flowerIcon = L.icon({
	iconUrl: 'botanic.png',
	iconSize: [150,100],
	popupAnchor: [0, -35]
});

flowerGarden = L.latLng(40.77924157, -73.96356583);
flowerGardenMarker = L.marker(flowerGarden, {icon: flowerIcon}).bindPopup("<h2>" + "This is the Brooklyn Botanical Garden." + "</h2>" + "<br />").addTo(fourthMap);
circle = L.circle(flowerGarden, {radius: 50,
                                         color: "#228b22",
                                         fillColor: "#228b22",
                                         opacity: 0.5,
                                         fillOpacity: 0.20}
          ).addTo(fourthMap);

fifthMap = L.map("fifth-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(fifthMap);
fifthMap.setView([40.74834612, -73.98520052], 18);

var buildingIcon = L.icon({
	iconUrl: 'building.png',
	iconSize: [150,150],
	popupAnchor: [0, -35]
});

empireStateBuilding = L.latLng(40.74834612, -73.98520052);
empireStateBuildingMarker = L.marker(empireStateBuilding, {icon: buildingIcon}).bindPopup("<h2>" + "This is the Empire State Building." + "</h2>" + "<br />").addTo(fifthMap);
circle = L.circle(empireStateBuilding, {radius: 50,
                                         color: "blue",
                                         fillColor: "blue",
                                         opacity: 0.5,
                                         fillOpacity: 0.20}
          ).addTo(fifthMap);