/**
 * http://usejsdoc.org/
 */
"use strict"

// 
//var person={
//		name:''
//};

// to check property existence

// way-1

//if(person.name){
//	console.log('name property exist...');
//}

// way-2
//if("name" in person){
//	console.log('name property exist...');
//}

//----------------------------------------------


//var person={
//		name:'Nag',
//		age:32
//};

//Object.defineProperty(person, 'name', {configurable:false,writable:false});

//Object.defineProperty(person, 'name', {configurable:true});
//delete person.name;

//person.name="";


//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);

//----------------------------------------------------



var person={
		_name:'Nag',  // data property
		set name(newName){  // accessor property
			if(newName){
				this._name=newName;
			}
		},
		get name(){
			return this._name;
		}

		
};

person.name='Ria'; // set
console.log(person.name); // get







