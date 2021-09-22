var myPet = {
    species: "Dog",
    name: "Max",
    legs: "4",
    friends: ["Blackie", "Brownie"]
}
function myFunction(myObject) {
    return myObject;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };