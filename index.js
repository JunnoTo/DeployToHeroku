var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/plain"})
    res.end("Hello world! it is I, Topias\n")
}).listen(process.env.PORT)
