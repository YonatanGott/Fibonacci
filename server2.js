document.getElementById("btn").addEventListener('click', fibFetch);

function showSpinner() {
  let spinner = document.getElementById("spinner");
  spinner.classList.add('show');
  setTimeout(function () { spinner.classList.remove('show') }, 600);
}

function listUpdate(){
const fibserver = 'http://localhost:5050/getFibonacciResults';
fetch(fibserver)
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
        let resArray = data.results;
        console.log(resArray);
        for (let i = 0; i < 3; i++){
            let lastRes = resArray[resArray.length - 1-i];
            console.log(lastRes);
            let result = lastRes.result;
            console.log(result);
            let date = Date(lastRes.createdDate);
            console.log(date);
            console.log(lastRes.createdDate);
            let num = lastRes.number;
            console.log(num);
            let fibRes = document.createElement('li');
            fibRes.innerHTML = `The fibonacci of <strong>${num}</strong> is <strong>${result}</strong>. Calculated at ${date}`;
            let under = document.createElement('hr');
            document.getElementById('resList').appendChild(fibRes);
            document.getElementById('resList').appendChild(under);
        }
    })
    .catch(error => {
        console.error(error);
    });
}

function fibFetch() {
  const fibserver = 'http://localhost:5050/fibonacci/';
  let number = document.getElementById("number").value;
  let fifty = document.getElementById("feedback");
  if (number > 50) {
    fifty.classList.add('show2');
    document.getElementById("result").innerHTML = "";
    document.getElementById("server-error").innerHTML = "";
    document.getElementById("server-error").classList.remove('show3');
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
          document.getElementById("result").innerHTML = "";
          document.getElementById("server-error").innerHTML = "server error: " + data;
          console.log(data);
        }
        else {
          document.getElementById("result").innerHTML = data.result;
          document.getElementById("server-error").innerHTML = "";
          listUpdate();
          console.log(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
