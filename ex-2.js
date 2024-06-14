//Exercise #2: At Least Five Function

function countPassedScore (array) {
  let result=0;
  for (let index=0; index<array.length; index++) {
    if (array[index]>70) {
      result = result+1 
    } else {
      result = result+0
    };
  };
  return result
}

function atLeastFive(array, operation) {
  // Start coding here
  let result;
  if (operation(array) >= 5) {
    result = console.log(`ผ่านเกณฑ์ ✅`)
  } else {
    result = console.log(`ไม่ผ่านเกณฑ์ ❌`)
  }
  return result

}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

console.log(countPassedScore(studentScoresRoom1))
console.log(countPassedScore(studentScoresRoom2))
console.log(countPassedScore(studentScoresRoom3))

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, countPassedScore)
scoreRoom2Result = atLeastFive(studentScoresRoom2, countPassedScore)
scoreRoom3Result = atLeastFive(studentScoresRoom3, countPassedScore)
