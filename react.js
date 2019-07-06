// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

// import React, { Component } from 'react';

// export default class App extends Component {
//   render(){
//     return(
//       <div>
//         I am a component  
//       </div>
//     );
//   }
// }

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below. 


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
let new_stuff = ''
for(let i = 0; i < stuffArray.length; i++){
  new_stuff += `${stuffArray[i]} is at index: ${i}\n`
}
console.log(new_stuff)

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
let prices = [111, 9, 58];
var steal = function(arr){

  // your logic here
  arr.sort(function(a, b){return a-b})
  console.log(arr)
  return arr[0] 
}

console.log(steal(prices))
