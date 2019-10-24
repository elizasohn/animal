$(document).ready(function(){
  $("form").submit(function(event){

  var animal = $("input:radio[name=animal]:checked").val();
      if (animal === "turtle") {
        $(".alligator").hide();
        $(".dog").hide();
        $(".squirrel").hide();
        $(".hedgehog").hide();
        $(".frog").hide();
        $(".zebra").hide();
        $(".turtle").show();
      } else if (animal === "alligator") {
        $(".turtle").hide();
        $(".dog").hide();
        $(".squirrel").hide();
        $(".hedgehog").hide();
        $(".frog").hide();
        $(".zebra").hide();
        $(".alligator").show();
      } else if (animal === "dog") {
        $(".turtle").hide();
        $(".alligator").hide();
        $(".squirrel").hide();
        $(".hedgehog").hide();
        $(".frog").hide();
        $(".zebra").hide();
        $(".dog").show();
      } else if (animal === "squirrel") {
        $(".turtle").hide();
        $(".alligator").hide();
        $(".dog").hide();
        $(".hedgehog").hide();
        $(".frog").hide();
        $(".zebra").hide();
        $(".squirrel").show();
      } else if (animal === "hedgehog") {
        $(".turtle").hide();
        $(".alligator").hide();
        $(".dog").hide();
        $(".squirrel").hide();
        $(".frog").hide();
        $(".zebra").hide();
        $(".hedgehog").show();
      } else if (animal === "frog") {
        $(".turtle").hide();
        $(".alligator").hide();
        $(".dog").hide();
        $(".squirrel").hide();
        $(".hedgehog").hide();
        $(".zebra").hide();
        $(".frog").show();
      } else if (animal === "zebra") {
        $(".turtle").hide();
        $(".alligator").hide();
        $(".dog").hide();
        $(".squirrel").hide();
        $(".hedgehog").hide();
        $(".frog").hide();
        $(".zebra").show();
      }
event.preventDefault();

  });
});
