const numberBtn = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#calculate');
const calculationField = document.querySelector('#calculationField');
let display = document.querySelector('#h1');
let currentValue;
let currentOp;
display.innerHTML = 0;
//let lastInput = display.innerHTML.slice

updateDisplay = (input) => {    
    console.log(input)
    console.log("input: " + input)
    console.log("input type: " + typeof(input))
    let oldInput = parseInt(display.innerHTML.slice(-1));
    console.log("parsed input: " + parseInt(oldInput))

    if(display.innerHTML = 0 && typeof(input) === 'number'){
        display.innerHTML += input
        oldInput = (input);
        console.log('number input')
        console.log("last input: " + oldInput)
    } else if (typeof(input) === 'string') {
        console.log('op Input')
        if(typeof(oldInput) === 'number')
        {
         display.InnerHTML += ` ${input} `
         oldinput = input;   
         
        } else if (typeof(oldInput) === 'string'){
            console.log('needs replacing')
            display.innerHTML.replace(/.$/, `${input}`)
            //appendchild?
        }        
    }
    console.log("old input: " + oldInput)
    console.log("old input type: " + typeof(oldInput)) 
}
operate = () => {
    
}
clearField = () => {
    calculationField.innerText = ''
    display.innerHTML = ''
    console.log('clear function reached')
}
calculate = () => {
    console.log('calculate function reached')
    //let calculation = title.innerHTML.toString()
    //console.log(calculation)
    console.log(lastInput)
    console.log(typeof(lastInput))
}


clearButton.addEventListener("click", clearField);

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', findNum => {
        let currentValue =parseInt(numberBtn[i].innerText)
        
        updateDisplay(currentValue, 0) 
              
    })
}  

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', findOp => {            
        let currentOp = operators[i].value      
        updateDisplay(currentOp)     
    })
}  
 
equalsButton.addEventListener('click', calculate);
