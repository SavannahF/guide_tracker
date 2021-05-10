// Not confident about the way this is set up as module.export and making sure it's importing properly into...index?
module.exports = {
    // Inquirer prompts
    menuPrompt: [
        {
            type : 'list',
            name : 'select',
            message: 'What would you like to do?',
            choices :[
                'View all Guides',
                'View all Guides by Department',
                'View all Guides by Manager',
                'View all Roles',
                'View all Departments',               
                'Add Guides',
                'Add Department',
                'Add Role',
                'Update Guide Role',
                'Update Guide Manager',
                'Remove Guide',
                'Exit'
            ]
        }
    ],

    // Add Department
    addDepartment : [
        {
            type : 'input',
            name : 'deptName',
            message : 'Please type in the new Department...'
        }
    ]
    ,

    // Add Role
    addRole : [
        {
            type : 'input',
            name : 'roleTitle',
            message : 'Please type in the new Role...'
        },
        {
            type : 'input',
            name : 'roleSalary',
            message : 'How much hourly or salary is associated with that Role?'
        }
    ]
    ,
    
    // Add Guide
    addGuide: [
        {
            type: 'input',
            name: 'firstName',
            message: "What is the guide's first name?"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the guide's last name?"
        }
    ]
};