// Functions can be passed as arguments to other functions

const question = function(text) {
    return `Do you want to build a ${text}?`
};

const elsa = (fn, text) => {
    return fn(text)
};

elsa(question, "Snowman")