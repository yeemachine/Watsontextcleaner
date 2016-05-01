var submitData= function(){
  var urlBase = "http://gateway-a.watsonplatform.net/calls/url/URLGetRankedNamedEntities?";
  var apiKey= "12185cdb4698b0f203b59d58f0b11d0ff2b6e546";
  urlBase = urlBase + "apikey="+apiKey;
  var inputText= $("#exemplar").val();
  urlBase = urlBase+"&url=" + encodeURIComponent(inputText);
  urlBase = urlBase + "&outputMode=json";
  urlBase = urlBase + "&showSourceText=1"
  console.log(urlBase);


  $.ajax({
    url: urlBase,
    type: 'POST',
    success: function(data) {
      console.log(data);
      console.log(data.text);
      $( "p" ).append( data.text );
    }

  });
}
