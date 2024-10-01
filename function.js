function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value)
    const secondNumber = parseFloat(document.getElementById("secondNumber").value)
    const operator = document.getElementById("operator").value
    let result;
    if (operator==="+ (ADD)"){
        result= firstNumber+secondNumber
    } else if (operator==="- (SUBTRACT)"){
        result=firstNumber-secondNumber
    } else if(operator==="* (MULTIPLY)"){
        result=firstNumber*secondNumber
    }else if (operator==="/ (DIVIDE)"){
        result=firstNumber/secondNumber
    } else result= "Please select an operation to perform"
    document.getElementById("result").innerText="result:" + result
}