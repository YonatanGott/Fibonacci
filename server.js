document.getElementById("btn").addEventListener("click", fetch());

const fibserver =  'http://localhost:5050/fibonacci/7';

fetch (fibserver)   
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let result = document.getElementById("result");
    result.innerHTML = data.result;
  });