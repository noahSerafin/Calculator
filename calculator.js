const numberBtn = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#calculate');
const calculationField = document.querySelector('#calculationField');
let display = document.querySelector('#n1');
let opDisplay = document.querySelector('#op');
let display2 = document.querySelector('#n2');
let currentValue;
let currentOp;
let displayOp;
display.innerHTML = 0;
//let lastInput = display.innerHTML.slice

updateDisplay = (input) => {    
    console.log(input)
    console.log("input: " + input)
    console.log("input type: " + typeof(input))
   
    if (opDisplay.innerHTML === ""){
        if(display.innerHTML == 0){
            display.innerHTML = input;
        }   else {
            display.innerHTML += input;
        }  
    } else {
        display2.innerHTML += input;
    }
       
}

updateOpDisplay = (input) => {
    if (opDisplay.innerHTML === ""){ 
    opDisplay.innerHTML += input;
    } else if (opDisplay !== ""){
        opDisplay.innerHTML = input;
    }
}
clearField = () => {
    display.innerHTML = ''
    opDisplay.innerHTML = ''
    display2.innerHTML = ''
    console.log('clear function reached')
}

calculate = () => {
    console.log('calculate function reached')
    //let calculation = title.innerHTML.toString()
    //console.log(calculation)
    let num1 = parseFloat(display.innerHTML)
    let num2 = parseFloat(display2.innerHTML)
    console.log(num1)
    console.log(num2)

    switch(opDisplay.innerHTML) {
        case "÷": answer = num1 / num2 
        break;
        case "×": answer = num1 * num2
        break;
        case "+": answer = num1 + num2
        break;
        case "-": answer = num1 - num2
        break;
        default:
            return
    }
    display.innerHTML = answer
    opDisplay.innerHTML = ''
    display2.innerHTML = ''
    //console.log("num1: " num1)
    //console.log("num2: " num2)    
}

clearButton.addEventListener("click", clearField);

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', input => {
        let currentValue = numberBtn[i].innerText       
        updateDisplay(currentValue)
    })
}  

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', input => {            
        let currentOp = operators[i].value
        let displayOp = operators[i].innerHTML      
        updateOpDisplay(displayOp, currentOp)             
    })
}  
 
equalsButton.addEventListener('click', calculate);
