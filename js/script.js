// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
  var searchTerm = $("#search-term").val();
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" +searchTerm+ "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          $("#display-gif").html(`<img src="${response.data[0].images.original.url}"/>`);
           $(".text-center").hide();
        }
      
  });
  
  
  console.log(searchTerm);
  
  
});

