// A flag to know when start or stop the camera
var enabled = false;
// Use require to add webcamjs
var WebCamera = require("webcamjs");

document.getElementById("start").addEventListener('click',function(){
   if(!enabled){ // Start the camera !
     enabled = true;
     WebCamera.attach('#camdemo');
     console.log("The camera has been started");
   }else{ // Disable the camera !
     enabled = false;
     WebCamera.reset();
    console.log("The camera has been disabled");
   }
},false);

document.getElementById("takeSnap").addEventListener('click',function(){
  console.log(1)
  WebCamera.snap( function(data_uri) {
    console.log(2)
    console.log(data_uri)
    document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
  } );
},false);
