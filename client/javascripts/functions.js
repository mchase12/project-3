//jshint esversion: 7

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);


//Requirment 3b
let bitBatBotOrNot = (n) => {
  let ans = "";
  if (n % 3 == 0) {
    ans += "Bit";
  }
  if (n % 5 == 0) {
    ans += "Bat";
  }
  if (n%7 == 0) {
    ans += "Bot";
  }
  if (n%3 != 0 && n % 5 != 0 && n%7 !=0){
    ans += "Not";
  }
  return ans;
}

//Requirment 3c.
let findAllbitBatBotOrNots1 = (arr) => {
  return arr.map(each=> `${each}:`+bitBatBotOrNot(each))
}


//Requirment 3d.
let findAllbitBatBotOrNots2 = (arr) => {
  let ans = [];
  for(each in arr){
    ans.push(arr[each]+":"+bitBatBotOrNot(arr[each]))
  }
  return ans;
}

let findAllbitBatBotOrNots3 = (arr) => {
  let ans = []
  for(each of arr){
    ans.push(each+":"+bitBatBotOrNot(each))
  }
  return ans;
}

let findAllbitBatBotOrNots4 = (arr) => {
  let output = [];
  arr.forEach((number)=> {
    output.push(bitBatBotOrNot(number));
  });
  return output;
}

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
