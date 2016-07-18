

// whe we need 'this' keyword?

// var person={
//     pname:'Nag',
//     sayName:function(){
//         console.log('im '+this.pname);
//     }
// };

// var p=person;
// person={pname:'Ria'};

// p.sayName();

//---------------------------------------------

function sayNameForAll(){
    console.log('im '+this.name);
}

// var p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
// var p2={name:'Ria',sayName:function(){console.log('im '+this.name)}};

var p1={name:'Nag',sayName:sayNameForAll};  // static function-binding ( method )
var p2={name:'Ria',sayName:sayNameForAll};


// sayNameForAll(); // im ???  // function-invocation ( this --> global-obj )
// p1.sayName();  // im Nag    // method-invoccation  ( this --> invoker-obj )
// p2.sayName();  // im Ria

//---------------------------------------------

var p1={name:'Nag'};
var p2={name:'Ria'};

var greetUtil={
    sayName:function(message,from) {
     console.log(message+' im '+this.name+":"+from);   
    }
};

// greetUtil.sayName.call(p1,"Hello","BLR");  // dynamic method binding
// greetUtil.sayName.call(p2,"Hi","CHN");

// greetUtil.sayName.apply(p1,["Hello","BLR"]);  // dynamic method binding
// greetUtil.sayName.apply(p2,["Hi","CHN"]);

// var newF=greetUtil.sayName.bind(p1,"Hello","BLR");
// newF();
// newF();

//-----------------------------------------------------

function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function() {
        console.log('im '+this.name);
    }
}

var p1=new Person('Nag',32); // constructor invocation  ( this --> new-obj )
var p2=new Person('Ria',1);
//.......


// -------------------------------------


// in JS ,we can invoke in 4 ways

/*

1. function-invocation ( this --> globa-obj )
2. method-invocation   ( this --> invoker-obj)
3. call/apply/bind invocation ( this --> arg-obj )
4. constructor-invocation ( this --> new-obj )

*/