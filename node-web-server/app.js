/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');
var server = http.createServer(); // EventEmitter

server.on('request', function(req, res) {
	console.log('new-request received...');
	
	//	res.writeHead(200, {
	//		'ContentType' : 'text/plain'
	//	});
	//	res.write("welcome to node.js powered web-server");
	//	res.end();
	
	//	fs.readFile('video.mp4', function(err, data) {
	//		res.writeHead(200, {
	//		'Content-Type' : 'video/mp4'
	//		});
	//		res.write(data);
	//		res.end();
	//	});
	
	
	res.writeHead(200, {
		'Content-Type' : 'video/mp4'
	});
	
	// streams 
	
	var readStream=fs.createReadStream('video.mp4');
	
	//	readStream.on('data',function(chunk){
	//		console.log(chunk.length);
	//		res.write(chunk);
	//	});
	//	readStream.on('end',function(){
	//		res.end();
	//	});
	
	readStream.pipe(res);
	
	
	
});


server.listen(8080, function() {
	console.log('server listening at http://localhost:8080');
});