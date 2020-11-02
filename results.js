
const fibserver = 'http://localhost:5050/getFibonacciResults';

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
            let fibRes = document.createElement('li');
            fibRes.classList.add('list'+i);
            fibRes.innerHTML = `The fibonacci of <strong>${num}</strong> is <strong>${result}</strong>. Calculated at ${date}`;
            let under = document.createElement('hr');
            document.getElementById('resList').appendChild(fibRes);
            document.getElementById('resList').appendChild(under);
        }
    })
    .catch(error => {
        console.error(error);
    });


