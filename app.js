const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

/*const fs = require('fs');
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(name,github);

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Checkout index.html to see the output!');
});*/

/*const printProfileData = profileDataArr => {
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};
printProfileData(profileDataArgs);*/