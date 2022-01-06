/* functions are created to have no side effects
The first time I heard this term in relation to JavaScript 
I just assumed that I knew what this means; anything unintended.
But it's more specific than that. It is something that can
mutate a function outside of its local environment

We need to make a function pure in order for it to be free 
from side effects.
What makes this function pure is:
An example of this:
* we should pass in the value each time the function runs
* the variable num is created in the global scope, so we should 
call it each time we call the function
*/

let num = 0

function onlyAddOne(value) {
    return value + 1
}

onlyAddOne(num)
onlyAddOne(num)
onlyAddOne(num)

/* The added advantage on creating a Pure Function is that the function
will always be easily testable.
*/

// ...
