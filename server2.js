document.getElementById("btn").addEventListener('click', fetchNum);

async function fetchNum() {
  const fibserver =  'http://localhost:5050/fibonacci/';
  let number = document.getElementById("number").value-1;
  let numberserver = fibserver+number;
  let response = await fetch(numberserver);
  let data = await response.json();
  document.getElementById("result").innerHTML =  data.result; 
  console.log(data);
}