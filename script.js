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

