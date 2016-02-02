// Rest Country API Lab/Homework
// Persist the last country that was selected
// Style
// Further: Add new functionality. eg

// Show bordering countries and their statistics.
// Filter select to only show countries in a region, sub-region.

window.onload = function(){
  console.log('App started');
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();

  request.open("GET", url);

  // var countries = JSON.parse(localStorage.getItem('countryList')) || [];

  request.onload = function(){
    if(request.status === 200){
      console.log("got the data");
      var countries = JSON.parse(request.responseText) || [];
      // Make a select drop down with all the countries,
      var option = document.createElement("option");
      option.value = "None";
      option.innerText = "choose a country";
      
      var select = document.createElement("select");
      select.name = "country-list";
      select.id = "country-list";

      select.appendChild(option);
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(select);
      
      var countrySelect = document.getElementById('country-list');
      for(country of countries){      
        var option = document.createElement("option");
        option.value = country.name;
        option.innerText = country.name;
        countrySelect.appendChild(option);
      }

    }
  }

  request.send(null);

  // display the country name, population, capital city of the country that is selected.
  var section = document.createElement("section");
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(section);
};


      // console.log(countries.length);
      // var firstCountry = countries[0];
      // console.log('The first country is', firstCountry.name);
      // var spanishSpeakers = [];
      // for(country of countries){
      //   for(language of country.languages){       
      //     if(language === "es"){
      //       spanishSpeakers.push(country);
      //       console.log('Hablan español en', country.name);
      //     }
      //   }
      // }
      // console.log('There are', spanishSpeakers.length, 'spanish speaking countries');
