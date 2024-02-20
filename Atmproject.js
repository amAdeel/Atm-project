import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("Atm Project Are you Ready"));
async function start() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "Please enter your userName"
        },
        {
            type: "number",
            name: "pin",
            message: "Please enter your Pin"
        },
        {
            type: "list",
            name: "Accounttype",
            choices: ["current", "saving"],
            message: "please choice your Account type?",
        },
        {
            type: "list",
            name: "trascationtype",
            choices: ["fast cash", "withdraw", "Balance enquiry"],
            message: "please chioce your trascation methode:",
            when(answer) {
                return answer.Accounttype == "current";
            }
        },
        {
            type: "list",
            name: "amount",
            choices: [1000, 2000, 3000, 5000, 10000, 20000, 50000],
            message: "Enter your Amount",
            when(answer) {
                return answer.trascationtype == "fast cash";
            },
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your Amount:",
            when(answer) {
                return answer.trascationtype == "withdraw";
            },
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your Amount:",
            when(answer) {
                return answer.Accounttype == "saving";
            },
        },
    ]);
    const balance = Math.floor(Math.random() * 10000000);
    if (answer.userName && answer.pin) {
        if (answer.trascationtype == "Balance enquiry") {
            console.log(balance);
        }
        if (balance >= answer.amount) {
            console.log(chalk.greenBright(`you have withdraw RS: ${answer.amount} `));
            console.log(chalk.greenBright("your remining balance is"), balance - answer.amount);
        }
    }
    else {
        console.log(chalk.redBright(`insuficient Balance! your current Balance is ${balance}`));
    }
    const answerContin = await inquirer.prompt([{
            type: "list",
            name: "useagain",
            choices: ["yes", "No"],
            message: "Do you want another transcation"
        }]);
    if (answerContin.useagain == "yes") {
        await start();
    }
    else {
        console.log(chalk.yellowBright("Thank you for using our Atm , Have a nice day"));
    }
}
start();
