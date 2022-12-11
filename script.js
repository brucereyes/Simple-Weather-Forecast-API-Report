
  var cityform = document.getElementById("cityform"); //Current weather forecast form
  var forecast = document.getElementById("forecast"); //3-hour increment form

//Start Current Weather Forecast 

if (cityform !== null) {

        // Add a submit event listener to the form
        cityform.addEventListener("submit", function(event) {
          // Prevent the default form submission behavior
          event.preventDefault();
  
          // Get a reference to the input element
          var cityInput = document.getElementById("thecity");
          var cityForecast = document.getElementById("cityForecast");

          // Check if the cityInput variable is not null
          if (cityInput !== null) {
            // Get the input value
            var city = cityInput.value;
            var forecast = cityForecast.value;
  
            // Make the API request using the city value
           var request = $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=0dcc391bac34298837f2047642794ee3", function(data){
  
            console.log(data);
  
              // Extract the data from the API response
              var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
              var temp = Math.floor(data.main.temp) + "F"; 
              var weather = data.weather[0].main;
  
              // Get a reference to the element where the data will be displayed
              var results = document.getElementById("results");
              
              // Update the element with the data from the API
              results.innerHTML = "<img src='" + icon + "'> <p>" + weather + "</p> <p>" + temp + "</p>";

            var errorMessage = document.getElementById("error-message");
            errorMessage.innerHTML = "";
            }
            );
            //end of current weather report logic

            // Call the fail() method
            request.fail(function(error) {
            console.error(error);
            
            // Show an error message in the HTML page if the city is not found
            var errorMessage = document.getElementById("error-message");
            errorMessage.innerHTML = "City not found";
            }
            );

        }
    }
    
);

//Start of Forecast three-hour increment

if (forecast !== null) {

    // Add a submit event listener to the form
    forecast.addEventListener("submit", function(event) {
    
        // Prevent the default form submission behavior
        event.preventDefault();
      
        // Get a reference to the input element
        var cityInput = document.getElementById("thecity");
        var cityForecast = document.getElementById("cityForecast");
    
        // Check if the cityInput variable is not null
        if (cityForecast !== null) {
            // Get the input value
            var city = cityInput.value;
            var forecast = cityForecast.value;

            
            var request = $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + forecast + "&cnt=3&units=imperial&appid=0dcc391bac34298837f2047642794ee3", function(data){

             console.log(data);

            //Hour 1 
            var dateTime1 = data.list[0].dt_txt;
            var temp1 = Math.floor(data.list[0].main.temp) +"F";
            var weather1 = data.list[0].weather[0].main;
            var description1 = data.list[0].weather[0].description;

            //Hour 2

            var dateTime2 = data.list[1].dt_txt;
            var temp2 = Math.floor(data.list[1].main.temp) +"F";
            var weather2 = data.list[1].weather[0].main;
            var description2 = data.list[1].weather[0].description;

            //Hour 3

            var dateTime3 = data.list[2].dt_txt;
            var temp3 = Math.floor(data.list[2].main.temp) +"F";
            var weather3 = data.list[2].weather[0].main;
            var description3 = data.list[2].weather[0].description;

    
         
           
            // Update the element with the data from the API

            //Hour 1 Result
            var results1 = document.getElementById("forecastResult1");
            results1.innerHTML = "First 3 Hours" + "</p><p>"+ "Date and time:" + "&nbsp" + dateTime1 + "<p>" + temp1 + "</p> <p>" + weather1 + "</p>" + description1 + "</p><br>";

            //Hour 2 Result
            var results2 = document.getElementById("forecastResult2");
            results2.innerHTML = "Date and time'" + dateTime2 + "<p>" + temp2 + "</p> <p>" + weather2 + "</p>" + description2 + "</p><br>";

             //Hour 3 Result
            var results3 = document.getElementById("forecastResult3");
            results3.innerHTML = "Date and time'" + dateTime3 + "<p>" + temp3 + "</p> <p>" + weather3 + "</p>" + description3 + "</p><br>";

                    }
                );

             }
            }
        )
    }

}
