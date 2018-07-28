function Loadjson(file,callback) {
  var xhr =new XMLHttpRequest()
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange  = function() {
    if(xhr.readyState === 4 &&xhr.status == "200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
Loadjson("data1.json",function(text)
{
  var data =JSON.parse(text);
  console.log(data);
  basics(data.details)
})
var child1 = document.querySelector(".childone");
function basics(det) {
  var image =document.createElement("img")
  image.src = det.image;
  child1.appendChild(image);
}
