// var firstName = prompt("What is your first name?");

// alert ("...and if you don't mind...;");

// var lastName = prompt("What is your last name?");

// var age = prompt("What is your age");

// var days = age * 365;

// console.log ('Hello ' + firstName + " " + lastName + '.') 

// console.log ("I see you're " + age + " which is" + days + " so you can go right in.")

var friends = ['josh','chris','ryan','dustin'];



friends.push("Nicole");


function change() {
    document.getElementById("h1").innerHTML=friends[4];
}

var sample = friends.slice(1,3);

console.log(sample);