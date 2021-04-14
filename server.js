var http = require('http')
var fs = require('fs')

http.get('http://jsonplaceholder.typicode.com/posts',(response)=>{
let data = '';   
response.on('data', (chunk) =>{
    data += chunk
})
response.on('end',()=>{
fs.writeFile('./result/post.js', data, (err)=>{
    if(data){
        console.log('File created successfully')
    }else{
console.log(err)
    }
})
})
})