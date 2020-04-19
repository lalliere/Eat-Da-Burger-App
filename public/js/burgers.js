// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function () {

  $(".eat-burger").on("click", function (event) {
    let id = $(this).data("id");
    
    let eaten = 1;
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function () {
        console.log("Changed state of being consumed to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#burgName").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(
      function () {
        // M.toast({html: "Burger Added!"});
        console.log("Created a new burger!");
        // Reload the page to get the updated list
        location.reload();
      },


    );
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      data: id
    }).then(
      function () {
        console.log("Deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});