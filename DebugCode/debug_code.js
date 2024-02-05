function performOperation() {
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    if(!isNaN(num1) && !isNaN(num2)) {
        let result = multiply(num1, num2);
        display(result);
    }
    else {
        display("Enter valid numbers");
    }
}
function multiply(x,y) {
    debugger;
    return x*y;
}
function display(res) {
    document.getElementById("result").textContent = `The result is : ${res}`;
}