$.get("http://api.openweathermap.org/data/2.5/weather?q=London", {
      "APPID": "xxxx"
      } )
      .done(function(data) {
        console.log("Data Loaded: ", data);
      });
