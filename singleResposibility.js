/* SOLID principle. This is the S. Single Resposibility.
FP encourages the Single Resposibility. 
This is the so-well-worn-it's-threadbare example...
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