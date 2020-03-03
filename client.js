const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



//You are going to write a single JavaScript file to automatically calculate employee bonus for a company.
//Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object** with the following properties:

let newArray = [];



  // let newObject = {
  //   Name : employees[0].name,
  //   bonusPercentage : 0.04,
  //   totalCompensation :(1.04 * (employees[0].annualSalary)),
  //   totalBonus : (0.04 * (employees[0].annualSalary))
  // }

function newInformation(employee){
  let Name = employee.name;
   let bonusPercentage=0;
   let totalCompensation=0;
   let totalBonus = 0;
  
  if (employees[i].reviewRating <= 2){
    bonusPercentage=0;
  }else if(employees[i].reviewRating === 3){
    bonusPercentage=.04;
  }else if (employees[i].reviewRating === 4){
    bonusPercentage=.06;
  }else if(employees[i].reviewRating === 5){
    bonusPercentage=.1;
  }






