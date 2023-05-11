const repeatString = function(word, times) {
    let resultW = "";
    if(times < 0){
        return "ERROR"
    }
    for (let i = 0; i < times; i++) {
        resultW = resultW.concat(word) ;
        
    }
    return resultW
};

// Do not edit below this line
module.exports = repeatString;
