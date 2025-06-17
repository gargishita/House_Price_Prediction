function getBathValue() {
  let baths = document.getElementsByName("uiBathrooms");
  for (let i = 0; i < baths.length; i++) {
    if (baths[i].checked) {
      return parseInt(baths[i].value);
    }
  }
  return -1;
}

function getBHKValue() {
  let bhks = document.getElementsByName("uiBHK");
  for (let i = 0; i < bhks.length; i++) {
    if (bhks[i].checked) {
      return parseInt(bhks[i].value);
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  console.log("Estimate Price button clicked");
  
  let sqft = document.getElementById("uiSqft").value;
  let bhk = getBHKValue();
  let bath = getBathValue();
  let location = document.getElementById("uiLocations").value;
  let estPrice = document.getElementById("uiEstimatedPrice");

  if (sqft === "" || isNaN(sqft)) {
    estPrice.innerHTML = "<h2>Please enter a valid area</h2>";
    return;
  }

  let url = "http://127.0.0.1:5000/predict_home_price";

  $.post(url, {
    total_sqft: parseFloat(sqft),
    bhk: bhk,
    bath: bath,
    location: location
  }, function (data, status) {
    console.log(data.estimated_price);
    estPrice.innerHTML = "<h2>Estimated Price: " + data.estimated_price + " Lakhs</h2>";
    console.log(status);
  });
}

function onPageLoad() {
  console.log("Document loaded");
  let url = "http://127.0.0.1:5000/get_location_names";

  $.get(url, function (data, status) {
    console.log("Received location data");
    if (data && data.locations) {
      let locations = data.locations;
      let uiLocations = document.getElementById("uiLocations");
      $('#uiLocations').empty();
      $('#uiLocations').append('<option disabled selected>Choose a Location</option>');
      for (let i = 0; i < locations.length; i++) {
        let opt = new Option(locations[i]);
        $('#uiLocations').append(opt);
      }
    }
  });
}

window.onload = onPageLoad;
