//program for simple arithmetical calculations
const operatorVar = prompt('Enter operator (either +,-,*,/): ');
//taking operands
const input1 = parseFloat(prompt('Enter first number: '));
const input2 = parseFloat(prompt('Enter second number: '));
//results using conditional statements 
let result;
if(operatorVar == '+'){
    result = input1 + input2;
}
else if(operatorVar == '-'){
    result = input1 - input2;
}
else if(operatorVar == '*'){
    result = input1 * input2;
}
else{
    result = input1 / input2;
}
//display results 
alert('the results is : '+result);