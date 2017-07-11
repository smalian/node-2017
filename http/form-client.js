const http = require('http');
const util = require('util');
const queryString = require('querystring');
var options = {
    hostname:'localhost',
    port:8086,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    path:'/',
    method:'POST'
};
var request = http.request(options,(res)=>{
    res.setEncoding('utf8');
    var result = '';
    res.on('data',(data)=>{
        result += data;
    });
    res.on('end',(data)=>{
        console.log(result);

    });
});
request.write(queryString.stringify({name:'smain'}));
request.end();