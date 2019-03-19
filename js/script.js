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
          var num = Math.floor(Math.random() * response.data.length);
          $("#display-gif").html(`<img src="${response.data[num].images.original.url}"/>`);
           $(".text-center").hide();
        }
      
  });
  
 $("#email-button").click(function () {
     var email = $("#email-term").val();
    window.open('mailto:'+email+'?subject=Gif&body=body');
  });
  
  
  
  console.log(searchTerm);
  
  
});

