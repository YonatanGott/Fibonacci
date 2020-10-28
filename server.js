document.getElementById("btn").addEventListener('click', fibFetch);
function fibFetch() {
  const fibserver = 'http://localhost:5050/fibonacci/';
  let number = document.getElementById("number").value;
  let numberserver = fibserver + number;
  fetch(numberserver)
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML =  data.result; 
      console.log(data);
    })
    .catch(error => {
      
      console.log(error);
    });
}
