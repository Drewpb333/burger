$(function () {
  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");
    var isDevoured = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured
    }).then(
      function () {
        console.log("Burger devoured state changed to: ", devoured);
        location.reload();
      }
    );
  });

  $(".form-group").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#new-burger").val().trim()
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log(newBurger + " was added.");
        location.reload();
      }
    );
  });
});