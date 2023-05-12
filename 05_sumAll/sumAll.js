const sumAll = function(one, two) {
    if (typeof one !== 'number' || typeof two !== 'number') {
        return "ERROR";
    }
    if( one < 0 || two < 0){
        return "ERROR";
    }
 
    let sum = 0;
    let mayor= 0;
    let menor = 0 ;
    if( one > two){
        mayor = one;
        menor = two;
    }else{
        mayor = two ;
        menor = one;
    }
    for (let i = menor; i < mayor; i++) {
        sum = sum + i;
    }
    return sum + mayor;
};



// Do not edit below this line
module.exports = sumAll;
