/* functions are created to have no side effects
The first time I heard this term in relation to JavaScript 
I just assumed that I knew what this means; anything unintended.
But it's more specific than that. It is something that can
mutate a function outside of its local environment
*/

let num = 0


function onlyAddOne(value) {
    return value + 1
}

onlyAddOne(num)
onlyAddOne(num)
onlyAddOne(num)