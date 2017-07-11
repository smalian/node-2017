const mime = require('mime');
const http = require('http');
const util = require('util');
const queryString = require('querystring');
const url = require('url');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
var successCount = 0;
var app = http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        fs.createReadStream('./index.html').pipe(res);
    } else if (pathname == '/post') {
        var parser = new formidable.IncomingForm();
        parser.parse(req, (err, fields, files) => {
            console.log(files);
            var filename = fields.name + '.png';
            var total = fields.total;
            var index = fields.index;
            var size = fields.size;
            var src = fs.createReadStream(files.data.path);
            var target = fs.createWriteStream(filename + '.' + index);
            target.on('close', function () {
                if (successCount == total - 1) {
                    var fd = fs.openSync(filename, 'a');
                    var files = fs.readdirSync('.');
                    files.forEach((file) => {
                        if (file.startsWith(filename + '.')) {
                            var pos = Number(path.extname(file).slice(1)) - 1 * size;
                            var buff = fs.readFileSync(file);
                            fs.writeSync(fd, buff, 0, buff.length, pos);
                            fs.unlinkSync(file);

                        }
                    });
                    fs.closeSync(fd);
                    successCount = 0;
                } else {
                    successCount++;
                }
            });
            src.pipe(target);
            res.end('ok');
        })
    } else {
        res.end('404');
    }
}).listen(8088, () => {
    console.log('server started');
});
