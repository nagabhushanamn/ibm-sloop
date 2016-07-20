/**
 * http://usejsdoc.org/
 */


var nums=[1,2,3,9,8,7,6,5,4,10];
//nums.sort(function(a,b){return a-b;});

// ES-6
nums.sort((a,b)=>{return a-b;});

console.log(nums);

//----------------------------------------

function Person(name,age){
	this.name=name;
	this.age=age;

	//	var self=this;
	//	setInterval(function() {
	//		self.age++;
	//		console.log(self.age);
	//	}, 1000);
	
	var x=10;
	
	setInterval(()=>{this.age=this.age+x;console.log(this.age);x=x+100},1000);
	
}


var p=new Person('ria',0);