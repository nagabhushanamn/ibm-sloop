module.exports = function(server) {
  
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
 
  router.get('/', server.loopback.status());
  
  router.get('/hello',function(req,res,next){
	  res.send('Hello from Loopback');
  });
  
  server.use(router);
  
  
};
