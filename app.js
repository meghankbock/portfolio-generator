const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username:',
          validate: githubInput => {
              if (githubInput) {
                  return true;
              } else {
                  console.log('Please enter your Github username!');
                  return false;
              }
          }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:',
          when: ({ confirmAbout }) => {
              if (confirmAbout) {
                  return true;
              } else {
                  return false;
              }
          }
        }
      ]);
    };

const promptProject = portfolioData => {
    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
        =================
        Add a new Project
        =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Project?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the Project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a Project description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this Project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your Project. (Required)',
            validate: githubLinkInput => {
                if (githubLinkInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Github link');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this Project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another Project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }
        else {
            return portfolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData)
    });

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