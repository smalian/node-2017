/*
* copy 文件有些小问题
*
*
* */






const fs = require('fs');
//同步的方式把src复制到target里边
function copy(src,target){
    //fs.readFileSync(target,{flag:'w'});
    //先读
    var list = [],result;
    fs.open(src,'r',(err,fd)=>{
        var pos = 0;
        function read(){
            var buffer = new Buffer(3);
            fs.read(fd,buffer,0,3,pos,function(err,bytesRead){
                //list.push(buffer.slice(0,bytesRead)); //push到list中
                buffer = buffer.slice(0,bytesRead);

                if(bytesRead>0){
                    fs.open('2.txt','w',(err,fd)=>{

                        console.log(buffer.toString());
                        console.log(pos);
                        //边读边写
                        fs.write(fd,buffer,0,3,pos,(err,bytesWritten)=>{
                            if(err){
                                console.error(err);
                            };
                            pos += bytesRead;

                        });
                    });
                    //read();  循环执行
                }else{

                    result = Buffer.concat(list);
                    console.log(result.toString());
                    return;
                    //全部存
                    // fs.writeFile(target,result,{
                    //     flag:'w',
                    //     encoding:'utf8'
                    // },(err)=>{
                    //     if(err) console.error(err);
                    // });
                }
            });
        }
        read();
    });

};
copy('line.txt','2.txt');
