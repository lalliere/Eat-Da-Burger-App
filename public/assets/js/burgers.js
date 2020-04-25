// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function () {

  $(".change-status").on("click", function () {
    console.log("testing")
    // let id = $(this).data("id");
    // let newState = $(this).data("newStatus");

    // let newEatState = {
    //   eaten = newState
    // };
    
    // // Send the PUT request.
    // $.ajax("/api/burgers/" + id, {
    //   type: "PUT",
    //   data: newEatState
    // }).then(
    //   function () {
    //     console.log("Changed state of being consumed to", newState);
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("test");


    let newBurger = {
      name: $("#burger").val().trim(),
      eaten: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(
      function () {
        // M.toast({html: "Burger Added!"});
        console.log("Created new burger!");
        // Reload the page to get the updated list
        location.reload();
      },


    );
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("Deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});