
let number = [1, 2, 3, 4, 5, 6];

let sum = 0
number.forEach(function (element) {
    sum += element
   })

console.log(sum, number.reduce((a, b) => a * b))
