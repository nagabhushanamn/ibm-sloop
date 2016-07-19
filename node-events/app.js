/**
 * http://usejsdoc.org/
 */

// All objects that emit events are instances of the EventEmitter class.

var EventEmitter = require('events').EventEmitter;
var util=require('util');

var ee = new EventEmitter();

//ee.on('some-event', function() {
//	console.log('handling some-event');
//});
//
//ee.emit('some-event');

//--------------------------------------------------

//ee.on('new-user', function(err,user) {
//	if(err){
//		console.log('error on new-user');
//		return;
//	}
//	console.log('new user joined..'+user.name);
//});
//
//
//
//ee.emit('new-user',null,{name:'Nag'});
//ee.emit('new-user',{message:'something'},null);

//--------------------------------------------------
//
//ee.setMaxListeners(15);
//
//ee.on('some-event',function(){console.log('handler-1');});
//ee.on('some-event',function(){console.log('handler-2');});
//ee.on('some-event',function(){console.log('handler-3');});
//ee.on('some-event',function(){console.log('handler-4');});
//ee.on('some-event',function(){console.log('handler-5');});
//ee.on('some-event',function(){console.log('handler-6');});
//ee.on('some-event',function(){console.log('handler-7');});
//ee.on('some-event',function(){console.log('handler-8');});
//ee.on('some-event',function(){console.log('handler-9');});
//ee.on('some-event',function(){console.log('handler-10');});
//ee.on('some-event',function(){console.log('handler-11');});
//
//
//ee.emit('some-event');

//--------------------------------------------------

//ee.once('some-event', function() {
//	console.log('once..');
//});
//ee.emit('some-event');
//ee.emit('some-event');


//--------------------------------------------------

//function handler() {
//	console.log('handling..');
//}
//
//ee.on('some-event', handler);
//
//ee.emit('some-event');
//
//ee.removeListener('some-event',handler);
//
//ee.emit('some-event');

//--------------------------------------------------


// Door module

function Door(){
}
Door.prototype.open=function(){
	console.log('Door opened...');
	this.emit('door-open',null,{door:2,floor:9});
};
Door.prototype.close=function(){
	console.log('Door closed...');
	this.emit('door-close',null,{door:2,floor:9});
};
util.inherits(Door, EventEmitter);


var door=new Door();



var light={
		setup:function(){
			door.on('door-open',function(err,event){
				console.log('LIGHT ON - '+event.door);
			});
			door.on('door-close',function(err,event){
				console.log('LIGHT OFF - '+event.door);
			});
		}
};
light.setup();


var AC={
		setup:function(){
			door.on('door-open',function(err,event){
				console.log('AC ON - '+event.door);
			});
			door.on('door-close',function(err,event){
				console.log('AC OFF - '+event.door);
			});
		}
};
AC.setup();


setTimeout(function() {
	
	door.open();
	
	setTimeout(function() {
		door.close();
	}, 5000);

	
}, 5000);









