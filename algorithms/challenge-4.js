// function calculateGrade(arr) {
//     let sum = 0;

//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];
//       }
     

//  const average = sum / arr.length;
//  if (average >= 90) {
//     return 'A';
//   } else if (average >= 80) {
//     return 'B';
//   } else if (average >= 70) {
//     return 'C';
//   } else if (average >= 60) {
//     return 'D';
//   } else if (average >= 50) {
//     return 'E';
//   } else if (average <= 50){
//     return 'F';
//   }

// }

// console.log(calculateGrade([89, 50, 40, 90, 77]));
// console.log(calculateGrade([19, 5, 42, 2, 77]));
//   module.exports = calculateGrade
function calculateGrade(arr) {
    let sum = 0;

    for (i=0; i<arr.length; i++){
        sum +=arr[i];
    }

    const average = sum /arr.length;
    if (average >=90){
        return 'A';
    } else if(average >=80){
        return "B";
    }  else if(average >=70){
        return "C"
    }  else if(average >=60){
        return "D";
    }  else if(average >=50 ){
        return "E";
    }  else if(average<=40){
        return "F";
    }

    }
    console.log(calculateGrade([95,93,92]));
    console.log(calculateGrade([89,80,70,90,77]));
    console.log(calculateGrade([89,70,80,90,77]));
        module.exports = calculateGrade



    

