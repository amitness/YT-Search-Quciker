

var index=window.location.href.indexOf("?");
// if(index!=-1){

var query=window.location.href.slice(index+3);

var params = { part: "snippet", maxResults: 25, q: query, type: "video", key: "AIzaSyC9ta_5TtJcU3M6m0a5vtytSnpzESFbXRs"};

var queryStrings = $.param(params);

var url="https://www.googleapis.com/youtube/v3/search?" + queryStrings;

$.getJSON(url, function(data){
var video=data.items[0].id.videoId;
theurl="https://www.youtube.com/watch?v="+video;
window.location.href = theurl;
});

// }

// else{
// var theurl;
// $("form").on('submit',function(e){
// e.preventDefault();

// var q=encodeURIComponent($("#search_").val()).replace('/%20/g', "+");

// var url="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+q+"&type=video&key=AIzaSyC9ta_5TtJcU3M6m0a5vtytSnpzESFbXRs";

// $.getJSON(url, function(data){
// var video=data.items[0].id.videoId;
// theurl="https://www.youtube.com/watch?v="+video;

// window.location.href = theurl;
// });

// });

// }