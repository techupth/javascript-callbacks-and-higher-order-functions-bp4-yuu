// Exercise #1: For Each Function

function salariesPlus (amount) {
  let result=0;
  result = result+amount;
  return result
};

console.log(salariesPlus(5000))


function forEach(array, operation) {
  // Start coding here
  let result =[];
  for (let index=0; index<array.length; index++) {
    result.push(array[index]+salariesPlus(5000));
  }  
  return result
}

//console.log(forEach(employeeSalaries, plus))

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

console.log(forEach(employeeSalaries, salariesPlus))

// Using `forEach` function here

newEmployeeSalaries = forEach(employeeSalaries, salariesPlus)

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
