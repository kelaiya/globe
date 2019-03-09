document.getElementById('smname').value = count();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function getIps(){
  var Http = new XMLHttpRequest();
  var ips = {}
  var url='https://u4uujrathb.execute-api.us-east-2.amazonaws.com/test/newtest';
  var response = {}

  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange=(e)=>{
    if (e) {
        console.log('error', error);
    } else {
      var data=Http.responseText;
      // var jsonResponse = JSON.parse(data);
      console.log(data)
      // console.log(jsonResponse)
    // latitude1 = jsonResponse.lat
    // longitude1 = jsonResponse.lon
  }
  }
}
