var http = new XMLHttpRequest();
var url = "postsJson.json";

http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};

http.open("GET", url, true);
http.send();


function myFunction(arr) {
  var out = "";
  let nOut = "";

  for (let i in arr) {
    out += `
                  <div id="post" class="post">
                    <img class="main-post" src="${arr[i].url}" alt="Loding...">
                    <img class="post-logo" src="${arr[i].url}">
                    <span class="post-user-name">${arr[i].name}</span>
                  </div>
          `
    nOut += `<li><img src="${arr[i].url}" alt=""><span>${arr[i].name}</span></li>`
  }
  document.getElementById('storys').innerHTML=nOut;
  document.getElementById("main").innerHTML = out;
}