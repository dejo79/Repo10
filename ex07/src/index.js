function myFunction(lion) {
    var lion = {
        name: "Simba",
        legs: "4",
        tail: "1",
        roar: "roar-roar"
    };
    delete lion["roar"];
    return lion;
}
myFunction("roar");
console.log = myFunction;