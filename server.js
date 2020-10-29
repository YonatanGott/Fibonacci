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
  let fifty = document.getElementById("feedback");
  if (number > 50) {
    fifty.classList.add('show2');
    document.getElementById("result").innerHTML = "";
    return;
  }
  else {
    fifty.classList.remove('show2');
    let numberserver = fibserver + number;
    showSpinner()
    fetch(numberserver)
      .then(res => {
        console.log(res);
        if (res.status == 200) {

          return res.json();
        }
        else {
          return res.text();
        }
      })
      .then(data => {
        if (typeof (data) === 'string') {
          document.getElementById("server-error").classList.add('show3');
          document.getElementById("server-error").innerHTML += data;
          console.log(data);
        }
        else {
          document.getElementById("result").innerHTML = data.result;
          console.log(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
