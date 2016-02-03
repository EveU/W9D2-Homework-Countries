window.onload = function(){
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  var body = document.getElementsByTagName('body')[0];

  var countryToDisplay = JSON.parse(localStorage.getItem('storedCountry')) || {};

  var map = new Map({lat: 0, lng: 0}, 1);


  // // Create drop down menu
  // var option = document.createElement("option");
  // option.value = "None";
  // option.innerText = "choose a country";
  
  // var select = document.createElement("select");
  // select.name = "country-list";
  // select.id = "country-list";

  // select.appendChild(option);
  // body.appendChild(select);

  // Display persisted country info 
  var section = document.createElement("section");
  body.appendChild(section);
  var countryName = document.getElementById("countryName");
  var population = document.getElementById("population");
  var capitalCity = document.getElementById("capitalCity");
  var mapDisplay = document.getElementById("map");
  
  if(countryToDisplay != {}){

      var country = countryToDisplay;

      countryName.innerText = country.name;
      population.innerText = "Population: " + Number(country.population).toLocaleString();
      capitalCity.innerText = "Capital City: " + country.capital;

      map.setCentre({lat: country.latlng[0], lng: country.latlng[1]});
      map.setZoom(2);
  }

  request.open("GET", url);

  request.onload = function(){
    if(request.status === 200){
      console.log("got the data");
      var countries = JSON.parse(request.responseText) || [];
      
      // Add all the countries to the drop down menu
      var countrySelect = document.getElementById('country-list');
      for(country of countries){      
        var option = document.createElement("option");
        option.value = countries.indexOf(country);
        option.innerText = country.name;
        countrySelect.appendChild(option);
      }

      countrySelect.onchange = function(){
        var list = document.getElementById("country-list");
        var countryIndex = list.options[list.selectedIndex].value;
        var country = countries[countryIndex];

        countryName.innerText = country.name;
        population.innerText = "Population: " + Number(country.population).toLocaleString();
        capitalCity.innerText = "Capital City: " + country.capital;
        
        map.setCentre({lat: country.latlng[0], lng: country.latlng[1]});
        map.setZoom(2);

        countryToDisplay = country;
        localStorage.setItem('storedCountry', JSON.stringify(countryToDisplay));
      }
    }
  }

  request.send(null);

};
