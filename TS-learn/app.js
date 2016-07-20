var isDone = false;
//isDone=1;
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        console.log('im ' + this.name);
    };
    return Person;
}());
