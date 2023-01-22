/* Get user input using prompt(“Enter your age:”). If user is 18 or older,
give feedback:'You are old enough to drive' but if not 18 give another
feedback stating to wait for the number of years he needs to turn 18. */

// let age = prompt("Enter your age:")
// let ageTag = document.getElementById("output")
// age >= 18 ?
//     ageTag.innerHTML = "You are old enough to drive"
//     : ageTag.innerHTML =`You are left with ${18-age} years to drive`

/* Compare the values of myAge and yourAge using if … else. Based on the
comparison and log the result to console stating who is older (me or you).
Use prompt(“Enter your age:”) to get the age as input. */

// let age = prompt("Enter your age");
// let ageMe = 27;
// let ageTag = document.getElementById("output")

// if (age > ageMe) {
//     ageTag.innerHTML = `You are ${age-ageMe} years older than me.`
// } else {
//     ageTag.innerHTML = `You are ${ageMe-age} years younger than me.`
// }

/* If a is greater than b return 'a is greater than b' else
'a is less than b'. Try to implement it in two ways */

// let a = 4, b = 3;
// if (a>b) {
//     console.log(`${a} is greater than ${b}`)
// } else {
//     console.log(`${a} is less than ${b}`)   
// }

// a>b 
//     ? console.log(`${a} is greater than ${b}`)
//     : console.log(`${a} is less than ${b}`)

/* Even numbers are divisible by 2 and the remainder is zero.
How do you check, if a number is even or not using JavaScript? */

// let number = prompt("Enter number")
// let outputTag = document.getElementById("output")

// number%2 > 0
//     ? outputTag.innerHTML = `${number} is an odd number`
//     : outputTag.innerHTML = `${number} is an even number`

/* Write a code which can give grades to students according to theirs scores:
    90-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

// const score = prompt("Enter your score")
// const outputTag = document.getElementById("output")
// let grade = "";

// switch (true) {
//     case (score > 89): grade = "A"
//         break
//     case (score > 69): grade = "B"
//         break
//     case (score > 59): grade = "C"
//         break
//     case (score > 49): grade = "D"
//         break
//     case (score > 0): grade = "F"
//         break
//     default: outputTag.innerHTML = `${score} is not number of score` 
// }

// outputTag.innerHTML = `Yeah! Your grade is ${grade}`

/* Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :

    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
*/

// const seasons = {
//     autumn : ["September", "October", "November"],
//     winter : ["December", "January", "February"],
//     spring : ["March", "April", "May"],
//     summer: ["June", "July", "August"]
// }

// const month = prompt("Enter month");
// const outputTag = document.getElementById("output")
// let seasonPrint = false;

// switch (true) {
//     case (month == seasons.autumn[0] || month == seasons.autumn[1] || month == seasons.autumn[2]) :
//         seasonPrint = "Autumn"; break
//     case (month == seasons.winter[0] || month == seasons.winter[1] || month == seasons.winter[2]) :
//         seasonPrint = "Winter"; break
//     case (month == seasons.spring[0] || month == seasons.spring[1] || month == seasons.spring[2]) :
//         seasonPrint = "Spring"; break
//     case (month == seasons.summer[0] || month == seasons.summer[1] || month == seasons.summer[2]) :
//         seasonPrint = "Summer"; break
//     default : outputTag.innerHTML = `${month} is not month`
// }

// if (seasonPrint) outputTag.innerHTML = `${month}. Season is ${seasonPrint}.`

/* Check if a day is weekend day or a working day.
Your script will take day as an input. */

// const day = prompt("Enter day").toLowerCase();
// const outputTag = document.getElementById("output")
// let dayPrint = false;

// switch (true) {
//     case (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"):
//         dayPrint = "working day"; break
//     case (day == "saturday" || day == "sunday"):
//         dayPrint = "weekend"; break
//     default: dayPrint = "not found"
// }

// outputTag.innerHTML = `${day} is a ${dayPrint}.`

/* Write a program which tells the number of days in a month. */

// const month = prompt("Enter month").toLowerCase();
// const outputTag = document.getElementById("output")
// let monthPrint = false;

// switch (true) {
//     case (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december"):
//         monthPrint = "31"; break
//     case (month == "april" || month == "june" || month == "september" || month == "november"):
//         monthPrint = "30"; break
//     case (month == "february"):
//         monthPrint = "29"; break
//     default: outputTag.innerHTML = `${month} not found.`
// }

// if (monthPrint) outputTag.innerHTML = `${month} has ${monthPrint} days.`