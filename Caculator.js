function fibonacci(){
    let num, result, first = 0, second = 1,i;
    num = Math.floor(Math.random() * 20) + 1;
    for ( i=2; i<=num; i++){
        result  = first + second;
        first = second;
        second = result;
    }

    document.getElementById("fib").innerHTML = "The Fibonacci of "+num+" is "+ result;
}