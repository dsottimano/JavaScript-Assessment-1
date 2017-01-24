//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function sumAll(num1, num2, num3) {

    if (typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number') {
        console.log("You gave an input which wasn't a number but I'll try and sum it anyway")

        var totalSum = 0
        var totalSum = parseInt(num1) + parseInt(num2) + parseInt(num3)
        console.log(totalSum)
    }
}

sumAll(num10, string8, one)

//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function divThree() {
    var numberBox = []
    for (var i = 20; i < 100; i++) {
        if (i % 3 == 0) {
            numberBox.push(i)
        }

    }

    console.log(numberBox)
}

divThree()
//3. find the class average given the following test scores



function average () {

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
var totalSum = 0
for (let num of scores) {
 totalSum += num
}



console.log(totalSum / scores.length)
}

average ()