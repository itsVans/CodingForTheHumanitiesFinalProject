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

statueOfLibertyMarker = L.marker(statueOfLiberty, {icon: statueIcon}).bindPopup(
	"<h2>" + "This is the Statue of Liberty." + "</h2>" 
		   + "Fun Facts About This Landmark:"
		   + "<ul style='list-style-type:disc'>"
           		+ "<li>There are 354 steps in the Statue of Liberty.</li>"
           		+ "<li>It wears a size 879 shoe.</li>"
           		+ "<li>There are 25 windows in its crown.</li>"
           		+ "<li>It represents Libertas, Roman goddess of freedom.</li>"
           		+ "<li>The idea for the statue was first presented by French anti-slavery activist Edouard de Laboulaye to the French sculptor Frederic Bartholdi.</li>"
           + "</ul>"
           + "<a href='https://kidzfeed.com/statue-of-liberty-facts-for-kids/'>Read More</a>").addTo(firstMap);
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

madisonSquareGardenMarker = L.marker(madisonSquareGarden, {icon: gardenIcon}).bindPopup("<h2>" + "This is Madison Square Garden." + "</h2>" 
		   + "Fun Facts About This Landmark:"
		   + "<ul style='list-style-type:disc'>"
           		+ "<li>Capacity: Basketball – 19,812.</li>"
           		+ "<li>Capacity: Ice hockey / Lacrosse – 18,006.</li>"
           		+ "<li>Capacity: Concerts – 20,000</li>"
           		+ "<li>Capacity: Boxing – 20,789.</li>"
           		+ "<li>Events per year: approximately 320.</li>"
           + "</ul>"
           + "<a href='https://nyfacts.com/madison-square-garden/'>Read More</a>").addTo(secondMap);
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

broadwayTheatrekMarker = L.marker(broadwayTheatre, {icon: broadwayIcon}).bindPopup("<h2>" + "This is Broadway Theatre." + "</h2>" 
		   + "Fun Facts About This Landmark:"
		   + "<ul style='list-style-type:disc'>"
           		+ "<li>Broadway is the longest street in NYC [33 miles of which 18 miles are even within New York City.</li>"
           		+ "<li>Phantom of the Opera is the longest-running Broadway show.</li>"
           		+ "<li>The Theatre District was one of first streets in New York to be fully illuminated by white electric bulbs in the 1890s, thus giving rise to the nickname “The Great White Way”.</li>"
           		+ "<liDuring the Dutch settlement in America, the Broadway street was called Brede weg. The name Broadway is the literal English translation of the earlier known Dutch name.</li>"
           		+ "<li>The box office revenues for Phantom of the Opera are higher than any film or stage play in history, including Titanic, ET, Star Wars and Avatar.</li>"
           + "</ul>"
           + "<a href='https://blog.headout.com/18-facts-about-broadway-you-probably-didnt-already-know/'>Read More</a>").addTo(thirdMap);
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
flowerGardenMarker = L.marker(flowerGarden, {icon: flowerIcon}).bindPopup("<h2>" + "This is the Brooklyn Botanical Garden." + "</h2>" 
		   + "Fun Facts About This Landmark:"
		   + "<ul style='list-style-type:disc'>"
           		+ "<li>In 1897, New York State legislation reserved 39 acres for a botanic garden. Today, the Garden comprises of 52 acres.</li>"
           		+ "<li>In 1911, BBG’s first display garden was conceived to showcase and conserve native plants. Its original form was designed by BBG’s first director, Norman Taylor, a research taxonomist, and included wildflower beds arranged systematically by plant family and evolutionary relationship.</li>"
           		+ "<li>In 1914, The Children's Garden program begins. One of the first programs of its kind, this one-acre vegetable garden offers a place where city children can grow their own food plants.</li>"
           		+ "<li>In 1915, The Japanese Hill-and-Pond Garden completed by landscape designer Takeo Shiota. It was one of the first public Japanese gardens in the United States.</li>"
           		+ "<li>In 1977, the patent was received for <i>Magnolia</i> x 'Elizabeth', the first yellow magnolia, developed at BBG.</li>"
           + "</ul>"
           + "<a href='https://www.bbg.org/about/history'>Read More</a>").addTo(fourthMap);
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
empireStateBuildingMarker = L.marker(empireStateBuilding, {icon: buildingIcon}).bindPopup("<h2>" + "This is the Empire State Building." + "</h2>" 
		   + "Fun Facts About This Landmark:"
		   + "<ul style='list-style-type:disc'>"
           		+ "<li>Despite the colossal size of the project, the design, planning and construction of the Empire State Building took just 20 months from start to finish.</li>"
           		+ "<li>Of the more than 90 movies featuring the Empire State Building, none is more famous than 1933’s “King Kong,” which ends with the titular giant ape scaling the skyscraper and being attacked by swarming biplanes.</li>"
           		+ "<li>Using as many as 3,400 men each day, they assembled its skeleton at a record pace of four and a half stories per week—so fast that the first 30 stories were completed before certain details of the ground floor were finalized.</li>"
           		+ "<li>The Empire State Building was primarily designed to house corporate offices, but it got off to a rocky start thanks to the 1929 stock market crash and the onset of the Great Depression.</li>"
           + "</ul>"
           + "<a href='https://www.history.com/news/10-surprising-facts-about-the-empire-state-building'>Read More</a>").addTo(fifthMap);
circle = L.circle(empireStateBuilding, {radius: 50,
                                         color: "blue",
                                         fillColor: "blue",
                                         opacity: 0.5,
                                         fillOpacity: 0.20}
          ).addTo(fifthMap);