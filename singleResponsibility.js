/* SOLID principle. This is the S. Single Resposibility.
FP encourages the Single Resposibility. 
This is the used-so-often-its-threadbare example...
Instead of writing one big function called validateInputs
*/


// Not using Single Responsibility

const validateFormValues = formValues => {
    const { name, age } = formValues

    if (!name) {
        //...does some validation
        return false
    }

    if (!age) {
        //...does some validation
        return false
    }

    return true
}


// Using Single Responsibility

// Functions created to validate different things
const isValidName = name => {
    if (!name) {
        //...does some validation
    }
}
const isValidAge = age => {
    if (!age) {
        //...does some validation
    }
}

// Consolidates the validations
function validateFormValues(formValues) {
    const { name, age } = formValues

    if (!isValidFullName(name)) {
        return false
    }

    if (!isValidAge(age)) {
        return false
    }

    return true
}

// Another example takes this further...

/* This code takes an array of numbers represented as strings. 
   It then transforms the strings into integers.
   If a number is less than 100 then it will add that to another array 
   and eventually output the result
*/
const data = ["99", "100", "999"]

let result = [];

for (let i = 0; i < data.length; i++) {
    const num = parseInt(data[i]);

    if (num > 100) {
        result.push(num);
    }
}

// This code does exactly the same thing as the code above
const data = ["99", "100", "999"]

const stringToInt = str => parseInt(str)
const moreThan = compareTo => num => num < compareTo;

const result = data.map(stringToInt).filter(moreThan(100));



/* Code to find organic tea in a list of teas. 
   Only get teas that have a sustainability rating of more than 8
*/

const teaList = [{
    name: "Strawberry and Potassium",
    sustainability: 10,
    isOrganic: true
}, {
    name: "Plastic Loose Leaf",
    sustainability: 1,
    isOrganic: false
},
{
    name: "Tumeric and Sand",
    sustainability: 8,
    isOrganic: true
},
 {
    name: "Lemongrass and Dolphin",
    sustainability: 3,
    isOrganic: true
}];

let result = [];

for (let i = 0; i < teaList.length; i++) {
    if (teaList[i].isOrganic === true) {
        if (teaList[i].sustainability >= 8) {
            result.push(teaList[i])
        }
    }
}

// Or....
const teaList = [{
    name: "Strawberry and Potassium",
    sustainability: 10,
    isOrganic: true
}, {
    name: "Plastic Loose Leaf",
    sustainability: 1,
    isOrganic: false
},
{
    name: "Tumeric and Sand",
    sustainability: 8,
    isOrganic: true
},
 {
    name: "Lemongrass and Dolphin",
    sustainability: 3,
    isOrganic: true 
}];

const isOrganic = tea => tea.isOrganic

const sustainabilityRating = rating => teas => teas.sustainability >= rating

const bestTeas = teaList.filter(isOrganic).filter(sustainabilityRating(8));
