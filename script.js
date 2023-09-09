


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function operate(firstNumber,operator,secondNumber){

    switch(operator){

        case '+' : 
        return add(firstNumber,secondNumber);
        

        case '-' : 
        return subtract(firstNumber,secondNumber);
        

        case 'x' : 
        return multiply(firstNumber,secondNumber);
        

        case '/' : 
        return divide(firstNumber,secondNumber);
        
        default:
            return "Invalid";
    }
    
}

let currentInput="";
let firstNumber =null;
let operator=null;

const screen = document.querySelector('.screen');

const numberButtons = document.querySelectorAll('.numButton');
numberButtons.forEach(button => {
    button.addEventListener('click',function(e){
        currentInput += e.target.innerText;
        updateDisplay(currentInput);

    });

});

function updateDisplay(value) {
    screen.innerText = value;
}

function clearDisplay(){
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click',() =>{
        currentInput="";
        firstNumber=null;
        operator=null;
        updateDisplay(currentInput);
});
}

clearDisplay();


const operatorButtons = document.querySelectorAll('#division, #multiplication, #subtraction, #addition');
operatorButtons.forEach(button =>{
button.addEventListener('click', function(e){
    if(firstNumber==null && currentInput!=""){  //A number button has been pressed, no other previously have been pressed
        firstNumber=parseFloat(currentInput);
        operator=e.target.innerText;    //get the text on the button to set the operator to that value
        currentInput="";        //reset current input
    }else if(firstNumber !=null && currentInput !=""){     //if there has already been a previous operation.
        firstNumber= operate(firstNumber, operator, parseFloat(currentInput));
        operator= e.target.innerText;
        currentInput="";
        updateDisplay(firstNumber);
    }
});




document.getElementById('equals').addEventListener('click', () => {
    if (firstNumber !== null && currentInput !== "") {
        let result = operate(firstNumber, operator, parseFloat(currentInput));
        updateDisplay(result);
        firstNumber = result;  // Set result as firstNumber for further calculations
        currentInput = "";
    }
});

});
