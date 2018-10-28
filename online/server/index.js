const express=require('express');
const app=express();
var students=[
    {
       name:"Gopal",
       age:25
},
{
    name:"Sumesh",
    age:34
}
];

console.log(students);

app.get('/',function(req,res){
  res.send('Hi, Welcome to my server');
});

app.listen(8000,function(){
    console.log("server running on port 8000");
});