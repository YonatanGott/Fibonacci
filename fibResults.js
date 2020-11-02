document.getElementById("btn").addEventListener('click', fibFetch);

function showSpinner() {
  let spinner = document.getElementById("spinner");
  spinner.classList.add('show');
  setTimeout(function () { spinner.classList.remove('show') }, 600);
}

function predicateBy(prop){
  return function(a,b){
     if (a[prop] > b[prop]){
         return 1;
     } else if(a[prop] < b[prop]){
         return -1;
     }
     return 0;
  }
}
//Found on stackOverFlow 

function listUpdate(){
const fibserver = 'http://localhost:5050/getFibonacciResults';
fetch(fibserver)
    .then(res => {
        return res.json();
    })
    .then(data => {
        let resArray = data.results;
        resArray.sort( predicateBy("createdDate") );
        for (let i = 0; i < 3; i++){
            let lastRes = resArray[resArray.length - 1-i];
            let result = lastRes.result;
            let date = Date(lastRes.createdDate);
            let num = lastRes.number;
            let newRes =  document.querySelector('.list'+i);
            newRes.innerHTML = `The fibonacci of <strong>${num}</strong> is <strong>${result}</strong>. Calculated at ${date}`;
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
        }
        else {
          document.getElementById("result").innerHTML = data.result;
          document.getElementById("server-error").innerHTML = "";
          listUpdate();
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
