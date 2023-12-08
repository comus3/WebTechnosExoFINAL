import Tele from "./models/tele.js";

const express = require('express');
const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));  
app.post('/',async function (request,response){

    if (request.body.something != null){
        //do something
        const test = await Tele.loadMany();
    }
})
app.get('/',async function (request,response){
    if (request.query.something != null){
        //do something
    }
})
app.listen(3000, function(){
    console.log("Server ok");
});