const fs = require('fs')
const path = require('path')
const http = require("http");
const data = require('./data')
const server = http.createServer((req,res)=> {

  res.writeHead(200,{'content-type': 'application/json',
  'cache-control' : 'max-age=3600'
});
  res.write(JSON.stringify(data));
  res.end()
})

server.listen(3000,()=> {
   console.log("server is running on port 3000");
});
 
// read the  file
// fs.readFile('data.js', function(err,data){
//   console.log(data)
// })

// update the file

// fs.appendFile('files/home.txt',"i append new txt into the below", (err)=>{

//   if(!err)
//   console.log("updated")
// })

// fs.writeFile('files/home.txt',"updated the text", (err)=> {

// })

// rename

// fs.rename('files/home.txt', 'files/new.txt', (err)=>{
//   if(!err) console.log("renamed")
// })

// create file

// fs.writeFile("home.txt","new file",(err)=> {
  
// })
