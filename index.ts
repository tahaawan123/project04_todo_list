#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;

console.log(chalk.cyan("\n\t<<<==========================================>>>"));
console.log(chalk.gray("\t\t\tWelcome to Todo List"));
console.log(chalk.cyan("\t<<<============================================>>>"));





while(condition){
let addTask=await inquirer.prompt([
    {
        name : "firstQuestion",
        type : "input",
        message : chalk.magentaBright("what would you like to add in your Todos ?"),

    },
    {
        name : "secondQuestion",    
        type : "confirm",
        message : chalk.bgMagentaBright("Do you want to add another Todo ?"),
        default : "true"
    }
]) ;
todos.push(addTask.firstQuestion);
console.log(todos);
condition = addTask.secondQuestion;
}