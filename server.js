document.getElementById("btn").addEventListener('click', fibFetch);

function showSpinner() {
  let spinner = document.getElementById("spinner");
  spinner.classList.add('show');
  setTimeout(() => {
    spinner.classList.remove('show');
  }, 600);
}


function fibFetch() {
  const fibserver = 'http://localhost:5050/fibonacci/';
  let number = document.getElementById("number").value;
  let numberserver = fibserver + number;
  showSpinner()
  fetch(numberserver)
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML =  data.result; 
      console.log(data);
    })
    .catch(error => {
      let boop = JSON.stringify(response);
      console.log(boop);
      console.log(error);
      console.log(event);
    });
}
