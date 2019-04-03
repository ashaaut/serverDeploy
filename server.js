const express = require('express');
const app=express();
const PORT=9000;
console.log(`listening on ${PORT}`);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.listen(PORT);
app.post('/',(req,res)=>{
  let response={
    FirstName:req.body.FirstName,
    LastName:req.body.LastName
  };
  res.end(JSON.stringify(response));
  console.log(response);
})
