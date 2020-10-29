function fibonacci(){
    let num, result, first = 0, second = 1,i;
    num = document.getElementById("number").value;
    for ( i=2; i<=num; i++){
        result  = first + second;
        first = second;
        second = result;
    }
    document.getElementById("result").innerHTML = result;
}