let ageButton = document.querySelector(".age-button")

// task 1:  declare a variable called inputName and assign it to the class called "name" using querySelector.
let inputName = document.querySelector(".name")
//inputName is set to whatever .name is when searched in HTML


// task 2: declare a variable called inputYear and assign it to the class called "year" using querySelector.
let inputYear = document.querySelector(".year")

// task 3: declare a variable called message and assign it to the class called "message" using querySelector.
let message = document.querySelector(".message")

// task 4: declare a variable called currentYear and set it equal to the current year.
let currentYear = 2022
// task 5: declare a variable called userName. Do not store a value yet.

let userName;
//userName is a variable

// task 6: declare a variable called userYear. Do not store a value yet.

let userYear;

// task 7: declare a variable called age. Do not store a value yet.

let age;



ageButton.onclick = function() {

  // task 8: assign a value to userName. Set it equal to the value of inputName.
 userName = inputName.value
  //the userName is the value that inputName was set to

  // task 9: assign a value to userYear. Set it equal to the value of inputYear. This is a number! Be sure to use the Number function on it!
 userYear = Number(inputYear.value)

  // task 10: assign a value to age. We need to calculate this value by subtracting the userYear from currentYear
 age = Number(currentYear - userYear)
  //age is a number that is currentYear (which is already set to a value) minus the userYear (line 38, which was manually set as a value)

  // task 11: using .innerHTML, update message to display the userName and age. Use string interpolation for this to have a personalized message like: ________, it looks like you are (turning) _____ years old!

message.innerHTML = `${userName} is turning ${age} year old!`
  //message already exists in HTML. You are making it so that the inner HTML for the variable (which the HTML class is set to) is the above text. Note: string interpolation is used here.
}
