function Loadjson(file,callback) {
  var hr = new XMLHttpRequest();
  hr.overrideMimeType("application/json");
  hr.open("GET",file,true);
  hr.onreadystatechange = function() {
    if (hr.readyState === 4 && hr.status == "200") {
      callback(hr.responseText);
    }
  };
  hr.send("null");
}

Loadjson("ipl.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  basic(data.dets);
  rig(data.Career);
  edu(data.Education);
})

var Nam1 = document.querySelector(".Namde1");
function basic(de) {
  var im = document.createElement("img");
  im.src = de.image;
  Nam1.appendChild(im);
  var nam = document.createElement("h1");
  nam.textContent = de.name;
  Nam1.appendChild(nam);

  var ph = document.createElement("h3");
  ph.textContent = de.phno;
  Nam1.appendChild(ph);

  var Mail = document.createElement("a");
  Mail.href = "mailto:sasikiran276@gmail.com"
  Mail.textContent = de.mail;
  Nam1.appendChild(Mail);

  var Adds = document.createElement("h4");
  Adds.textContent = "Address:";
  Nam1.appendChild(Adds);

  var hor = document.createElement("hr");
  Nam1.appendChild(hor);

  var p = document.createElement("p");
  p.textContent = de.Address;
  Nam1.appendChild(p);
}

var Nam2 = document.querySelector(".Namde2");
function rig(car) {
  var care = document.createElement("h2");
  care.textContent = "Career Objective";
  Nam2.appendChild(care);

  var hor = document.createElement("hr");
  Nam2.appendChild(hor);

  var tex = document.createElement("p");
  tex.textContent = car.text;
  Nam2.appendChild(tex);
}

function edu(e) {
  var cars = document.createElement("h2");
  cars.textContent = "Eductional Qualification";
  Nam2.appendChild(cars);

  var hor = document.createElement("hr");
  Nam2.appendChild(hor);

  var tab = document.createElement("table");
  tab.border = "5";
  Nam2.appendChild(tab);

  tabdat="<tr><td>"+"Qualification"+"</td><td>"+"Institute"+"</td><td>"+"Year"+"</td><td>"+"percentage"+"</td></tr>";

  for(i=0;i<e.length;i++){
    tabdat+="<tr><td>"+e[i].qualification+"</td><td>"+e[i].institute+"</td><td>"+e[i].year+"</td><td>"+e[i].percentage+"</td></tr>";
  }
    tab.innerHTML = tabdat;
}
