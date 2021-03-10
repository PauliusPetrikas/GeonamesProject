$("#btnRun1").click(function () {
  $.ajax({
    url: "libs/php/getNearbyPlace.php",
    type: "POST",
    dataType: "json",
    data: {
      lat: document.getElementById("latitude").value,
      lng: document.getElementById("longitude").value,
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtDistance").html(result["data"][0]["distance"]);
        $("#txtCountryName").html(result["data"][0]["countryName"]);
        $("#txtName").html(result["data"][0]["name"]);
        $("#txtPopulation").html(result["data"][0]["population"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    },
  });
});

$("#btnRun2").click(function () {
  $.ajax({
    url: "libs/php/getCountryCode.php",
    type: "POST",
    dataType: "json",
    data: {
      lat: document.getElementById("latitude").value,
      lng: document.getElementById("longitude").value,
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtIsoCode").html(result["data"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    },
  });
});

$("#btnRun3").click(function () {
  $.ajax({
    url: "libs/php/getGtopo30.php",
    type: "POST",
    dataType: "json",
    data: {
      lat: document.getElementById("latitude").value,
      lng: document.getElementById("longitude").value,
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtElevation").html(result["data"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    },
  });
});

$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
