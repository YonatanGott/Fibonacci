
function fibFetch(){
  const fibserver =  'http://localhost:5050/fibonacci/';
  let number = document.getElementById("number").value;
  let numberserver = fibserver+number;
  fetch (numberserver)   
  .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let fibjson = JSON.parse(data);
      let result = document.getElementById("result");
      result.innerHTML = fibjson.result;
    });
}

document.getElementById("btn").addEventListener('click', fibFetch);

