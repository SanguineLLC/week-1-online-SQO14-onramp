function countTruthy(arr) {
let count = 0

for(let i = 0; i < arr.length; i++){
    if (arr[i]){
       count++;
    }
}
return count;
}

console.log(countTruthy([2,'', 0, 17, 20]))
console.log((countTruthy(['', 0, 0, undefined, 7])))
console.log(countTruthy([16, 3, 3, 2]))

module.exports = countTruthy