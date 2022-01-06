// Functions can be returned from other functions

const someMessage = function (message) {
    return `You ${message}`
};

const sayMessage = goingToSayIt => message => goingToSayIt(message);

const notifyUser = sayMessage(someMessage);

notifyUser("WON!!")