const http = require('http');
var options = {
    hostname: 'localhost',
    port: 8086,
    headers: {
        'Content-Type': 'application/json'
    },
    path: '/',
    method: 'POST'
};
var request = http.request(options, (res) => {
    res.setEncoding('utf8');
    var result = '';
    res.on('data', (data) => {
        result += data;
    });
    res.on('end', (data) => {
        //console.log(JSON.parse(JSON.stringify(result)));
        console.log(result);
    });
});
request.write(JSON.stringify({"name":'smain'}));
request.end();