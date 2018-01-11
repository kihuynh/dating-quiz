$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    console.log("quiz reached");

    var gender = $("select#gender").val();
    var vehicle = $("select#vehicle").val();


    if (gender === "Female" && vehicle === "Bike") {
      console.log("if statement");
      $("#dwayne").show();
      $("p").show();
    } else {
      console.log("else has been reached");
    }
    event.preventDefault();
  });
});
