
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


