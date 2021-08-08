//Import os Modules
//const os=require('os')
//console.log(os.arch());
//console.log(os.version());
//console.log(os.platform());
//console.log(os.totalmem());

//Import fs files

//const fs=require('fs')
//writeoperation
//fs.writeFileSync('123.txt','I am Sameer Kishan and a very good boy')

//readoperation
//const abc=fs.readFileSync('./123.txt',{encoding:'utf8',flag:'r'})
//console.log(abc)

//append 
//fs.appendFileSync('./123.txt','\nI am intrested in playing cricket')

const http=require('http')
http.createServer((req,res)=>{
    res.write('I am from Mother Earth')
    res.end()
}).listen(3000);

