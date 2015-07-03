var http = require('http');

http.createServer(function(request, response){
	console.log(request.url)
	var filePath = '.' + request.url;
	require('fs').readFile(filePath, 'binary', function(err, file){
		if(err){
			console.log('error');
		}
		else{
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(file, 'binary');
			response.end();
		}
	});
}).listen(8000);
console.log("server start");

