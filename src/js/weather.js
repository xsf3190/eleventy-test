function success(pos) {
    
    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.querySelector('#city').textContent = data.name;
            document.querySelector('#temp_now').textContent = "Temperature feels like " + data.main.feels_like;
            document.querySelector('#temp_min').textContent = "Minimum " + data.main.temp_min;
            document.querySelector('#temp_max').textContent = "Maximum " + data.main.temp_max;
        })
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  if ( navigator.geolocation) {
    console.log("About to getCurrentPosition");
    navigator.geolocation.getCurrentPosition(success, error);
  }
  