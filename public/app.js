window.onload = function(){
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();

  var countryToDisplay = JSON.parse(localStorage.getItem('storedCountry')) || {};

  // Create drop down menu
  var option = document.createElement("option");
  option.value = "None";
  option.innerText = "choose a country";
  
  var select = document.createElement("select");
  select.name = "country-list";
  select.id = "country-list";

  select.appendChild(option);
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(select);

  // Display persisted country info 
  var section = document.createElement("section");
  body.appendChild(section);
  var countryName = document.createElement("h1");
  var population = document.createElement("p");
  var capitalCity = document.createElement("p");
  
  if(countryToDisplay != {}){

      var country = countryToDisplay;

      countryName.innerText = country.name;
      population.innerText = "Population: " + Number(country.population).toLocaleString();
      capitalCity.innerText = "Capital City: " + country.capital;

      section.appendChild(countryName);
      section.appendChild(population);
      section.appendChild(capitalCity);
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

      select.onchange = function(){
        var list = document.getElementById("country-list");
        var countryIndex = list.options[list.selectedIndex].value;
        var country = countries[countryIndex];

        countryName.innerText = country.name;
        population.innerText = "Population: " + Number(country.population).toLocaleString();
        capitalCity.innerText = "Capital City: " + country.capital;

        section.appendChild(countryName);
        section.appendChild(population);
        section.appendChild(capitalCity);

        countryToDisplay = country;
        localStorage.setItem('storedCountry', JSON.stringify(countryToDisplay));
      }
    }
  }

  request.send(null);

};
