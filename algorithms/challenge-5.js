function filterList(arr) {

    let content = [];



    for(i=0; i<=arr.length; i++){
        if (typeof arr[i]===`number`){
            content.push(arr[i])
        }
    }

    return content


 
 }

 console.log(filterList([20,'30',-10,'36',-27,38,`33`,-11]));

  module.exports =filterList