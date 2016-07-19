/**
 * http://usejsdoc.org/
 */


/*
 *  thread-1
 *  
 *  --> open file ........................
 *  --> create buffer
 *  --> read file ..........................
 *  --> close
 * 
 * 
 */

var fs=require('fs');


var fd;
var buf=new Buffer(10000);

fd=fs.openSync('menu.txt', 'r');//................
var content=fs.readFileSync(fd, 'utf8'); //.................
console.log(content);






