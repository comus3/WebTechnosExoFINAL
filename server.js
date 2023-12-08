const express = require('express');
const app = express();
app.use(express.static("public"));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


app.use(express.static('public'));

app.post('/', (request,response)=>{

    //do something
})


app.get('/',(request,response)=>{
    //do something
})


app.listen(3000, function(){
    console.log("Server ok");
});