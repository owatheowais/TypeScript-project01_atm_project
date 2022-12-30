/*************************************************
Full Name: Syed Abu Owais Bin Nasar
Discord Username: owaisnasarubit#7433
Roll No.: PIAIC83125
Email: owatheowais@gmail.com
Twitter: @owatheowais
GitHub Profile URL: https://github.com/owatheowais
Linkedin: https://www.linkedin.com/in/abuowais/
WhatsApp Number: 03442124471
**************************************************/
const inquirer = require("inquirer");

async function askQuestion() {
    const questions = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "string",
            name: "user",
            message: "Enter your Username:",
        },
        {
            type: "string",
            name: "password",
            message: "Enter your Pin Code:",
            when(answers: { user: any; }) {
                return answers.user;
            }
        },
        {
            type: "list",
            name: "acctype",
            message: "Please select your Account type:",
            choices: ['Current Account', 'Saving Account'],
            when(answers: { password: any; }) {
                return answers.password;
            }
        },
        {
            type: "list",
            name: "options",
            message: "What do you want to do?",
            choices: [ 'Balance Inquiry', 'Fast Cash'],
            when(answers: { acctype: any; }) {
                return answers.acctype;
            }
        },
        {
            type: "list",
            name: "fastcash",
            message: "Select Cash Amount?",
            choices: ['500', '1,000', '3,000', '5,000', '10,000', '20,000'],
            when(answers: { options: string; }) {
                return answers.options == "Fast Cash";
            }
        }
    ])
        .then((answers: { fastcash: number; user: any; password: any; options: string; }) => {
       
        var randomnum = 10000;        
            if (randomnum > answers.fastcash) {
                console.log(`Cash Withdrawl of ${answers.fastcash} is successful!\nPlease collect the cash`);
                console.log(`You Balance amount is ${randomnum - answers.fastcash}`);
            }
            else {
                console.log("Insuficient funds!");
            }
        
        if (answers.user && answers.password && answers.options == "Balance Inquiry") {
            console.log(`You Balance amount is ${randomnum}`);
        }
    });
}
async function startagain() {
    let again;
    do {
        await askQuestion();
        again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to again transaction?",
            default: "(Y or N)"
        });
    } while (again.restart == 'y' || again.restart == 'Y');
}
startagain();