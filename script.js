// Part 1: Stack Overflow
let counter = 0

function recursive(){
    counter++
    recursive()
}

try {
   recursive()
} catch (error) {
    console.log(error);
    console.log(counter);
}

// Part 2: Trampolines

// const facto = (nestedArray) => {
    
//   }

// const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
//   }
  

// const nestedArray = [1, [2, [3, [4, 5]]], 6, [7, [8, 9]]];

// console.log(trampoline(facto(nestedArray)))
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(trampoline(facto(nestedArray)));
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
