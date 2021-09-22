var lion = {
    name: "Simba",
    legs: "4",
    tail: "1"
};
function myFunction(propName, propValue) {
    lion["roar"] = "roar-roar";
    return lion;
}
myFunction("roar");
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;