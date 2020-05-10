// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-digest").on("click", function(event) {
    let id = $(this).data("id");
    let newDigest = $(this).data("newdigest");

    let newDigestState = {
      digested: newDigest
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDigestState
    }).then(
      function() {
        console.log("changed digest to", newDigest);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burg").val().trim(),
      digested: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#random-submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Send the GET request.
    $.ajax("/api/bobs-burgers", {
      type: "GET"
    }).then(
      function() {
        console.log("got a random bob's burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
  