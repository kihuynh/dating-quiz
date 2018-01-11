$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    console.log("quiz reached");

    var gender = $("select#gender").val();
    var vehicle = $("select#vehicle").val();
    var beverage = $("select#beverage").val();

    if (gender === "Female" && vehicle === "Bike" && (beverage === "Gatorade" || beverage === "Water")) {
      console.log("if statement");
      $("#dwayne").show();
      $("p").show();
      console.log("it's dwayne");
    } else if (gender === "Male" && vehicle === "Car" && beverage === "Sparkling Water") {
      $("#angelina").show();
      console.log("where");
      $("p").show();
    } else {
      $("h2").show();
    }



    event.preventDefault();
  });
});
