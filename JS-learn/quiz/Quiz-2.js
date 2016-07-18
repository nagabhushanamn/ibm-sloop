function start() {

	function Trainer(name) {
		this.name = name;
		this.doTeach = function() {
			console.log(this.name + " teaching JS");
			var self = this;
			function learn() {
				console.log(this.name + ' learning JS from ' + self.name);
			}
			return learn;
		}
	}

	var trainer1 = new Trainer('Nag'); // constructor-invocation

	var learnFunc = trainer1.doTeach(); // method-inovation

	var emp1 = {
		name : 'A'
	};
	var emp2 = {
		name : 'B'
	};

	learnFunc.call(emp1); // call/apply/bind invocation
	learnFunc.call(emp2);

}

start(); // function-invocation
