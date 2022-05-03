var url = "https://api.giphy.com/v1/gifs/search?q=hello&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1"

var userInput = $("input").val();
let fullimg


$(".search-button").click(function(){
  
  var userInput = $("input").val();
  
 fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`)
  .then(function(response){
  return response.json();
  
})
.then(function(userdata){
   let randomNumber = Math.random();
     let randomData = (Math.floor(randomNumber*userdata.data.length));
  var imgurl = userdata.data[randomData].images["480w_still"].url;
  $(".display").append(`<img src="${imgurl}"/>`)
    console.lo(userdata.data[0]);
   
});

  function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}

})



$(".copyButton").click(function() {
  console.log(fullimg);
  let fullimg = this.img;;
  navigator.clipboard.writeText(fullimg).then(function() {
    $("body").text('Async: Copying to clipboard was successful!');
  }, function(err) {
     $("body").text('Async: Could not copy text: ', err);
  });
});

