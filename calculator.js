var collectNums;
//displayes the digits to the screen
function displayDigits(digit){
    document.getElementById("inputs").innerHTML +=  digit.value;
}

//performs the arithmetic operation
function doAdd(){
    collectNums = document.getElementById("inputs").innerHTML;
    var all = collectNums.split("+");
    console.log(all);
    var allNumbers = all.map(Number);
    console.log(allNumbers);
    var additionResult = allNumbers.reduce(function(total, num){
        return total + num;
    });
    console.log(additionResult);
    displayFinalResult(additionResult);
}


//displays the final result
function displayFinalResult(result){
    document.getElementById("inputs").innerHTML = result;
}