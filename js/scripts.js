var flavors = ["chocolate", "strawberry", "cookie dough", "pistachio"]

$(document).ready(function() {
  flavors.forEach(function(flavor) {
    $("ul").append("<li>"+ flavor +"</li>");
  });

});
