import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type : "number",
        name : "num1",
        message : "Enter the first number",
    },
    {
        type : "number",
        name : "num2",
        message : "Enter the second number",
    },
    {
        type : "list",
        name : "operator",
        message : "Select the operator",
        choices : ["Addition", "Subtraction", "Multiplication", "Division"],
    }
])

let result : number;
switch (answer.operator){
    case "Addition":
        result = answer.num1 + answer.num2;
        console.log("The answer of addition is: "+ result);
        break;

    case "Subtraction":
        result = answer.num1 - answer.num2;
        console.log("The answer of Subtraction is: "+ result);
        break;

    case "Multiplication":
        result = answer.num1 * answer.num2;
        console.log("The answer of multiplication is: "+ result);
        break;

    case "Division":
        result = answer.num1 / answer.num2;
        console.log("The answer of division is: "+ result);
        break;


}

    

