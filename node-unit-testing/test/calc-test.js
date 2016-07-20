/**
 * http://usejsdoc.org/
 */

// using Jasmine
/*
 * UnitTesting ---> AAA
 * 
 * A --> Arrange, A --> Act, A --> Assert
 * 
 */

describe('calc suite', function() {

	beforeEach(function() {
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	});

	it("1+2=3", function(done) {
		calc.add(12, 13);
		setTimeout(function() {
			expect(calc.result).toBe(25);
			done();
		}, 5000);
	});

});