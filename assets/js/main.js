// Check off specific to-do when clicked
$("ul").on("click", "li", function() { // we do not add event listener to $("li")
    $(this).toggleClass("completed");  // because the event won't fire for the newly added "li" that we clicked on
});                                    // instead, we add event listener to the parent - $("ul")
                                       // and then tell it to run the callback function when we click on the "li", by passing "li" as another argument

// Click on X to delete a to-do
$("ul").on("click", ".del", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Add new to-do
$("input[type='text']").on("keypress", function(event) {
    // the user hits Enter key
    if (event.which === 13) {
        // extract the input value
        var todoInput = $(this).val();
        // append new to-do to the existing list
        $("ul").append("<li><span class='del'><i class='fa fa-trash-o'></i></span> " + todoInput + "</li>");
        // clear the input area
        $(this).val("");
    }
});

// Toggle "Add new to-do"
$(".fa-plus").on("click", function() {
    // $("input[type='text']").toggleClass("input-hidden");
    $("input[type='text']").fadeToggle();
});